
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("text-center text-tech-white/40 text-sm py-4 mt-10", className)}>
      <p>© {new Date().getFullYear()} • Desenvolvido por Guilherme Satoshi</p>
      <div className="flex items-center justify-center space-x-1 mt-1">
        <span className="w-2 h-2 bg-tech-red rounded-full animate-pulse-subtle"></span>
        <span className="w-2 h-2 bg-tech-teal rounded-full animate-pulse-subtle animate-delay-300"></span>
      </div>
    </footer>
  );
};

export default Footer;
