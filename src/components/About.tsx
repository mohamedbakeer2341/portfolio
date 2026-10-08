import React from 'react';
import { Database, Shield, Cpu, RefreshCw } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      title: "Architecture & Data Isolation",
      desc: "Experience implementing database-per-tenant architectures to guarantee strict customer data privacy and prevent cross-tenant contamination.",
      icon: <Database size={20} />
    },
    {
      title: "Data Integrity & Event Observers",
      desc: "Preserving consistency across complex domain models and hierarchical budget trees using event observers and atomic transactions.",
      icon: <RefreshCw size={20} />
    },
    {
      title: "Dual-Layer Security & Permissions",
      desc: "Pairing standard RBAC role enforcement with custom bitmask evaluation for fine-grained, high-performance authorization.",
      icon: <Shield size={20} />
    },
    {
      title: "Asynchronous Workloads & Cloud",
      desc: "Designing non-blocking APIs with Celery task queues, Redis brokers, AWS cloud infrastructure (EC2, S3), and Docker containerization.",
      icon: <Cpu size={20} />
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Engineering Focus</div>
          <h2 className="section-title">Architecting Resilient Backends</h2>
          <p className="section-desc">
            A software engineer dedicated to backend reliability, clean system boundaries, and dependable data pipelines.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <p className="about-paragraph">
              {personalInfo.summary}
            </p>
            <p className="about-paragraph">
              My engineering approach centers on the entire backend lifecycle: defining explicit API contracts, maintaining ACID data guarantees, preventing N+1 database queries, and structuring asynchronous jobs so heavy compute never impacts client-facing endpoints.
            </p>
            <p className="about-paragraph">
              Whether orchestrating dynamic multi-step approval workflows or establishing database-per-tenant isolation for multi-tenant applications, I prioritize code maintainability, clean layer separation, and production dependability.
            </p>
          </div>

          <div className="about-highlights-card">
            {highlights.map((h, i) => (
              <div className="highlight-item" key={i}>
                <div className="highlight-icon-wrap">
                  {h.icon}
                </div>
                <div className="highlight-content">
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
