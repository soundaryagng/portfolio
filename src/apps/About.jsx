import React from 'react';
import { User, GraduationCap, Sparkles, Brain, Bot, BookOpen, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SocialLinksGroup from '../components/SocialLinksGroup';

export default function About() {
  const { profile, focusAreas, internship, education } = portfolioData;

  return (
    <div className="about-window-content">
      {/* 1. Header Banner */}
      <div className="about-header-banner">
        <div className="about-badge">
          <Sparkles size={12} className="about-badge-icon" />
          <span>SYSTEM PROFILE // VERIFIED IDENTITY</span>
        </div>
        <h2 className="about-hero-name">
          {profile.salutation} <span className="about-name-gradient">{profile.name}</span>
        </h2>
        <div className="about-domain-pill">
          <Brain size={14} className="about-pill-icon" />
          <span>{profile.headline}</span>
        </div>
      </div>

      <div className="about-sections-grid">
        {/* 2. Profile Information Panel */}
        <section className="about-card profile-card" aria-label="Profile Information">
          <div className="card-header">
            <User size={16} className="card-header-icon" />
            <h3 className="card-title">PROFILE</h3>
          </div>
          <div className="card-divider" />
          
          <div className="profile-details-grid">
            <div className="profile-row">
              <span className="profile-label">NAME</span>
              <span className="profile-value">{profile.name}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">ROLE</span>
              <span className="profile-value domain-highlight">{profile.headline}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">CORE DOMAINS</span>
              <div className="focus-mini-tags">
                {focusAreas.map((area) => (
                  <span key={area.id} className="mini-tag">
                    {area.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="profile-row">
              <span className="profile-label">PRACTICAL EXP</span>
              <div className="internship-entry">
                <span className="profile-value">{internship.role} — {internship.company}</span>
                <span className="internship-duration">({internship.duration})</span>
              </div>
            </div>
            <div className="profile-row">
              <span className="profile-label">PROFILES</span>
              <div style={{ marginTop: '4px' }}>
                <SocialLinksGroup className="about-social-links" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. About Me Section */}
        <section className="about-card intro-card" aria-label="About Me Description">
          <div className="card-header">
            <BookOpen size={16} className="card-header-icon" />
            <h3 className="card-title">ABOUT ME</h3>
          </div>
          <div className="card-divider" />
          <p className="about-intro-paragraph">
            {profile.aboutText}
          </p>
          <div className="about-focus-badge">
            <Layers size={14} />
            <span>Academic Focus: {profile.academicFocus}</span>
          </div>
        </section>

        {/* 4. Focus Areas Section */}
        <section className="about-card focus-card" aria-label="Focus Areas">
          <div className="card-header">
            <Bot size={16} className="card-header-icon" />
            <h3 className="card-title">FOCUS AREAS</h3>
          </div>
          <div className="card-divider" />
          
          <div className="focus-cards-container">
            {focusAreas.map((area) => (
              <div key={area.id} className="focus-tile">
                <div className="focus-tile-header">
                  <span className="focus-tile-pill">{area.label}</span>
                  <span className="focus-tile-name">{area.name}</span>
                </div>
                <p className="focus-tile-desc">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Education Section - Strictly Clean & Verified */}
        <section className="about-card education-card" aria-label="Education Details">
          <div className="card-header">
            <GraduationCap size={18} className="card-header-icon" />
            <h3 className="card-title">EDUCATION</h3>
          </div>
          <div className="card-divider" />

          <div className="education-tile">
            <div className="education-degree-row">
              <span className="education-cap-symbol">🎓</span>
              <div>
                <h4 className="education-degree">{education.degree}</h4>
                <p className="education-branch">{education.branch}</p>
                <span className="education-status-tag">{education.status}</span>
              </div>
            </div>

            <p className="education-summary-text">{education.summary}</p>

            <div className="education-core-areas">
              {education.coreFocusAreas.map((area, idx) => (
                <div key={idx} className="education-area-row">
                  <span className="area-title">{area.category}:</span>
                  <span className="area-items">{area.items}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
