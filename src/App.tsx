import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TelemetryBar } from './components/TelemetryBar';
import { About } from './components/About';
import { Philosophy } from './components/Philosophy';
import { Experience } from './components/Experience';
import { ArchitectureExplorer } from './components/ArchitectureExplorer';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectItem } from './types';
import { CheckCircle2 } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app">
      <Navbar onContactClick={() => scrollToSection('contact')} />

      <main>
        <Hero
          onProjectsClick={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
          onArchitectureClick={() => scrollToSection('architecture')}
        />

        <TelemetryBar />

        <About />

        <Philosophy />

        <Experience />

        <ArchitectureExplorer />

        <Skills />

        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        <Timeline />

        <Contact onShowToast={showToast} />
      </main>

      <Footer />

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Toast Notification */}
      <div className={`toast-notification ${toastMessage ? 'show' : ''}`}>
        <CheckCircle2 size={16} color="var(--emerald)" />
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};

export default App;
