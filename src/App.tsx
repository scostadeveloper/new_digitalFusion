import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import WhatsappPopup from "./components/WhatsappPopup";
import { GoogleAnalytics } from "./components/GoogleAnalytics";

/**
 * Cliente de consulta para gerenciar estados e requisições da API
 */
const queryClient = new QueryClient();

/**
 * Componente principal da aplicação
 * Configura o roteamento e os provedores de contexto
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        {/* Componentes de notificação */}
        <Toaster />
        <Sonner />
        
        {/* Configuração do roteamento */}
        <BrowserRouter>
          {/* Google Analytics */}
          <GoogleAnalytics />
          
          <div className="min-h-screen flex flex-col">
            {/* Navegação principal */}
            <Navbar />
            
            {/* Conteúdo principal */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:id" element={<PortfolioDetail />} />
                <Route path="/contact" element={<Contact />} />
                {/* Rota de fallback para páginas não encontradas */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            
            {/* Rodapé do site */}
            <Footer />
            <WhatsappPopup />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
