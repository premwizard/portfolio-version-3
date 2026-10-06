import { NextResponse } from 'next/server';

// Server memory fallback counter
let serverLikesCount = 0;

// Helper to fetch likes file from GitHub repository
async function getGitHubLikes() {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER || 'premwizard';
  const repo = process.env.GITHUB_REPO || 'portfolio-version-3';
  const path = process.env.GITHUB_LIKES_FILE || 'likes.json';

  if (!token || token === 'your_github_personal_access_token_here') {
    return null;
  }

  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-Likes-Proxy',
      },
    });

    if (res.ok) {
      const data = await res.json();
      const content = Buffer.from(data.content, 'base64').toString('utf-8');
      const parsed = JSON.parse(content);
      const count = typeof parsed.portfolio === 'number' ? parsed.portfolio : 0;
      return { count, sha: data.sha, owner, repo, path, token, exists: true };
    }

    if (res.status === 404) {
      // File does not exist in repository yet - ready to create on first like
      return { count: 0, sha: null, owner, repo, path, token, exists: false };
    }
  } catch (err) {
    console.error('Error fetching from GitHub API:', err);
  }
  return null;
}

// Helper to commit or create updated likes file on GitHub
async function updateGitHubLikes(action: 'up' | 'down') {
  const gh = await getGitHubLikes();
  if (!gh) return null;

  const newCount = action === 'down' ? Math.max(0, gh.count - 1) : gh.count + 1;
  const updatedJSON = JSON.stringify({ portfolio: newCount, updatedAt: new Date().toISOString() }, null, 2);
  const base64Content = Buffer.from(updatedJSON).toString('base64');

  const bodyPayload: Record<string, unknown> = {
    message: `chore: update portfolio likes count to ${newCount}`,
    content: base64Content,
  };

  // If file already exists, send its sha; if new file, omit sha to create it
  if (gh.sha) {
    bodyPayload.sha = gh.sha;
  }

  try {
    const res = await fetch(`https://api.github.com/repos/${gh.owner}/${gh.repo}/contents/${gh.path}`, {
      method: 'PUT',
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${gh.token}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        'User-Agent': 'Portfolio-Likes-Proxy',
      },
      body: JSON.stringify(bodyPayload),
    });

    if (res.ok) {
      return newCount;
    } else {
      const errText = await res.text();
      console.error('GitHub PUT failed:', res.status, errText);
    }
  } catch (err) {
    console.error('Error committing to GitHub API:', err);
  }
  return null;
}

export async function GET() {
  const gh = await getGitHubLikes();
  if (gh !== null && gh.exists) {
    serverLikesCount = gh.count;
    return NextResponse.json({ count: gh.count, source: 'github' });
  }

  return NextResponse.json({ count: serverLikesCount, source: gh !== null ? 'github_pending' : 'memory' });
}

export async function POST(request: Request) {
  let action: 'up' | 'down' = 'up';
  try {
    const body = await request.json().catch(() => ({}));
    if (body && body.action === 'down') {
      action = 'down';
    }
  } catch {}

  // 1. Try committing to GitHub repo
  const updatedGhCount = await updateGitHubLikes(action);
  if (updatedGhCount !== null) {
    serverLikesCount = updatedGhCount;
    return NextResponse.json({ count: updatedGhCount, source: 'github' });
  }

  // 2. Fallback memory update if GitHub fails
  if (action === 'down') {
    serverLikesCount = Math.max(0, serverLikesCount - 1);
  } else {
    serverLikesCount += 1;
  }

  return NextResponse.json({ count: serverLikesCount, source: 'memory' });
}
