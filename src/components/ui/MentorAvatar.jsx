import React from 'react';

/**
 * Localized Vector Illustration of The Mentor (المُرشد الذكي)
 * Provides crisp resolution, zero network requests, and pristine print reproduction.
 */
export default function MentorAvatar({ size = 64, className = '', showStar = true }) {
  return (
    <div
      className={`mentor-avatar-container ${className}`.trim()}
      style={{
        position: 'relative',
        width: size,
        height: size,
        flexShrink: 0,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="mentor-avatar-svg"
        style={{
          borderRadius: '50%',
          border: '2px solid var(--color-cobalt-600)',
          backgroundColor: 'var(--color-navy-900)',
          boxShadow: 'var(--shadow-sm)',
          display: 'block',
        }}
      >
        {/* Deep navy backdrop with subtle gradient glow */}
        <defs>
          <linearGradient id="avatarBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B152F" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="skin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D0C5" />
            <stop offset="100%" stopColor="#E8B5A2" />
          </linearGradient>
          <linearGradient id="blazer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>

        <circle cx="50" cy="50" r="50" fill="url(#avatarBg)" />

        {/* Shoulders / Tech Blazer */}
        <path
          d="M20 95 C 22 70, 32 68, 50 68 C 68 68, 78 70, 80 95 Z"
          fill="url(#blazer)"
        />

        {/* White shirt collar */}
        <polygon points="44,68 50,78 56,68 50,65" fill="#FFFFFF" />
        <polygon points="50,78 48,88 52,88" fill="#14B8A6" />

        {/* Neck */}
        <rect x="44" y="55" width="12" height="15" rx="3" fill="url(#skin)" />

        {/* Head */}
        <ellipse cx="50" cy="42" rx="17" ry="20" fill="url(#skin)" />

        {/* Modern Hair */}
        <path
          d="M32 38 C 30 25, 42 20, 52 20 C 65 20, 69 26, 68 36 C 63 32, 57 32, 50 33 C 43 34, 37 36, 32 38 Z"
          fill="#1E293B"
        />

        {/* Modern Smart Glasses */}
        <rect x="36" y="38" width="11" height="8" rx="2" fill="none" stroke="#60A5FA" strokeWidth="1.8" />
        <rect x="53" y="38" width="11" height="8" rx="2" fill="none" stroke="#60A5FA" strokeWidth="1.8" />
        <line x1="47" y1="42" x2="53" y2="42" stroke="#60A5FA" strokeWidth="1.8" />

        {/* Friendly confident smile */}
        <path d="M45 52 Q 50 56 55 52" fill="none" stroke="#78350F" strokeWidth="1.6" strokeLinecap="round" />

        {/* Subtle Tech Headset piece */}
        <path d="M33 42 C 32 40, 32 46, 33 48" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {/* Verified Mentor Star Badge */}
      {showStar && (
        <span
          style={{
            position: 'absolute',
            bottom: '-2px',
            left: '-2px',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-cobalt-600)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            fontWeight: '900',
            boxShadow: 'var(--shadow-sm)',
            border: '2px solid #FFFFFF',
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          ★
        </span>
      )}
    </div>
  );
}
