
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  description?: string;
  className?: string;
}

const SocialLink = ({ href, icon, label, description, className }: SocialLinkProps) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "tech-box group w-full flex items-center p-4 hover:bg-tech-gray hover:bg-opacity-50 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(255,76,76,0.12)] transition-all duration-300 ease-out animate-slide-up",
        className
      )}
    >
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-tech-red/10 text-tech-red rounded-full mr-4 group-hover:bg-tech-red/20 transition-all duration-300">
        {icon}
      </div>
      
      <div className="flex-grow">
        <div className="flex items-center">
          <h3 className="font-medium text-lg text-tech-white group-hover:text-tech-red transition-colors duration-300">
            {label}
          </h3>
          <ExternalLink className="ml-2 w-4 h-4 text-tech-white/50 group-hover:text-tech-red transition-colors duration-300" />
        </div>
        {description && (
          <p className="text-sm text-tech-white/60 mt-1">{description}</p>
        )}
      </div>
    </a>
  );
};

export default SocialLink;
