import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";
import PageTransition from "./components/PageTransition";

// ── Route-level code splitting ──────────────────────────────────────────────
// Each page is a separate chunk that only downloads when the route is visited.
// This dramatically reduces the initial JS bundle the user must parse on load.
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const BlogHub = lazy(() => import("./pages/BlogHub"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ServicesHub = lazy(() => import("./pages/services/ServicesHub"));
const FireHardening = lazy(() => import("./pages/services/FireHardening"));
const CustomDecks = lazy(() => import("./pages/services/CustomDecks"));
const ResidentialSiding = lazy(() => import("./pages/services/ResidentialSiding"));
const CommercialSiding = lazy(() => import("./pages/services/CommercialSiding"));
const FireHardeningChecklist = lazy(() => import("./pages/FireHardeningChecklist"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Minimal fallback — white screen while route chunk downloads (usually <100ms on cached vendor)
const PageFallback = () => <div className="min-h-screen bg-white" aria-hidden />;

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster position="top-center" />
        <BrowserRouter>
          <ScrollToTop />
          <PageTransition>
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<BlogHub />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/portfolio" element={<Portfolio />} />

                {/* Services */}
                <Route path="/services" element={<ServicesHub />} />
                <Route path="/services/fire-hardening" element={<FireHardening />} />
                <Route path="/services/decking" element={<CustomDecks />} />
                <Route path="/services/residential-siding" element={<ResidentialSiding />} />
                <Route path="/services/commercial-siding" element={<CommercialSiding />} />
                <Route path="/commercial" element={<CommercialSiding />} />
                <Route path="/fire-hardening-checklist" element={<FireHardeningChecklist />} />

                {/* Locations */}
                <Route path="/locations/:slug" element={<LocationPage />} />

                {/* Support */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                {/* Catch-all */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </PageTransition>
          <BackToTopButton />

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
