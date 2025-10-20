import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from './Container';
import AnimatedElement from './AnimatedElement';
import { PROFILE } from '@/data/links';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-background">
      <Container>
        <div className="max-w-4xl w-full space-y-8">
          <AnimatedElement delay={0}>
            <div className="space-y-2">
              <p className="text-accentBlue text-sm font-medium">Hey, I'm</p>
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-text">
                {PROFILE.name}
              </h1>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={1}>
            <div className="flex flex-wrap gap-2">
              {PROFILE.titles.map((title, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full border border-border bg-panel text-sm font-medium text-subtext"
                >
                  {title}
                </span>
              ))}
            </div>
          </AnimatedElement>

          <AnimatedElement delay={2}>
            <p className="text-lg text-subtext leading-relaxed max-w-2xl">
              {PROFILE.tagline}
            </p>
          </AnimatedElement>

          <AnimatedElement delay={3}>
            <div className="flex flex-wrap gap-4 pt-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-accentBlue text-background font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Get in touch <ArrowRight size={18} />
              </a>
            </div>
          </AnimatedElement>
        </div>
      </Container>
    </section>
  );
}