import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Healthcare from "./pages/Healthcare";
import Accommodation from "./pages/Accommodation";
import Retail from "./pages/Retail";
import HomeServices from "./pages/HomeServices";
import HigherEducation from "./pages/HigherEducation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/home-services" element={<HomeServices />} />
          <Route path="/higher-education" element={<HigherEducation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
