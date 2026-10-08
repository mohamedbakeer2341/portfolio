import React from 'react';
import { Award, Briefcase } from 'lucide-react';
import { careerTimeline } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Milestones</div>
          <h2 className="section-title">Career Timeline</h2>
          <p className="section-desc">
            Chronological journey from Computer Science degree to enterprise backend engineering roles.
          </p>
        </div>

        <div className="timeline-container">
          {careerTimeline.map((item, idx) => {
            const isWork = item.type === 'work';

            return (
              <div className="timeline-item" key={idx}>
                <div className="timeline-marker"></div>
                <div className="timeline-card">
                  <div className="timeline-meta-row">
                    <span className="timeline-year">{item.year}</span>
                    <span className="badge badge-accent">
                      {isWork ? (
                        <>
                          <Briefcase size={12} />
                          <span>Industry Role</span>
                        </>
                      ) : (
                        <>
                          <Award size={12} />
                          <span>Academic Degree</span>
                        </>
                      )}
                    </span>
                  </div>

                  <h3 className="timeline-title">{item.title}</h3>
                  <div className="timeline-subtitle">{item.subtitle}</div>
                  <p className="timeline-details">{item.details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
