// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Bonus from "./pages/Bonus";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import MoreBonuses from "./pages/MoreBonuses";
import BokalMassagePage from "./pages/BokalMassagePage/BokalMassagePage"; // ← שורה חשובה
import BokalCoursePage from './pages/course/bokal';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bonus" element={<Bonus />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/bonuses" element={<MoreBonuses />} />
          <Route path="/bokal-massage" element={<BokalMassagePage />} />
          <Route path="/course/bokal" element={<BokalCoursePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
