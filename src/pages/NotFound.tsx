import { lazy, Suspense } from "react";
import { useLocation, Link } from "react-router-dom";

const Navbar = lazy(() => import("@/components/landing/Navbar"));
const Footer = lazy(() => import("@/components/landing/Footer"));

const PageLoader = () => <div className="min-h-screen bg-background" />;

const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
      </Suspense>
      <div className="flex min-h-screen items-center justify-center bg-muted pt-20">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <Link to="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </Link>
        </div>
      </div>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default NotFound;
