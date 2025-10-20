import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Container from './Container';
import AnimatedElement from './AnimatedElement';
import { PROJECTS } from '@/data/projects';

export default function Projects() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <section id="work" className="py-20 px-6 border-t border-border bg-surface/30">
      <Container>
        <AnimatedElement delay={0}>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-text">Featured Work</h2>
        </AnimatedElement>

        <div className="space-y-12">
          {PROJECTS.map((project, idx) => (
            <AnimatedElement key={project.slug} delay={idx + 1}>
              <div
                className="group cursor-pointer rounded-lg border border-border bg-panel p-6 md:p-8 transition-all duration-300 hover:border-accentBlue hover:bg-panel/60"
                onMouseEnter={() => setHoveredSlug(project.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-text group-hover:text-accentBlue transition-colors">
                        {project.title}
                      </h3>
                      <span className="px-2 py-1 rounded text-xs font-medium bg-surface text-subtext">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-lg text-subtext mb-4 leading-relaxed max-w-2xl">
                      {project.blurb}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-muted uppercase tracking-wider">
                    {project.area}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-surface text-subtext border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.links?.code && (
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-subtext hover:text-accentBlue hover:border-accentBlue transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-subtext hover:text-accentOrange hover:border-accentOrange transition-colors"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Container>
    </section>
  );
}