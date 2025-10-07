import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GraphicDesign from "./pages/GraphicDesign";
import VideoEditing from "./pages/VideoEditing";
import WebDevelopment from "./pages/WebDevelopment";
import ElectronicsProjects from "./pages/ElectronicsProjects";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/video-editing" element={<VideoEditing />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/electronics" element={<ElectronicsProjects />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
