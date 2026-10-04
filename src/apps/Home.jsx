import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Sparkles } from 'lucide-react';
import SocialLinksGroup from '../components/SocialLinksGroup';

export default function Home({ onExplore }) {
  const { profile } = portfolioData;

  return (
    <section className="desktop-center-hero" aria-label="Personal Introduction">
      {/* Salutation */}
      <p className="hero-salutation">{profile.salutation}</p>

      {/* Main Bold Name */}
      <h1 className="hero-title">
        <span className="hero-title-name">{profile.name}</span>
      </h1>

      {/* Cursive Signature in Neon Blue / Violet Glow */}
      <div className="hero-cursive-signature" aria-hidden="true">
        <span>Soundarya</span>
        <svg
          className="signature-symbol"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          width="20"
          height="20"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>

      {/* Subhead Pill: Domain and Role */}
      <div className="hero-subhead-pill">
        <Sparkles size={14} className="hero-pill-icon" />
        <span>{profile.headline}</span>
      </div>

      {/* Introduction Quote */}
      <div className="hero-quote-block">
        <span className="quote-mark left" aria-hidden="true">“</span>
        <p className="hero-quote-text">
          Turning ideas into intelligent solutions<br />
          and code into real-world impact.
        </p>
        <span className="quote-mark right" aria-hidden="true">„</span>
      </div>

      {/* Status Badge */}
      <div className="hero-status-tag">
        <span className="status-pulse-dot" />
        <span>{profile.statusBadge}</span>
      </div>

      {/* Explore Button */}
      <div className="hero-cta-group">
        <button
          className="hero-cta-button"
          onClick={onExplore}
          title="Explore Portfolio Repositories"
          aria-label="Explore My Portfolio"
        >
          <span>Explore My Portfolio</span>
          <ArrowRight size={17} className="hero-cta-arrow" />
        </button>
      </div>

      {/* Profile & Coding Platform Links (LinkedIn | GitHub | LeetCode | SkillRack) */}
      <div className="hero-social-group-wrap">
        <SocialLinksGroup className="hero-social-links" />
      </div>
    </section>
  );
}
