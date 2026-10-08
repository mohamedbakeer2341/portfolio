import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Shield, Database } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="badge badge-accent" style={{ width: 'fit-content' }}>
              {project.badge}
            </span>
            <h2 className="modal-title" id="modal-project-title">{project.title}</h2>
            <p className="modal-tagline">{project.tagline}</p>
          </div>

          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
            id="close-modal-btn"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="modal-body">
          {/* Overview */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Layers size={15} />
              <span>Project Overview</span>
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              {project.shortDesc}
            </p>
          </div>

          {/* Engineering Focus */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Cpu size={15} />
              <span>Engineering Focus & Technical Challenge</span>
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              {project.engineeringFocus}
            </p>
          </div>

          {/* Architecture Highlights */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Shield size={15} />
              <span>Verified Architectural Characteristics</span>
            </h4>
            <ul className="modal-arch-list">
              {project.architectureHighlights.map((arch, i) => (
                <li key={i} className="modal-list-item">
                  <CheckCircle2 size={16} className="modal-list-bullet" />
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Features */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Database size={15} />
              <span>Verified Features</span>
            </h4>
            <ul className="modal-features-list">
              {project.verifiedFeatures.map((feat, i) => (
                <li key={i} className="modal-list-item">
                  <span style={{ color: 'var(--accent)', marginRight: '6px' }}>•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <span>Technologies & Tools</span>
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.technologies.map((t, i) => (
                <span className="tech-tag" key={i} style={{ color: 'var(--accent-light)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with verified links */}
        <div className="modal-footer">
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Personal Project · Verified Repository
          </div>

          <div className="modal-footer-links">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                id="modal-live-demo-link"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              id="modal-github-link"
            >
              <Github size={15} />
              <span>View Source on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
