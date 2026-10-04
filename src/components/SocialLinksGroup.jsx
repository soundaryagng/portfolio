import React from 'react';
import { contactData } from '../data/portfolioData';

// Reusable SVG Profile Icons
export const LinkedInIcon = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const GitHubIcon = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export const LeetCodeIcon = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.649 1.837-.649s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.244 5.244 0 0 0-3.79-1.493c-1.428 0-2.855.545-3.945 1.636l-4.318 4.38c-2.181 2.18-2.181 5.71 0 7.89l4.332 4.364c1.09 1.09 2.517 1.636 3.945 1.636s2.856-.546 3.945-1.636l2.609-2.637c.514-.514.496-1.365-.039-1.9-.535-.536-1.386-.554-1.9-.039zM10.85 12.875h10.3c.759 0 1.375-.616 1.375-1.375s-.616-1.375-1.375-1.375H10.85c-.759 0-1.375.616-1.375 1.375s.616 1.375 1.375 1.375z" />
  </svg>
);

export const SkillRackIcon = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true">
    <rect x="2.5" y="3.5" width="19" height="17" rx="4" stroke="currentColor" strokeWidth="1.8" />
    <text
      x="12"
      y="15.2"
      textAnchor="middle"
      fill="currentColor"
      fontSize="9.5"
      fontWeight="800"
      fontFamily="system-ui, -apple-system, sans-serif"
      letterSpacing="0.5"
    >
      SR
    </text>
  </svg>
);

export default function SocialLinksGroup({ className = "" }) {
  const profiles = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: contactData.linkedin,
      icon: LinkedInIcon,
      ariaLabel: 'LinkedIn'
    },
    {
      id: 'github',
      name: 'GitHub',
      url: contactData.github,
      icon: GitHubIcon,
      ariaLabel: 'GitHub'
    },
    {
      id: 'leetcode',
      name: 'LeetCode',
      url: contactData.leetcode,
      icon: LeetCodeIcon,
      ariaLabel: 'LeetCode'
    },
    {
      id: 'skillrack',
      name: 'SkillRack',
      url: contactData.skillrack,
      icon: SkillRackIcon,
      ariaLabel: 'SkillRack'
    }
  ];

  return (
    <nav className={`social-links-group ${className}`} aria-label="Social and coding profiles">
      {profiles.map(({ id, name, url, icon: IconComponent, ariaLabel }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-profile-icon-btn"
          title={name}
          aria-label={ariaLabel}
        >
          <IconComponent size={16} />
        </a>
      ))}
    </nav>
  );
}
