import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";
import PageTransition from "./components/PageTransition";

import Index from "./pages/Index";
import About from "./pages/About";
import BlogHub from "./pages/BlogHub";
import BlogPost from "./pages/BlogPost";
import Portfolio from "./pages/Portfolio";
import ServicesHub from "./pages/services/ServicesHub";
import FireHardening from "./pages/services/FireHardening";
import CustomDecks from "./pages/services/CustomDecks";
import ResidentialSiding from "./pages/services/ResidentialSiding";
import CommercialSiding from "./pages/services/CommercialSiding";
import LocationPage from "./pages/LocationPage";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster position="top-center" />
        <BrowserRouter>
          <ScrollToTop />
          <PageTransition>
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
              
              {/* Locations */}
              <Route path="/locations/:slug" element={<LocationPage />} />
              
              {/* Support */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
          <BackToTopButton />

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
