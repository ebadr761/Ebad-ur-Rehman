import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import Container from './Container';
import AnimatedElement from './AnimatedElement';
import { PROFILE } from '@/data/links';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 border-t border-border bg-surface/30">
      <Container>
        <AnimatedElement delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text">
              Let's Connect
            </h2>
            <p className="text-lg text-subtext max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities, interesting problems, and collaborations. Feel free to reach out!
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={1}>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Email */}
            <a
              href={`mailto:${PROFILE.email}`}
              className="group p-6 rounded-lg border border-border bg-panel hover:border-accentBlue hover:bg-panel/60 transition-all duration-300 flex items-center gap-4"
            >
              <div className="p-3 rounded-lg bg-surface group-hover:bg-accentBlue/10 transition-colors">
                <Mail size={24} className="text-accentBlue" />
              </div>
              <div>
                <p className="text-sm text-muted">Email</p>
                <p className="text-text font-semibold">{PROFILE.email}</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${PROFILE.phone}`}
              className="group p-6 rounded-lg border border-border bg-panel hover:border-accentOrange hover:bg-panel/60 transition-all duration-300 flex items-center gap-4"
            >
              <div className="p-3 rounded-lg bg-surface group-hover:bg-accentOrange/10 transition-colors">
                <Phone size={24} className="text-accentOrange" />
              </div>
              <div>
                <p className="text-sm text-muted">Phone</p>
                <p className="text-text font-semibold">{PROFILE.phone}</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={PROFILE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-lg border border-border bg-panel hover:border-accentGreen hover:bg-panel/60 transition-all duration-300 flex items-center gap-4"
            >
              <div className="p-3 rounded-lg bg-surface group-hover:bg-accentGreen/10 transition-colors">
                <Linkedin size={24} className="text-accentGreen" />
              </div>
              <div>
                <p className="text-sm text-muted">LinkedIn</p>
                <p className="text-text font-semibold">Ebad ur Rehman</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={PROFILE.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-lg border border-border bg-panel hover:border-accentPurple hover:bg-panel/60 transition-all duration-300 flex items-center gap-4"
            >
              <div className="p-3 rounded-lg bg-surface group-hover:bg-accentPurple/10 transition-colors">
                <Github size={24} className="text-accentPurple" />
              </div>
              <div>
                <p className="text-sm text-muted">GitHub</p>
                <p className="text-text font-semibold">@ebadr761</p>
              </div>
            </a>
          </div>
        </AnimatedElement>
      </Container>
    </section>
  );
}