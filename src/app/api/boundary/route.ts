import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // 抓取香港入境處實時通關時間
    const res = await fetch('https://www.immd.gov.hk/opendata/chi/transport/immigration_clearance_waiting_time.json', {
      cache: 'no-store'
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Fetch failed' }, { status: 500 });
  }
}
