
import { cn } from "@/lib/utils";

interface ProfileHeaderProps {
  imageUrl?: string;
  name: string;
  title: string;
  className?: string;
}

const ProfileHeader = ({ imageUrl, name, title, className }: ProfileHeaderProps) => {
  return (
    <div className={cn("text-center mb-8", className)}>
      <div className="relative mx-auto w-24 h-24 mb-4 overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover rounded-full border-2 border-tech-red/50 p-0.5 animate-pulse-subtle"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-tech-red to-tech-teal flex items-center justify-center text-white text-2xl font-bold">
            {name.charAt(0)}
          </div>
        )}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-tech-red to-tech-teal opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
      </div>
      
      <h1 className="text-2xl font-display font-bold text-tech-white relative inline-block tech-border pb-2 mb-2">
        {name}
      </h1>
      
      <p className="text-tech-white/70 text-lg max-w-xs mx-auto">
        {title}
      </p>
    </div>
  );
};

export default ProfileHeader;
