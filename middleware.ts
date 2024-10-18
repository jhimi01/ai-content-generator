import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware((auth, req) => {
  const { userId } = auth(); // Get the userId from the session
  const { pathname } = req.nextUrl; // Get the current URL path
  console.log('userId', userId); //

  // If the route is protected and the user is not authenticated
  if (isProtectedRoute(req) && !userId) {
    const signInUrl = new URL('/sign-in', req.url); // Redirect to the sign-in page
    return NextResponse.redirect(signInUrl);
  }

  // Allow access to the requested page
  return NextResponse.next();
});

// Protect only /dashboard and its subroutes, allow access to home page ("/")
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
