import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
 
const publicRoutes = ["/views/login", "/views/inicio", "/views/registro", "/"]
 
export default async function middleware(req) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = !publicRoutes.includes(path)
 
  const cookie = (await cookies()).get('user')?.value

  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL('/views/login', req.nextUrl))
  }

  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}