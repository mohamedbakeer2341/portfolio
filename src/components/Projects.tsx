import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('All');

  const filterTabs = ['All', 'Full-Stack', 'Layered Architecture', 'Deployed', 'E-Commerce'];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Full-Stack') return p.id === 'booking-app';
    if (filter === 'Layered Architecture') return p.id === 'company-manager';
    if (filter === 'Deployed') return p.liveDemo !== null;
    if (filter === 'E-Commerce') return p.id === 'amazon-clone';
    return true;
  });

  const renderProjectVisual = (project: ProjectItem) => {
    if (project.id === 'booking-app') {
      return (
        <div className="project-abstract-diagram">
          <div className="project-arch-nodes">
            <div className="arch-node-mini">React + Redux</div>
            <span className="arch-arrow-mini">⇄</span>
            <div className="arch-node-mini" style={{ borderColor: 'var(--accent)' }}>Express + JWT</div>
            <span className="arch-arrow-mini">⇄</span>
            <div className="arch-node-mini">MongoDB + Docker</div>
          </div>
        </div>
      );
    }
    if (project.id === 'company-manager') {
      return (
        <div className="project-abstract-diagram">
          <div className="project-arch-nodes">
            <div className="arch-node-mini">PL (MVC)</div>
            <span className="arch-arrow-mini">→</span>
            <div className="arch-node-mini" style={{ borderColor: 'var(--accent)' }}>BLL (Domain)</div>
            <span className="arch-arrow-mini">→</span>
            <div className="arch-node-mini">DAL (EF Core)</div>
          </div>
        </div>
      );
    }
    if (project.id === 'carify') {
      return (
        <div className="project-abstract-diagram">
          <div className="project-arch-nodes">
            <div className="arch-node-mini">Vehicle UI</div>
            <span className="arch-arrow-mini">⇄</span>
            <div className="arch-node-mini" style={{ borderColor: 'var(--accent)' }}>REST Client</div>
            <span className="arch-arrow-mini">⇄</span>
            <div className="arch-node-mini">Vercel Edge</div>
          </div>
        </div>
      );
    }
    return (
      <div className="project-abstract-diagram">
        <div className="project-arch-nodes">
          <div className="arch-node-mini">Client</div>
          <span className="arch-arrow-mini">⇄</span>
          <div className="arch-node-mini" style={{ borderColor: 'var(--accent)' }}>Express Routes</div>
          <span className="arch-arrow-mini">⇄</span>
          <div className="arch-node-mini">Cart & Catalog</div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header-filter">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <div className="section-tag">Featured Codebases</div>
            <h2 className="section-title">Selected Personal Projects</h2>
            <p className="section-desc">
              Independent engineering projects demonstrating software architecture, containerization, and API development.
            </p>
          </div>

          <div className="skills-filter-tabs">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                className={`skill-tab-btn ${filter === tab ? 'active' : ''}`}
                onClick={() => setFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured-project' : ''}`}
              onClick={() => onSelectProject(project)}
              id={`project-card-${project.id}`}
            >
              {/* Technical Visual Header */}
              <div className="project-visual-header">
                <div className="project-badge-row">
                  <span className="badge badge-accent">{project.badge}</span>
                  {project.liveDemo && (
                    <span className="badge badge-emerald">● Live Production</span>
                  )}
                </div>

                {renderProjectVisual(project)}
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <div className="project-card-tagline">{project.tagline}</div>
                <p className="project-card-desc">{project.shortDesc}</p>

                <div className="project-tech-pills">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span className="tech-tag" key={i}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="tech-tag" style={{ color: 'var(--text-muted)' }}>
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

                {/* Card Footer with Links & Case Study Trigger */}
                <div className="project-card-footer">
                  <span className="case-study-trigger-text">
                    <span>Inspect Case Study</span>
                    <ArrowRight size={14} />
                  </span>

                  <div className="project-footer-links" onClick={(e) => e.stopPropagation()}>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-card-action"
                        title="View Live Application"
                      >
                        <ExternalLink size={15} />
                        <span>Live</span>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-card-action"
                      title="View GitHub Repository"
                    >
                      <Github size={15} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
