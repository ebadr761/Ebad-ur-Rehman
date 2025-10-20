import React from 'react';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 text-center text-sm opacity-70 bg-surface/50">
      <Container>
        <p className="text-subtext">
          © {new Date().getFullYear()} Ebad ur Rehman. Built with React & Tailwind. Inspired by Ayu Mirage.
        </p>
      </Container>
    </footer>
  );
}