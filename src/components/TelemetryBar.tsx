import React from 'react';
import { Server, Cpu, Database, Award } from 'lucide-react';
import { education } from '../data/portfolioData';

export const TelemetryBar: React.FC = () => {
  const telemetryItems = [
    {
      label: "Core Specialization",
      value: "Backend Engineering",
      subtext: "Distributed APIs, architecture, data isolation & workflow engines",
      icon: <Server className="telemetry-icon" />
    },
    {
      label: "Primary Languages & Stacks",
      value: "Node.js · C# · Python",
      subtext: "TypeScript, Express, NestJS, .NET Core, Django, PostgreSQL",
      icon: <Cpu className="telemetry-icon" />
    },
    {
      label: "Architecture Mindset",
      value: "Database-per-Tenant",
      subtext: "Dual-layer RBAC, bitmasks, event observers, Celery & Redis queues",
      icon: <Database className="telemetry-icon" />
    },
    {
      label: "Formal Education",
      value: "B.S. in Computer Science",
      subtext: `${education.faculty} (${education.year})`,
      icon: <Award className="telemetry-icon" />
    }
  ];

  return (
    <div className="telemetry-bar-section">
      <div className="container">
        <div className="telemetry-grid">
          {telemetryItems.map((item, idx) => (
            <div className="telemetry-card" key={idx}>
              <div className="telemetry-header">
                <span className="telemetry-label">{item.label}</span>
                {item.icon}
              </div>
              <div className="telemetry-value">{item.value}</div>
              <div className="telemetry-subtext">{item.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
