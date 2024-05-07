import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
    console.log('inside middleware')
    return NextResponse.redirect(new URL('/articles', request.url))
}


export const config = {
    matcher: '/',
}