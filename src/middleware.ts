// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//     const cookie = request.cookies.get('dealer_info');
//     if (cookie) {
//         try {
//             const dealerInfo = JSON.parse(cookie.value);
//             const isRemember = dealerInfo.isRemember;

//             if (isRemember) {
//                 const createdAt = new Date(dealerInfo.createdAt);
//                 const expiresAt = new Date(createdAt);
//                 expiresAt.setDate(createdAt.getDate() + 7);

//                 if (new Date() > expiresAt) {
//                     // Cookie has expired, redirect to login page
//                     return NextResponse.redirect(new URL(AppRouter.login, request.url));
//                 }
//             }

//             if (request.nextUrl.pathname === "/login") {
//                 // If user is trying to access login page but already has a valid cookie, redirect to result award page
//                 return NextResponse.redirect(new URL(AppRouter.adminResultAward, request.url));
//             }

//             if (request.nextUrl.pathname === "/") {
//                 // If user is trying to access the home page, redirect to result award page
//                 return NextResponse.redirect(new URL(AppRouter.adminResultAward, request.url));
//             }
//         } catch (error) {
//             console.error("Failed to parse dealer_info cookie:", error);
//             return NextResponse.redirect(new URL(AppRouter.login, request.url));
//         }
//     } else {
//         // No cookie found, redirect to login page
//         if (request.nextUrl.pathname !== "/login") {
//             return NextResponse.redirect(new URL(AppRouter.login, request.url));
//         }
//     }
// }

// export const config = {
//     matcher: [
//         "/",
//         "/admin/:path*",
//         "/login"
//     ],
// };
