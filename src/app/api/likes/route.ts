import { NextResponse } from 'next/server';

// Global shared memory counter on Next.js server
let serverLikesCount = 0;

export async function GET() {
  try {
    const res = await fetch('https://api.counterapi.dev/v1/prem-m-portfolio/likes', {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache' },
    });
    if (res.ok) {
      const data = await res.json();
      if (typeof data.count === 'number') {
        serverLikesCount = Math.max(serverLikesCount, data.count);
      }
    }
  } catch (error) {
    // Graceful fallback to server memory
  }

  return NextResponse.json({ count: serverLikesCount });
}

export async function POST(request: Request) {
  let action: 'up' | 'down' = 'up';
  try {
    const body = await request.json().catch(() => ({}));
    if (body && body.action === 'down') {
      action = 'down';
    }
  } catch {}

  // Update server memory immediately
  if (action === 'down') {
    serverLikesCount = Math.max(0, serverLikesCount - 1);
  } else {
    serverLikesCount += 1;
  }

  // Asynchronously sync with external counter service
  try {
    const endpoint = action === 'down' ? 'down' : 'up';
    const res = await fetch(`https://api.counterapi.dev/v1/prem-m-portfolio/likes/${endpoint}`, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache' },
    });

    if (res.ok) {
      const data = await res.json();
      if (typeof data.count === 'number') {
        serverLikesCount = data.count;
      }
    }
  } catch (error) {
    // Keep local server count
  }

  return NextResponse.json({ count: serverLikesCount });
}
