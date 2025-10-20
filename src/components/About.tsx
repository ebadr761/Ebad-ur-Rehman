import React from 'react';
import Container from './Container';
import AnimatedElement from './AnimatedElement';
import { SKILLS, CERTIFICATIONS } from '@/data/skills';
import { EDUCATION, EXPERIENCE } from '@/data/education';
import { PROFILE } from '@/data/links';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 border-t border-border bg-background">
      <Container>
        <AnimatedElement delay={0}>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-text">About Me</h2>
        </AnimatedElement>

        {/* Education */}
        <div className="mb-20">
          <AnimatedElement delay={1}>
            <h3 className="text-2xl font-bold text-text mb-8">Education</h3>
          </AnimatedElement>
          {EDUCATION.map((edu, idx) => (
            <AnimatedElement key={idx} delay={2 + idx}>
              <div className="mb-8 pb-8 border-b border-border/50 last:border-b-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-text">{edu.degree} in {edu.field}</h4>
                    <p className="text-subtext">{edu.school}</p>
                  </div>
                  <span className="text-sm text-muted whitespace-nowrap">
                    {edu.startDate} – {edu.endDate}
                  </span>
                </div>
                <ul className="space-y-2 text-subtext">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="text-sm flex gap-3">
                      <span className="text-accentBlue mt-1">→</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Experience */}
        <div className="mb-20">
          <AnimatedElement delay={3}>
            <h3 className="text-2xl font-bold text-text mb-8">Experience</h3>
          </AnimatedElement>
          {EXPERIENCE.map((exp, idx) => (
            <AnimatedElement key={idx} delay={4 + idx}>
              <div className="mb-10 pb-10 border-b border-border/50 last:border-b-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-text group-hover:text-accentBlue transition-colors">
                      {exp.title}
                    </h4>
                    <p className="text-subtext">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className="text-sm text-muted whitespace-nowrap">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <p className="text-subtext mb-4 leading-relaxed">{exp.description}</p>
                <ul className="space-y-2 mb-4 text-subtext text-sm">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-accentOrange mt-1 flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs bg-surface text-subtext border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-20">
          <AnimatedElement delay={5}>
            <h3 className="text-2xl font-bold text-text mb-8">Technical Skills</h3>
          </AnimatedElement>
          <div className="grid md:grid-cols-2 gap-8">
            {SKILLS.map((skillGroup, idx) => (
              <AnimatedElement key={skillGroup.category} delay={6 + idx}>
                <div>
                  <h4 className="text-lg font-semibold text-accentBlue mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm bg-panel border border-border text-subtext hover:border-accentBlue hover:text-accentBlue transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {CERTIFICATIONS.length > 0 && (
          <AnimatedElement delay={7}>
            <div>
              <h3 className="text-2xl font-bold text-text mb-6">Certifications</h3>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-4 rounded-lg border border-border bg-panel flex justify-between items-center"
                  >
                    <span className="text-text font-medium">{cert.title}</span>
                    <span className="text-sm text-muted">
                      {cert.status} • {cert.targetDate}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>
        )}
      </Container>
    </section>
  );
}