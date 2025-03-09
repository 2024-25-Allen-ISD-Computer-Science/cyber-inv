import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { pb } from '@/lib/pocketbase'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const requestCookie = request.cookies.get('pb_auth')
  
  // Load authentication from cookie
  if (requestCookie) {
    try {
      console.log('Loading cookie:', requestCookie.value)
      pb.authStore.loadFromCookie(`pb_auth=${requestCookie.value}`)
    } catch (error) {
      console.log('Error loading from cookie: ', error)
      pb.authStore.clear()
    }
  }

  // Validate and refresh authentication
  try {
    if (pb.authStore.isValid) {
      await pb.collection('Admin').authRefresh()
      console.log('Auth refreshed successfully')
    }
  } catch (err) {
    console.log('Invalid authstore or failed refresh: ', err)
    pb.authStore.clear()
  }

  console.log('Auth status:', pb.authStore.isValid)
  
  // Redirect logic
  const pathname = request.nextUrl.pathname

  // Redirect unauthenticated users from /admin to /adminLogin
  if (!pb.authStore.isValid && pathname.startsWith('/admin')) {
    const redirectTo = new URL('/adminLogin', request.url)
    redirectTo.search = new URLSearchParams({
      next: pathname,
    }).toString()
    console.log('Redirecting unauthenticated user to login: ', redirectTo)
    return NextResponse.redirect(redirectTo)
  }

  // Redirect authenticated users from /adminLogin to /admin
  if (pb.authStore.isValid && pathname.startsWith('/adminLogin')) {
    // Get the 'next' parameter from the query string instead of headers
    const searchParams = new URL(request.url).searchParams
    const nextUrl = searchParams.get('next')
    
    if (nextUrl && !nextUrl.startsWith('/adminLogin')) {
      const redirectTo = new URL(nextUrl, request.url)
      console.log('Redirecting authenticated user to:', redirectTo)
      return NextResponse.redirect(redirectTo)
    }
    
    const redirectTo = new URL('/admin', request.url)
    console.log('Redirecting authenticated user to admin:', redirectTo)
    return NextResponse.redirect(redirectTo)
  }

  // Set updated cookie if authentication state changed
  response.headers.set(
    'Set-Cookie',
    pb.authStore.exportToCookie({ httpOnly: false })
  )
  
  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}