import { Github, Linkedin, Mail } from "lucide-react";
import SocialLink from "./SocialLink";
import ThemeToggle from "./ThemeToggle";
const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6 md:p-8">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight animate-fade-in">
          Claiton
        </h1>
        <nav className="flex items-center gap-2 animate-fade-in animation-delay-100">
          <a 
            href="/blog" 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 ease-elegant"
          >
            blog
          </a>
          <ThemeToggle />
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md mx-auto">
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight animate-slide-up">
            Claiton
          </h2>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 animate-slide-up animation-delay-200">
            <SocialLink
              href="https://github.com/seuusername"
              icon={Github}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/seuperfil"
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:seu@email.com"
              icon={Mail}
              label="Email"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 md:p-8 text-center animate-fade-in animation-delay-300">
        <p className="text-sm text-muted-foreground">
          © 2024 Claiton • Licenciado sob{" "}
          <a 
            href="https://opensource.org/licenses/MIT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-200 ease-elegant underline underline-offset-4"
          >
            MIT
          </a>
          {" • "}
          Construído com{" "}
          <a 
            href="https://lovable.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-200 ease-elegant underline underline-offset-4"
          >
            Lovable
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;