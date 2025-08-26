import './index.css'
import { ThemeProvider } from 'next-themes'
import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:bg-muted hover:scale-110"
      aria-label="Alternar modo escuro"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="flex justify-between items-center p-6 md:p-8">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
          Claiton
        </h1>
         <nav className="flex items-center gap-2">
           <a 
             href="#about"
             className="text-muted-foreground hover:text-foreground transition-colors"
           >
             sobre
           </a>
           <ThemeToggle />
         </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md mx-auto">
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Claiton
          </h2>

          {/* Social links */}
           <div className="flex items-center justify-center gap-4">
             <a
               href="https://github.com/claitonr"
               target="_blank"
               rel="noopener noreferrer"
               className="group inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 hover:bg-muted hover:scale-110"
               aria-label="GitHub"
             >
               <Github className="w-6 h-6" />
             </a>
             <a
               href="https://www.linkedin.com/in/claiton-roberto-5812a39b/"
               target="_blank"
               rel="noopener noreferrer"
               className="group inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 hover:bg-muted hover:scale-110"
               aria-label="LinkedIn"
             >
               <Linkedin className="w-6 h-6" />
             </a>
             <a
               href="mailto:claiton@duck.com"
               className="group inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 hover:bg-muted hover:scale-110"
               aria-label="Email"
             >
               <Mail className="w-6 h-6" />
             </a>
           </div>
        </div>
      </main>

      {/* About section */}
      <section id="about" className="px-6 md:px-8 pb-12">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
            Sobre
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sou entusiasta de tecnologia que gosta de resolver problemas e otimizar processos.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 md:p-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2024 Claiton • Licenciado sob{" "}
          <a 
            href="https://opensource.org/licenses/MIT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline underline-offset-4"
          >
            MIT
          </a>
          {" • "}
          Construído com{" "}
          <a 
            href="https://lovable.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline underline-offset-4"
          >
            Lovable
          </a>
        </p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AppContent />
    </ThemeProvider>
  )
}

export default App