import React from 'react';
import SkillCard from './SkillCard';
import { Layers } from 'lucide-react';

export default function SkillCategory({ title, skills, categoryId }) {
  if (!skills || skills.length === 0) return null;

  return (
    <section className="skill-category-section" id={`cat-${categoryId}`} aria-label={title}>
      {/* Category Header */}
      <div className="category-header-wrap">
        <div className="category-title-bar">
          <Layers size={14} className="category-header-icon" />
          <h3 className="category-heading">{title}</h3>
          <span className="category-count-badge">{skills.length}</span>
        </div>
        <div className="category-divider-line" />
      </div>

      {/* Cards Grid */}
      <div className="category-skills-grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            category={title}
          />
        ))}
      </div>
    </section>
  );
}
