
import { useEffect } from "react";
import { 
  Github, 
  Instagram, 
  Linkedin, 
  Mail, 
  Twitter, 
  Youtube, 
  Globe, 
  Code
} from "lucide-react";
import ProfileHeader from "@/components/ProfileHeader";
import SocialLink from "@/components/SocialLink";
import { TechBackground } from "@/components/TechShapes";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Index = () => {
  useEffect(() => {
    // Welcome toast
    setTimeout(() => {
      toast("Bem-vindo ao meu LinkTree", {
        description: "Conecte-se comigo através das minhas redes sociais",
        position: "bottom-center",
      });
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-4 py-12">
      {/* Background elements */}
      <TechBackground />
      
      <main className="container max-w-md z-10 animate-fade-in">
        <ProfileHeader 
          name="Meu Nome"
          title="Desenvolvedor & Designer"
          className="animate-scale-in"
        />
        
        <div className="space-y-3 mt-8">
          <SocialLink 
            href="https://github.com/username"
            icon={<Github className="w-5 h-5" />}
            label="GitHub"
            description="Confira meus projetos e contribuições"
            className="animate-delay-100"
          />
          
          <SocialLink 
            href="https://linkedin.com/in/username"
            icon={<Linkedin className="w-5 h-5" />}
            label="LinkedIn"
            description="Conecte-se profissionalmente comigo"
            className="animate-delay-200"
          />
          
          <SocialLink 
            href="https://instagram.com/username"
            icon={<Instagram className="w-5 h-5" />}
            label="Instagram"
            description="Acompanhe meu dia a dia"
            className="animate-delay-300"
          />
          
          <SocialLink 
            href="https://twitter.com/username"
            icon={<Twitter className="w-5 h-5" />}
            label="Twitter"
            description="Atualizações e pensamentos"
            className="animate-delay-400"
          />
          
          <SocialLink 
            href="https://youtube.com/c/username"
            icon={<Youtube className="w-5 h-5" />}
            label="YouTube"
            description="Tutoriais e conteúdo educativo"
            className="animate-delay-500"
          />
          
          <SocialLink 
            href="mailto:email@example.com"
            icon={<Mail className="w-5 h-5" />}
            label="Email"
            description="Entre em contato diretamente"
            className="animate-delay-500"
          />
          
          <SocialLink 
            href="https://mywebsite.com"
            icon={<Globe className="w-5 h-5" />}
            label="Website"
            description="Visite meu site profissional"
            className="animate-delay-500"
          />
          
          <SocialLink 
            href="https://dev.to/username"
            icon={<Code className="w-5 h-5" />}
            label="Blog"
            description="Artigos técnicos e tutoriais"
            className="animate-delay-500"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
