import React, { useState } from 'react';
import {
  Layers,
  Shield,
  Cpu,
  RefreshCw,
  Play,
  RotateCcw,
  Code2
} from 'lucide-react';
import { architectureFlows } from '../data/portfolioData';

export const ArchitectureExplorer: React.FC = () => {
  const [selectedFlowId, setSelectedFlowId] = useState<string>('multi-tenant');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const activeFlow = architectureFlows.find((f) => f.id === selectedFlowId) || architectureFlows[0];

  const handleTabChange = (flowId: string) => {
    setSelectedFlowId(flowId);
    setCurrentStep(1);
    setIsSimulating(false);
  };

  const handleSimulate = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setCurrentStep(1);

    let step = 1;
    const interval = setInterval(() => {
      step++;
      if (step <= 4) {
        setCurrentStep(step);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 700);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setIsSimulating(false);
  };

  return (
    <section id="architecture" className="architecture-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">System Architecture</div>
          <h2 className="section-title">Backend Architecture & Patterns</h2>
          <p className="section-desc">
            Interactive blueprints of real architecture patterns Mohamed designs and implements in production.
          </p>
        </div>

        <div className="architecture-explorer-card">
          {/* Navigation Tabs */}
          <div className="arch-nav-tabs">
            {architectureFlows.map((flow) => {
              const isActive = flow.id === selectedFlowId;
              let Icon = Layers;
              if (flow.id === 'rbac-bitmask') Icon = Shield;
              if (flow.id === 'async-pipeline') Icon = Cpu;
              if (flow.id === 'event-observers') Icon = RefreshCw;

              return (
                <button
                  key={flow.id}
                  className={`arch-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleTabChange(flow.id)}
                  id={`arch-tab-${flow.id}`}
                >
                  <Icon size={16} />
                  <span>{flow.title}</span>
                </button>
              );
            })}
          </div>

          <div className="arch-body">
            {/* Header info */}
            <div className="arch-intro-header">
              <div>
                <span className="arch-intro-context">{activeFlow.context}</span>
                <h3 className="arch-intro-title">{activeFlow.title}</h3>
                <p className="arch-intro-desc">{activeFlow.description}</p>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  id="simulate-flow-btn"
                >
                  <Play size={13} />
                  <span>{isSimulating ? 'Simulating Step ' + currentStep + '...' : 'Simulate Architecture Flow'}</span>
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={handleReset}
                  title="Reset to Step 1"
                >
                  <RotateCcw size={13} />
                </button>
              </div>
            </div>

            {/* Step-by-Step Flow Diagram */}
            <div className="arch-diagram-flow">
              {activeFlow.steps.map((step) => {
                const isActive = currentStep === step.step;
                const isPassed = currentStep >= step.step;

                return (
                  <div
                    key={step.step}
                    className={`arch-flow-node ${isActive ? 'active-step' : ''}`}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="flow-step-num">0{step.step}</span>
                      <span
                        className="flow-badge"
                        style={{
                          color: isPassed ? 'var(--accent)' : 'var(--text-muted)',
                          borderColor: isPassed ? 'var(--border-accent)' : 'var(--border-subtle)'
                        }}
                      >
                        {step.badge}
                      </span>
                    </div>

                    <div className="flow-actor">{step.actor}</div>
                    <p className="flow-text">{step.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Code Pattern Implementation */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <Code2 size={16} color="var(--accent)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Implementation Pattern (Reference)
                </span>
              </div>
              <div className="arch-code-box">
                <pre><code>{activeFlow.codeSnippet}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
