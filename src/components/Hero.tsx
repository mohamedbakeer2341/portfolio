import React, { useState } from 'react';
import {
  Terminal,
  Server,
  Database,
  Shield,
  Layers,
  ArrowRight,
  Github,
  Mail,
  Play,
  RotateCcw,
  Cpu,
  MapPin
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onProjectsClick: () => void;
  onContactClick: () => void;
  onArchitectureClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onProjectsClick,
  onContactClick,
  onArchitectureClick
}) => {
  const [activeStep, setActiveStep] = useState<number>(3);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [latency, setLatency] = useState<number>(14);

  const pipelineNodes = [
    {
      id: 1,
      name: "API Gateway & Router",
      meta: "TLS Termination · Rate Limiting (Token Bucket)",
      badge: "Ingress",
      icon: <Server size={14} />,
      status: "PASS"
    },
    {
      id: 2,
      name: "Tenant Resolver Middleware",
      meta: "Database-per-Tenant lookup (tenant_areeb_01)",
      badge: "Multi-Tenant",
      icon: <Layers size={14} />,
      status: "ISOLATED"
    },
    {
      id: 3,
      name: "Dual-Layer Auth Guard",
      meta: "JWT verification + Bitmask permission check (0x0F)",
      badge: "RBAC + Bitmask",
      icon: <Shield size={14} />,
      status: "AUTHORIZED"
    },
    {
      id: 4,
      name: "Service & Asynchronous Queue",
      meta: "Event Observers · Celery Worker in Redis Broker",
      badge: "Async Engine",
      icon: <Cpu size={14} />,
      status: "DISPATCHED"
    },
    {
      id: 5,
      name: "Isolated Tenant Database",
      meta: "PostgreSQL transactional commit (ACID)",
      badge: "Persistence",
      icon: <Database size={14} />,
      status: "COMMITTED"
    }
  ];

  const handleSimulate = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(1);
    setLatency(Math.floor(Math.random() * 8) + 10);

    let step = 1;
    const interval = setInterval(() => {
      step++;
      if (step <= 5) {
        setActiveStep(step);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 450);
  };

  const handleReset = () => {
    setActiveStep(1);
    setIsSimulating(false);
    setLatency(12);
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Core Positioning */}
          <div className="hero-content">
            <div className="hero-tag">
              <Terminal size={14} />
              <span>Backend Software Engineering</span>
            </div>

            <h1 className="hero-title">{personalInfo.name}</h1>

            <div className="hero-subtitle">
              <span>{personalInfo.title}</span>
              <span className="hero-subtitle-divider">/</span>
              <span className="hero-location">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </span>
            </div>

            <p className="hero-summary">
              {personalInfo.tagline}
            </p>

            <div className="hero-focus-pills">
              <span className="focus-pill">
                <Layers size={13} />
                <span>Multi-Tenant Architecture</span>
              </span>
              <span className="focus-pill">
                <Database size={13} />
                <span>Database-per-Tenant</span>
              </span>
              <span className="focus-pill">
                <Shield size={13} />
                <span>Dual-Layer RBAC</span>
              </span>
              <span className="focus-pill">
                <Cpu size={13} />
                <span>Async Celery & Redis Queues</span>
              </span>
              <span className="focus-pill">
                <Server size={13} />
                <span>RESTful APIs & Microservices</span>
              </span>
            </div>

            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={onProjectsClick}
                id="hero-projects-btn"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </button>

              <button
                className="btn btn-secondary"
                onClick={onArchitectureClick}
                id="hero-architecture-btn"
              >
                <span>Architecture Flows</span>
              </button>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-icon"
                title="View GitHub Profile"
                id="hero-github-link"
              >
                <Github size={18} />
              </a>

              <button
                className="btn btn-secondary btn-icon"
                onClick={onContactClick}
                title="Contact Mohamed"
                id="hero-email-btn"
              >
                <Mail size={18} />
              </button>
            </div>
          </div>

          {/* Right Column: Abstract Engineering Telemetry Console */}
          <div className="hero-visual">
            <div className="architecture-console">
              <div className="console-header">
                <div className="console-window-dots">
                  <span className="console-dot red"></span>
                  <span className="console-dot yellow"></span>
                  <span className="console-dot green"></span>
                </div>
                <div className="console-title">
                  <Server size={13} />
                  <span>runtime_telemetry // request_pipeline</span>
                </div>
                <div className="console-status-badge">
                  {isSimulating ? 'EXECUTING' : '200 OK'}
                </div>
              </div>

              <div className="console-body">
                <div className="request-bar">
                  <div>
                    <span className="http-method">POST</span>
                    <span className="endpoint-path">/api/v2/tenant-workflows/dispatch</span>
                  </div>
                  <span className="response-metric">{latency}ms latency</span>
                </div>

                <div className="pipeline-flow">
                  {pipelineNodes.map((node) => {
                    const isActive = activeStep === node.id;
                    const isPassed = activeStep >= node.id;
                    return (
                      <div
                        key={node.id}
                        className={`pipeline-node ${isActive ? 'active' : ''}`}
                      >
                        <div
                          className="node-icon-box"
                          style={{
                            borderColor: isPassed ? 'var(--accent)' : 'var(--border-subtle)',
                            color: isPassed ? 'var(--accent)' : 'var(--text-muted)'
                          }}
                        >
                          {node.icon}
                        </div>
                        <div className="node-details">
                          <span className="node-name">{node.name}</span>
                          <span className="node-meta">{node.meta}</span>
                        </div>
                        <span
                          className="node-badge"
                          style={{
                            color: isActive ? 'var(--accent)' : isPassed ? 'var(--emerald)' : 'var(--text-muted)',
                            background: isActive ? 'var(--accent-subtle)' : 'rgba(255, 255, 255, 0.03)'
                          }}
                        >
                          {node.status}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="console-controls">
                  <button
                    className="btn-console"
                    onClick={handleSimulate}
                    disabled={isSimulating}
                    id="hero-simulate-btn"
                  >
                    <Play size={12} />
                    <span>{isSimulating ? 'Processing...' : 'Simulate Request Flow'}</span>
                  </button>

                  <button
                    className="btn-console"
                    onClick={handleReset}
                    title="Reset Simulation"
                  >
                    <RotateCcw size={12} />
                    <span>Reset</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
