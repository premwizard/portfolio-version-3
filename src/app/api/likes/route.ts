import { NextResponse } from 'next/server';

// Fallback in-memory counter if GitHub API or env vars are not set
let memoryLikesCount = 0;

// Helper to fetch likes data from GitHub repository securely (Serverless Proxy)
async function getGitHubLikes() {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER || 'premwizard';
  const repo = process.env.GITHUB_REPO || 'portfolio-version-3';
  const path = process.env.GITHUB_LIKES_FILE || 'likes.json';

  if (!token) {
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
      return { count, sha: data.sha, owner, repo, path, token };
    }
  } catch (err) {
    console.error('Error reading from GitHub API:', err);
  }
  return null;
}

// Helper to commit updated likes count to GitHub
async function updateGitHubLikes(action: 'up' | 'down') {
  const gh = await getGitHubLikes();
  if (!gh) return null;

  const newCount = action === 'down' ? Math.max(0, gh.count - 1) : gh.count + 1;
  const updatedJSON = JSON.stringify({ portfolio: newCount, updatedAt: new Date().toISOString() }, null, 2);
  const base64Content = Buffer.from(updatedJSON).toString('base64');

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
      body: JSON.stringify({
        message: `chore: update portfolio likes count to ${newCount}`,
        content: base64Content,
        sha: gh.sha,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return newCount;
    }
  } catch (err) {
    console.error('Error committing to GitHub API:', err);
  }
  return null;
}

export async function GET() {
  // 1. Try reading from GitHub repository proxy
  const gh = await getGitHubLikes();
  if (gh !== null) {
    memoryLikesCount = gh.count;
    return NextResponse.json({ count: gh.count, source: 'github' });
  }

  // 2. Fallback to CounterAPI / Memory
  try {
    const res = await fetch('https://api.counterapi.dev/v1/prem-m-portfolio/likes', {
      cache: 'no-store',
    });
    if (res.ok) {
      const data = await res.json();
      if (typeof data.count === 'number') {
        memoryLikesCount = data.count;
      }
    }
  } catch (e) {}

  return NextResponse.json({ count: memoryLikesCount, source: 'fallback' });
}

export async function POST(request: Request) {
  let action: 'up' | 'down' = 'up';
  try {
    const body = await request.json().catch(() => ({}));
    if (body && body.action === 'down') {
      action = 'down';
    }
  } catch {}

  // 1. Try updating via GitHub proxy
  const updatedGhCount = await updateGitHubLikes(action);
  if (updatedGhCount !== null) {
    memoryLikesCount = updatedGhCount;
    return NextResponse.json({ count: updatedGhCount, source: 'github' });
  }

  // 2. Fallback memory & CounterAPI update
  if (action === 'down') {
    memoryLikesCount = Math.max(0, memoryLikesCount - 1);
  } else {
    memoryLikesCount += 1;
  }

  try {
    const endpoint = action === 'down' ? 'down' : 'up';
    const res = await fetch(`https://api.counterapi.dev/v1/prem-m-portfolio/likes/${endpoint}`, {
      cache: 'no-store',
    });
    if (res.ok) {
      const data = await res.json();
      if (typeof data.count === 'number') {
        memoryLikesCount = data.count;
      }
    }
  } catch (e) {}

  return NextResponse.json({ count: memoryLikesCount, source: 'fallback' });
}
