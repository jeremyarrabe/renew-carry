import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/products(.*)", "/item(.*)"],
  // publicRoutes: ['/(.*)'],
  ignoredRoutes: ["/api/webhooks(.*)", "/favicon.ico", "/about"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
