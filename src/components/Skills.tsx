import React, { useState } from 'react';
import { Search, Code2, Layers, Database, Shield, Cloud, CheckSquare } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...skillsCategories.map(c => c.category)];

  const filteredCategories = skillsCategories
    .filter(cat => selectedCategory === 'All' || cat.category === selectedCategory)
    .map(cat => {
      const filteredSkills = cat.skills.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...cat,
        skills: filteredSkills
      };
    })
    .filter(cat => cat.skills.length > 0);

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Languages': return <Code2 size={16} color="var(--accent)" />;
      case 'Frameworks & Libraries': return <Layers size={16} color="var(--accent)" />;
      case 'Databases & ORMs': return <Database size={16} color="var(--accent)" />;
      case 'Architecture & Concepts': return <Shield size={16} color="var(--accent)" />;
      case 'Cloud & DevOps': return <Cloud size={16} color="var(--accent)" />;
      case 'Testing': return <CheckSquare size={16} color="var(--accent)" />;
      default: return null;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Engineering Toolkit</div>
          <h2 className="section-title">Technical Skills & Competencies</h2>
          <p className="section-desc">
            Organized strictly by engineering domain. No artificial percentage bars or exaggerated claims.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="skills-controls">
          <div className="skills-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`skill-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
                id={`skill-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="skills-search-box">
            <Search className="skills-search-icon" />
            <input
              type="text"
              placeholder="Search skills (e.g. Redis, C#, Docker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
              id="skills-search-input"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="skills-grid">
          {filteredCategories.map((category) => (
            <div className="skill-category-card" key={category.category}>
              <div className="category-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {getCategoryIcon(category.category)}
                  <h3 className="category-name">{category.category}</h3>
                </div>
                <span className="category-count">{category.skills.length} skills</span>
              </div>

              <p className="category-desc">{category.description}</p>

              <div className="skill-pills-list">
                {category.skills.map((skill) => (
                  <div className="skill-pill" key={skill.name}>
                    <span>{skill.name}</span>
                    <span className="skill-subtag">{skill.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', gridColumn: '1 / -1', color: 'var(--text-muted)' }}>
              No technologies match "{searchQuery}". Clear your search query to view all skills.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
