
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { TechBackground } from "@/components/TechShapes";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-4 py-12">
      {/* Background elements */}
      <TechBackground />
      
      <div className="text-center z-10 animate-fade-in">
        <div className="text-tech-red text-7xl font-bold mb-4 animate-pulse-subtle">404</div>
        <h1 className="text-3xl font-display font-bold text-tech-white mb-6 tech-border pb-2">
          Página não encontrada
        </h1>
        <p className="text-tech-white/70 text-lg mb-8 max-w-sm">
          A página que você está procurando não existe ou foi removida.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 tech-box text-tech-white hover:text-tech-red transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;
