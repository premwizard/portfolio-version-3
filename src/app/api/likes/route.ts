import { NextResponse } from 'next/server';

// In-memory global likes storage for server process
let globalLikesMemory = 0;

export async function GET() {
  try {
    const res = await fetch('https://api.counterapi.dev/v1/portfolio-prem-m-likes-v2/likes', {
      cache: 'no-store',
    });
    if (res.ok) {
      const data = await res.json();
      if (typeof data.count === 'number') {
        globalLikesMemory = data.count;
        return NextResponse.json({ count: data.count });
      }
    }
  } catch (error) {
    console.error('CounterAPI fetch error:', error);
  }

  return NextResponse.json({ count: globalLikesMemory });
}

export async function POST(request: Request) {
  let action = 'up';
  try {
    const body = await request.json().catch(() => ({}));
    if (body && body.action === 'down') {
      action = 'down';
    }

    const endpoint = action === 'down' ? 'down' : 'up';
    const res = await fetch(`https://api.counterapi.dev/v1/portfolio-prem-m-likes-v2/likes/${endpoint}`, {
      cache: 'no-store',
    });

    if (res.ok) {
      const data = await res.json();
      if (typeof data.count === 'number') {
        globalLikesMemory = data.count;
        return NextResponse.json({ count: data.count });
      }
    }
  } catch (error) {
    console.error('CounterAPI update error:', error);
  }

  // Fallback memory update if remote API is unreachable
  if (action === 'down') {
    globalLikesMemory = Math.max(0, globalLikesMemory - 1);
  } else {
    globalLikesMemory += 1;
  }

  return NextResponse.json({ count: globalLikesMemory });
}
