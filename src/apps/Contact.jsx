import React, { useState } from 'react';
import {
  Mail,
  Send,
  Sparkles,
  CheckCircle2,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { contactData } from '../data/portfolioData';
import SocialLinksGroup, {
  LinkedInIcon,
  GitHubIcon,
  LeetCodeIcon,
  SkillRackIcon
} from '../components/SocialLinksGroup';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <div className="contact-window-content">
      {/* Header Banner */}
      <div className="app-window-header">
        <div className="header-badge">
          <Sparkles size={12} className="badge-sparkle-icon" />
          <span>DIRECT DISPATCH // SECURE TRANSMISSION</span>
        </div>
        <h2 className="app-hero-title">
          GET IN <span className="title-gradient">TOUCH</span>
        </h2>
        <p className="app-hero-subtitle">
          {contactData.subtitle}
        </p>
      </div>

      {/* Status Notice */}
      <div className="contact-status-card">
        <div className="status-indicator-dot" />
        <p className="contact-status-text">{contactData.statusNotice}</p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Direct Info & Channels */}
        <div className="contact-info-panel">
          <div className="contact-card-box">
            <div className="contact-panel-header-row">
              <div>
                <h3 className="contact-panel-title">Direct Inquiries</h3>
                <p className="contact-panel-desc">
                  Feel free to reach out directly via email or connect across coding and professional platforms.
                </p>
              </div>
              <SocialLinksGroup />
            </div>

            <div className="contact-channels-list">
              {/* Email */}
              <a
                href={`mailto:${contactData.email}`}
                className="channel-item-link"
                title={`Send email to ${contactData.email}`}
                aria-label={`Email: ${contactData.email}`}
              >
                <div className="channel-icon-circle">
                  <Mail size={16} />
                </div>
                <div className="channel-details">
                  <span className="channel-title">Email</span>
                  <span className="channel-value">{contactData.email}</span>
                </div>
                <ExternalLink size={14} className="channel-ext-icon" />
              </a>

              {/* LinkedIn */}
              <a
                href={contactData.linkedin}
                className="channel-item-link"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <div className="channel-icon-circle">
                  <LinkedInIcon size={16} />
                </div>
                <div className="channel-details">
                  <span className="channel-title">LinkedIn</span>
                  <span className="channel-value">Professional Profile</span>
                </div>
                <ExternalLink size={14} className="channel-ext-icon" />
              </a>

              {/* GitHub */}
              <a
                href={contactData.github}
                className="channel-item-link"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <div className="channel-icon-circle">
                  <GitHubIcon size={16} />
                </div>
                <div className="channel-details">
                  <span className="channel-title">GitHub</span>
                  <span className="channel-value">github.com/soundaryagng</span>
                </div>
                <ExternalLink size={14} className="channel-ext-icon" />
              </a>

              {/* LeetCode */}
              <a
                href={contactData.leetcode}
                className="channel-item-link"
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode Profile"
                aria-label="LeetCode"
              >
                <div className="channel-icon-circle">
                  <LeetCodeIcon size={16} />
                </div>
                <div className="channel-details">
                  <span className="channel-title">LeetCode</span>
                  <span className="channel-value">Soundarya2006</span>
                </div>
                <ExternalLink size={14} className="channel-ext-icon" />
              </a>

              {/* SkillRack */}
              <a
                href={contactData.skillrack}
                className="channel-item-link"
                target="_blank"
                rel="noopener noreferrer"
                title="SkillRack Profile"
                aria-label="SkillRack"
              >
                <div className="channel-icon-circle">
                  <SkillRackIcon size={16} />
                </div>
                <div className="channel-details">
                  <span className="channel-title">SkillRack</span>
                  <span className="channel-value">SkillRack Profile</span>
                </div>
                <ExternalLink size={14} className="channel-ext-icon" />
              </a>
            </div>

            <div className="contact-location-tag">
              <MapPin size={14} />
              <span>Location: {contactData.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="contact-form-panel">
          {isSubmitted ? (
            <div className="contact-success-card">
              <div className="success-icon-wrapper">
                <CheckCircle2 size={40} className="success-icon" />
              </div>
              <h3 className="success-title">Message Transmitted Successfully</h3>
              <p className="success-text">
                Thank you, <strong>{formData.name}</strong>! Your transmission has been queued. I will review and respond promptly to <strong>{formData.email}</strong>.
              </p>
              <button className="reset-form-btn" onClick={handleReset}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h3 className="form-header-title">Send a Direct Message</h3>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Alex Morgan"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  className="form-input"
                  placeholder="e.g. alex@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Software Engineering Opportunity / Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows="4"
                  className="form-textarea"
                  placeholder="Type your message here..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="form-submit-btn">
                <Send size={15} />
                <span>Transmit Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
