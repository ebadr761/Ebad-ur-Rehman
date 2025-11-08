import { ArrowUp, Github, Linkedin } from 'lucide-react';
import Container from './Container';
import { PROFILE } from '@/data/links';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border py-16 bg-gradient-to-b from-surface/50 to-background">
      <Container>
        <div className="flex flex-col items-center gap-8">
          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group p-4 rounded-full glass hover:glass-strong hover:scale-110 hover:shadow-soft transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-accentBlue group-hover:-translate-y-1 transition-transform" />
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PROFILE.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass text-subtext hover:text-accentBlue hover:glass-strong hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PROFILE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass text-subtext hover:text-accentOrange hover:glass-strong hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted text-xs">
              © {new Date().getFullYear()} • Built with React & Tailwind CSS • Inspired by Ayu Mirage
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}