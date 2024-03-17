import { NextRequest, NextResponse } from 'next/server'
import { getHitsByPathId } from '@/lib/api/goatcounter/hits'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const pathId = searchParams.get('path_id')

  if (!pathId) {
    return NextResponse.json({ message: 'No pathId provided' }, { status: 400 })
  }

  try {
    const hits = await getHitsByPathId([Number(pathId)])

    // Do whatever you want
    return NextResponse.json({ message: 'Success', hits }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching hits' },
      { status: 400 }
    )
  }
}
