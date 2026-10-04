import React from 'react';
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  Building
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { internship, careerJourney } = portfolioData;

  return (
    <div className="experience-window-content">
      {/* Header Banner */}
      <div className="app-window-header">
        <div className="header-badge">
          <Sparkles size={12} className="badge-sparkle-icon" />
          <span>CAREER TIMELINE // INDUSTRY & ACADEMIC PATH</span>
        </div>
        <h2 className="app-hero-title">
          EXPERIENCE & <span className="title-gradient">JOURNEY</span>
        </h2>
        <p className="app-hero-subtitle">
          Practical industry exposure and structured progression across core computer science disciplines.
        </p>
      </div>

      {/* Verified Internship Showcase */}
      <div className="internship-spotlight-card">
        <div className="internship-spotlight-top">
          <div className="internship-badge-row">
            <span className="internship-status-badge">
              <Building size={13} /> {internship.type}
            </span>
            <span className="internship-duration-pill">
              <Calendar size={13} /> {internship.duration}
            </span>
          </div>
          <h3 className="internship-role-title">{internship.role}</h3>
          <h4 className="internship-company-name">@ {internship.company}</h4>
        </div>

        <p className="internship-description-text">{internship.description}</p>

        <div className="internship-deliverables">
          <h5 className="deliverables-heading">Key Responsibilities & Deliverables:</h5>
          <ul className="deliverables-list">
            {internship.highlights.map((item, index) => (
              <li key={index} className="deliverable-item">
                <CheckCircle2 size={16} className="deliverable-check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Career Journey Timeline */}
      <div className="journey-section">
        <div className="journey-header">
          <h3 className="journey-heading">DEVELOPER JOURNEY MILESTONES</h3>
          <span className="journey-sub">Chronological evolution of technical depth</span>
        </div>

        <div className="journey-timeline">
          {careerJourney.map((stage) => (
            <div key={stage.step} className="timeline-step-card">
              <div className="timeline-step-marker">
                <span className="marker-number">{stage.step}</span>
                <div className="marker-line" />
              </div>
              <div className="timeline-step-body">
                <div className="timeline-step-top">
                  <h4 className="timeline-stage-title">{stage.title}</h4>
                  <span className="timeline-stage-badge">{stage.badge}</span>
                </div>
                <p className="timeline-stage-desc">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
