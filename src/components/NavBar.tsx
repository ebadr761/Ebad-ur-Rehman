import React, { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import Container from './Container';
import { buttonColors } from '@/lib/theme';

interface NavItem {
  label: string;
  href: string;
  colorIndex: number;
  isActive?: boolean;
  isHovered?: boolean;
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { label: 'Work', href: '#work', colorIndex: 0 },
    { label: 'About', href: '#about', colorIndex: 1 },
    { label: 'Contact', href: '#contact', colorIndex: 2 },
  ];

  const navWithAccents = navItems.map((n) => ({
    ...n,
    isHovered: hoveredItem === n.href,
  }));

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tight text-text hover:text-accentPurple transition-colors">
            Ebad
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navWithAccents.map((n) => {
              const colors = buttonColors[n.colorIndex];
              const isHighlighted = n.isHovered;
              return (
                <a
                  key={n.href}
                  href={n.href}
                  onMouseEnter={() => setHoveredItem(n.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="text-sm font-medium transition-colors duration-300"
                  style={{
                    color: isHighlighted ? colors.text : '#9da5b4',
                  }}
                >
                  {n.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Resume + Social links */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-subtext hover:text-accentPurple transition-colors"
            >
              Resume
            </a>
            <a
              href="https://github.com/ebadr761"
              target="_blank"
              rel="noreferrer"
              className="text-subtext hover:text-accentBlue transition-colors"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://linkedin.com/in/rehmane"
              target="_blank"
              rel="noreferrer"
              className="text-subtext hover:text-accentOrange transition-colors"
            >
              <Linkedin className="size-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg border border-border p-2 md:hidden transition-colors hover:border-accentBlue"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="grid gap-2 pb-4 md:hidden" onMouseLeave={() => setHoveredItem(null)}>
            {navWithAccents.map((n) => {
              const colors = buttonColors[n.colorIndex];
              const isHighlighted = n.isHovered;

              return (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  onMouseEnter={() => setHoveredItem(n.href)}
                  className="rounded-lg border bg-panel px-3 py-2 transition-all duration-300"
                  style={{
                    borderColor: isHighlighted ? colors.border : '#2b3240',
                    color: isHighlighted ? colors.text : '#9da5b4',
                  }}
                >
                  {n.label}
                </a>
              );
            })}
          </div>
        )}
      </Container>
    </header>
  );
}