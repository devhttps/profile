
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ShapeProps {
  className?: string;
  children?: ReactNode;
}

export const Circle = ({ className }: ShapeProps) => (
  <div className={cn(
    "absolute w-32 h-32 rounded-full bg-tech-red/5 border border-tech-red/20 backdrop-blur-sm animate-float", 
    className
  )} />
);

export const Square = ({ className }: ShapeProps) => (
  <div className={cn(
    "absolute w-16 h-16 border border-tech-teal/30 backdrop-blur-sm animate-float", 
    className
  )} />
);

export const Diamond = ({ className }: ShapeProps) => (
  <div className={cn(
    "absolute w-16 h-16 border border-tech-white/10 backdrop-blur-sm rotate-45 animate-float", 
    className
  )} />
);

export const Cube = ({ className }: ShapeProps) => {
  return (
    <div className={cn("absolute w-10 h-10 perspective-500", className)}>
      <div className="relative w-full h-full transform-style-3d animate-float">
        {/* Front face */}
        <div className="absolute inset-0 border border-tech-teal/30 transform translate-z-5"></div>
        {/* Back face */}
        <div className="absolute inset-0 border border-tech-teal/30 transform -translate-z-5"></div>
        {/* Left face */}
        <div className="absolute inset-0 border border-tech-teal/30 transform -translate-x-5 rotate-y-90"></div>
        {/* Right face */}
        <div className="absolute inset-0 border border-tech-teal/30 transform translate-x-5 rotate-y-90"></div>
        {/* Top face */}
        <div className="absolute inset-0 border border-tech-teal/30 transform -translate-y-5 rotate-x-90"></div>
        {/* Bottom face */}
        <div className="absolute inset-0 border border-tech-teal/30 transform translate-y-5 rotate-x-90"></div>
      </div>
    </div>
  );
};

export const TechBackground = () => (
  <>
    <div className="absolute inset-0 grid-pattern opacity-20 -z-10"></div>
    <div className="absolute inset-0 dot-pattern opacity-30 -z-10"></div>
    <Circle className="top-20 left-10 animate-delay-100" />
    <Circle className="bottom-20 right-5 w-40 h-40 animate-delay-300" />
    <Square className="top-40 right-20 animate-delay-200" />
    <Diamond className="bottom-40 left-10 animate-delay-400" />
    <Cube className="top-60 left-1/2 animate-delay-500" />
  </>
);
