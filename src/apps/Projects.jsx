import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Filter,
  Star,
  ChevronRight,
  X
} from 'lucide-react';
import { projectsData, projectFilters } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'FULL STACK') return project.filterCategory === 'Full Stack';
    if (activeFilter === 'WEB') return project.filterCategory === 'Web' || project.filterCategory === 'Full Stack';
    if (activeFilter === 'APPLICATION') return project.filterCategory === 'Application' || project.filterCategory === 'Full Stack';
    if (activeFilter === 'AI / ML') return project.filterCategory === 'AI / ML';
    if (activeFilter === 'DEEP LEARNING') return project.filterCategory === 'Deep Learning';
    return true;
  });

  return (
    <div className="projects-window-content">
      {/* Header Banner */}
      <div className="app-window-header">
        <div className="header-badge">
          <Sparkles size={12} className="badge-sparkle-icon" />
          <span>PORTFOLIO REPOSITORIES // VERIFIED SYSTEMS</span>
        </div>
        <h2 className="app-hero-title">
          FEATURED <span className="title-gradient">PROJECTS</span>
        </h2>
        <p className="app-hero-subtitle">
          Engineered software solutions spanning full-stack web platforms, enterprise management systems, document intelligence pipelines, and deep learning research.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="projects-filter-bar">
        <div className="filter-label-group">
          <Filter size={13} />
          <span>FILTER:</span>
        </div>
        <div className="filter-buttons-scroll">
          {projectFilters.map((tab) => (
            <button
              key={tab}
              className={`filter-chip-btn ${activeFilter === tab ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className={`project-card ${p.featured ? 'featured-card' : ''}`}
            onClick={() => setSelectedProject(p)}
          >
            <div className="project-card-top">
              <div className="project-card-num-group">
                <span className="project-num">#{p.number}</span>
                <span className="project-category-tag">{p.category}</span>
              </div>
              {p.featured && (
                <span className="featured-badge">
                  <Star size={11} fill="currentColor" /> FEATURED
                </span>
              )}
            </div>

            <h3 className="project-card-title">{p.title}</h3>
            <p className="project-card-desc">{p.shortDesc}</p>

            <div className="project-tech-tags">
              {p.technologies.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-card-footer">
              <span className="view-details-link">
                View Specification <ChevronRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Detailed Drawer for Selected Project */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="modal-pretitle">PROJECT #{selectedProject.number} // {selectedProject.category}</span>
                <h3 className="modal-title">{selectedProject.title}</h3>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4 className="modal-section-title">Overview</h4>
                <p className="modal-text">{selectedProject.overview}</p>
              </div>

              <div className="modal-section-grid">
                <div className="modal-mini-card">
                  <h4 className="modal-section-title">Problem Statement</h4>
                  <p className="modal-text">{selectedProject.problem}</p>
                </div>
                <div className="modal-mini-card">
                  <h4 className="modal-section-title">Engineered Solution</h4>
                  <p className="modal-text">{selectedProject.solution}</p>
                </div>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">Key Architectural Features</h4>
                <ul className="modal-features-list">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="modal-feature-item">
                      <CheckCircle2 size={15} className="feature-check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">Technologies Used</h4>
                <div className="project-tech-tags">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="tech-badge tech-badge-large">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="modal-dismiss-btn" onClick={() => setSelectedProject(null)}>
                Close Specification
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
