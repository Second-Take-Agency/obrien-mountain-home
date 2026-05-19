import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, Flame, Mountain } from "lucide-react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Helmet>
        <title>404 – Page Not Found | O'Brien Mountain Home</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header />
      <main className="flex-1 flex items-center justify-center pt-24 pb-16">
        <div className="text-center px-4 max-w-lg mx-auto">

          {/* Branded icon block */}
          <div className="relative w-28 h-28 mx-auto mb-8">
            <div className="w-28 h-28 bg-primary rounded-3xl flex items-center justify-center shadow-lg shadow-primary/30">
              <Mountain className="w-10 h-10 text-slate-900 absolute" />
              <Flame className="w-5 h-5 text-slate-900 absolute bottom-5 right-5" />
            </div>
            <div className="absolute -top-2 -right-2 bg-slate-900 text-primary text-xs font-black px-2 py-1 rounded-lg tracking-widest">
              404
            </div>
          </div>

          {/* Wordmark */}
          <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
            O'Brien Mountain Home
          </p>

          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            This page doesn't exist
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            But we've still got your home covered. Head back to find fire hardening, decking, and siding services built for Northern California.
          </p>

          <Button asChild size="lg" className="rounded-full bg-primary text-slate-900 hover:bg-primary/90 font-bold px-8">
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Return Home
            </Link>
          </Button>

          <p className="mt-8 text-sm text-slate-400">
            Need help?{" "}
            <a href="tel:5309997495" className="text-primary font-semibold hover:underline">
              (530) 999-7495
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
