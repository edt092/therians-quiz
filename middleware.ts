import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.cookies.get('lang')) return NextResponse.next()
  const country = request.headers.get('x-vercel-ip-country') ?? 'XX'
  const lang = country === 'US' ? 'en' : 'es'
  const response = NextResponse.next()
  response.cookies.set('lang', lang, { maxAge: 60 * 60 * 24 * 30, path: '/' })
  return response
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon).*)'] }
