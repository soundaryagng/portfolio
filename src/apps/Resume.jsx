import React, { useState } from 'react';
import {
  Download,
  Sparkles,
  GraduationCap,
  Briefcase,
  Code2,
  Folder,
  Award,
  CheckCircle2,
  Mail,
  MapPin,
  Globe,
  ExternalLink
} from 'lucide-react';
import { portfolioData, projectsData, certificatesData, contactData } from '../data/portfolioData';
import {
  LinkedInIcon,
  GitHubIcon,
  LeetCodeIcon,
  SkillRackIcon
} from '../components/SocialLinksGroup';

export default function Resume() {
  const { profile, education, internship } = portfolioData;
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
    // Trigger browser print to allow saving as clean PDF
    window.print();
  };

  return (
    <div className="resume-window-content">
      {/* Header Banner */}
      <div className="app-window-header resume-window-header">
        <div className="resume-header-left">
          <div className="header-badge">
            <Sparkles size={12} className="badge-sparkle-icon" />
            <span>CURRICULUM VITAE // VERIFIED PROFILE</span>
          </div>
          <h2 className="app-hero-title">
            SOUNDARYA <span className="title-gradient">P</span>
          </h2>
          <p className="app-hero-subtitle">
            {profile.headline} • {contactData.location}
          </p>
        </div>

        <div className="resume-actions-group">
          <button className="resume-action-btn primary" onClick={handleDownload}>
            <Download size={14} />
            <span>Save / Print PDF</span>
          </button>
        </div>
      </div>

      {downloadSuccess && (
        <div className="resume-download-alert">
          <CheckCircle2 size={16} />
          <span>Curriculum Vitae document ready for print / export.</span>
        </div>
      )}

      {/* Resume Document Canvas */}
      <div className="resume-document-sheet">
        {/* Document Header */}
        <div className="resume-sheet-header">
          <div>
            <h1 className="resume-candidate-name">{profile.name}</h1>
            <h2 className="resume-candidate-role">{profile.headline}</h2>
          </div>
          <div className="resume-contact-meta">
            <div className="meta-line">
              <a
                href={`mailto:${contactData.email}`}
                className="resume-email-link"
                title={`Send email to ${contactData.email}`}
                aria-label={`Email: ${contactData.email}`}
              >
                <Mail size={13} /> {contactData.email}
              </a>
            </div>
            <div className="meta-line">
              <MapPin size={13} /> {contactData.location}
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="resume-sheet-section">
          <h3 className="sheet-section-title">
            <Sparkles size={14} /> PROFESSIONAL SUMMARY
          </h3>
          <p className="sheet-text">
            {profile.aboutText} Demonstrated experience in developing full-stack web applications, relational database management systems, and applying Natural Language Processing and deep learning frameworks to solve complex technical problems.
          </p>
        </div>

        {/* Online Profiles & Coding Platforms */}
        <div className="resume-sheet-section">
          <h3 className="sheet-section-title">
            <Globe size={15} /> PROFILES & CODING PLATFORMS
          </h3>
          <div className="resume-profiles-grid">
            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-profile-chip"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={14} />
              <span className="profile-chip-name">LinkedIn</span>
              <ExternalLink size={12} className="chip-ext-icon" />
            </a>

            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-profile-chip"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <GitHubIcon size={14} />
              <span className="profile-chip-name">GitHub (soundaryagng)</span>
              <ExternalLink size={12} className="chip-ext-icon" />
            </a>

            <a
              href={contactData.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-profile-chip"
              title="LeetCode Profile"
              aria-label="LeetCode"
            >
              <LeetCodeIcon size={14} />
              <span className="profile-chip-name">LeetCode (Soundarya2006)</span>
              <ExternalLink size={12} className="chip-ext-icon" />
            </a>

            <a
              href={contactData.skillrack}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-profile-chip"
              title="SkillRack Profile"
              aria-label="SkillRack"
            >
              <SkillRackIcon size={14} />
              <span className="profile-chip-name">SkillRack Profile</span>
              <ExternalLink size={12} className="chip-ext-icon" />
            </a>
          </div>
        </div>

        {/* Education */}
        <div className="resume-sheet-section">
          <h3 className="sheet-section-title">
            <GraduationCap size={15} /> EDUCATION
          </h3>
          <div className="resume-item-block">
            <div className="resume-item-top">
              <span className="item-title">{education.degree} — {education.branch}</span>
              <span className="item-period">{education.status}</span>
            </div>
            <p className="item-desc">{education.summary}</p>
          </div>
        </div>

        {/* Experience */}
        <div className="resume-sheet-section">
          <h3 className="sheet-section-title">
            <Briefcase size={15} /> PRACTICAL EXPERIENCE
          </h3>
          <div className="resume-item-block">
            <div className="resume-item-top">
              <span className="item-title">{internship.role} — {internship.company}</span>
              <span className="item-period">{internship.duration}</span>
            </div>
            <p className="item-desc">{internship.description}</p>
            <ul className="item-bullet-list">
              {internship.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technical Skills Summary */}
        <div className="resume-sheet-section">
          <h3 className="sheet-section-title">
            <Code2 size={15} /> TECHNICAL SKILLS
          </h3>
          <div className="resume-skills-compact-grid">
            <div className="compact-skill-row">
              <span className="compact-label">Languages:</span>
              <span className="compact-values">C, C++, Java, JavaScript, Python</span>
            </div>
            <div className="compact-skill-row">
              <span className="compact-label">Web Technologies:</span>
              <span className="compact-values">HTML5, CSS3, JavaScript (ES6+), React.js, Node.js</span>
            </div>
            <div className="compact-skill-row">
              <span className="compact-label">Databases & Backend:</span>
              <span className="compact-values">MySQL, MongoDB, SQL, Spring Boot, REST APIs</span>
            </div>
            <div className="compact-skill-row">
              <span className="compact-label">Intelligent Systems:</span>
              <span className="compact-values">NLP, Machine Learning, Deep Learning, Computer Vision</span>
            </div>
            <div className="compact-skill-row">
              <span className="compact-label">Developer Tools:</span>
              <span className="compact-values">Git, GitHub, VS Code, Docker, Jenkins</span>
            </div>
          </div>
        </div>

        {/* Key Selected Projects */}
        <div className="resume-sheet-section">
          <h3 className="sheet-section-title">
            <Folder size={15} /> SELECTED PROJECTS
          </h3>
          <div className="resume-projects-list">
            {projectsData.slice(0, 4).map((p) => (
              <div key={p.id} className="resume-project-item">
                <div className="resume-item-top">
                  <span className="item-title">{p.title}</span>
                  <span className="item-tech">{p.technologies.join(', ')}</span>
                </div>
                <p className="item-desc">{p.shortDesc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="resume-sheet-section">
          <h3 className="sheet-section-title">
            <Award size={15} /> VERIFIED CERTIFICATIONS
          </h3>
          <ul className="item-bullet-list">
            {certificatesData.map((c) => (
              <li key={c.id}>
                <strong>{c.title}</strong> — {c.issuer} ({c.badgeLabel})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
