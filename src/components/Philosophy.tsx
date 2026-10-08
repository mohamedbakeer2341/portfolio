import React from 'react';
import { engineeringPrinciples } from '../data/portfolioData';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="philosophy-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Core Principles</div>
          <h2 className="section-title">How I Think About Backend Engineering</h2>
          <p className="section-desc">
            Pragmatic engineering rules guiding system design, data modeling, and architectural trade-offs.
          </p>
        </div>

        <div className="philosophy-grid">
          {engineeringPrinciples.map((principle) => (
            <div className="philosophy-card" key={principle.number}>
              <span className="philosophy-number">[{principle.number}]</span>
              <h3 className="philosophy-title">{principle.title}</h3>
              <p className="philosophy-summary">{principle.summary}</p>
              <p className="philosophy-detail">{principle.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
