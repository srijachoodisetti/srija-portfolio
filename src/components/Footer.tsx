import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/10 mt-10">
      <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="gradient-text font-semibold">Srija Chodisetti</span>. Crafted with passion.
        </p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/srijachoodisetti" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/srija-choodisetti" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:srijachoodisetti@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition">
            <Mail className="h-4 w-4" />
          </a>
          <a href="#home" className="w-10 h-10 rounded-full btn-gradient text-primary-foreground flex items-center justify-center ml-2">
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
