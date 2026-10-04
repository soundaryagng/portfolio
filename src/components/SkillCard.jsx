import React from 'react';
import {
  Code2,
  Coffee,
  FileCode,
  Palette,
  Terminal,
  Atom,
  Server,
  Database,
  GitBranch,
  GitPullRequest,
  Container,
  Cpu,
  Brain,
  Bot,
  Layers,
  Eye
} from 'lucide-react';

// Registry of verified Lucide line icons
const ICON_MAP = {
  Code2,
  Coffee,
  FileCode,
  Palette,
  Terminal,
  Atom,
  Server,
  Database,
  GitBranch,
  GitPullRequest,
  Container,
  Cpu,
  Brain,
  Bot,
  Layers,
  Eye
};

export default function SkillCard({ name, icon, category }) {
  const IconComponent = (icon && ICON_MAP[icon]) ? ICON_MAP[icon] : Code2;

  return (
    <div
      className="futuristic-skill-card"
      tabIndex={0}
      title={`${name} (${category})`}
      aria-label={`${name} skill`}
    >
      <div className="skill-card-inner">
        <div className="skill-icon-box">
          <IconComponent size={24} strokeWidth={1.8} className="skill-icon-svg" />
        </div>
        <div className="skill-name">{name}</div>
      </div>
      <div className="skill-card-glow-indicator" aria-hidden="true" />
    </div>
  );
}
