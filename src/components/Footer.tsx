import React from 'react';
import { Terminal, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-signature">
            <Terminal size={15} color="var(--accent)" />
            <span>{personalInfo.name} — {personalInfo.title}</span>
            <span style={{ color: 'var(--text-dim)' }}>|</span>
            <span style={{ color: 'var(--text-muted)' }}>{personalInfo.location}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                style={{ color: 'var(--text-muted)' }}
              >
                <Github size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                style={{ color: 'var(--text-muted)' }}
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                title="Email"
                style={{ color: 'var(--text-muted)' }}
              >
                <Mail size={16} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-back-top"
              id="footer-back-to-top"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
