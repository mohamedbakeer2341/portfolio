import React from 'react';
import { Calendar, Building } from 'lucide-react';
import { workExperience } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Engineering Track Record</div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-desc">
            Production backend systems delivered across enterprise SaaS, asynchronous cloud services, and custom enterprise modules.
          </p>
        </div>

        <div className="experience-list">
          {workExperience.map((job) => {
            const isInternship = job.id === 'zad';

            return (
              <div
                key={job.id}
                className={`experience-card ${job.featured ? 'featured-role' : ''} ${isInternship ? 'internship-role' : ''}`}
                id={`exp-${job.id}`}
              >
                <div className="experience-header">
                  <div className="experience-role-block">
                    <h3 className="experience-role-title">{job.role}</h3>
                    <div className="experience-company-line">
                      <Building size={16} />
                      <span>{job.company}</span>
                      <span className="badge badge-accent">{job.badge}</span>
                    </div>
                  </div>

                  <div className="experience-date-badge">
                    <Calendar size={14} />
                    <span>{job.period}</span>
                  </div>
                </div>

                <p className="experience-summary-text">{job.summary}</p>

                {/* Substantial Engineering Breakdown */}
                <div className="experience-engineering-grid">
                  {job.highlights.map((highlight, idx) => (
                    <div className="engineering-work-item" key={idx}>
                      <span className="work-item-title">{highlight.title}</span>
                      <p className="work-item-desc">{highlight.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="experience-tech-tags">
                  {job.technologies.map((tech, idx) => (
                    <span className="tech-tag" key={idx}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
