// Ayu Mirage inspired theme - similar to Ojas's portfolio
export const colors = {
  // Base colors (Ayu Mirage palette)
  background: '#1f2430',      // Main background
  surface: '#191e2a',         // Darker surface
  panel: '#242d38',           // Panel/card background
  border: '#2b3240',          // Border color
  
  // Text colors
  text: '#cbccc6',            // Main text
  subtext: '#9da5b4',         // Secondary text
  muted: '#6c7680',           // Muted text
  
  // Accent colors (interactive elements)
  accentPurple: '#d4bfff',    // Purple accent
  accentBlue: '#73d7ff',      // Blue accent
  accentOrange: '#ffcc99',    // Orange accent
  accentGreen: '#a6cc70',     // Green accent
  
  // Semantic colors
  success: '#a6cc70',
  warning: '#ffcc99',
  error: '#f28779',
  info: '#73d7ff',
};

// Tailwind config would include:
export const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        background: colors.background,
        surface: colors.surface,
        panel: colors.panel,
        border: colors.border,
        text: colors.text,
        subtext: colors.subtext,
        'accent-purple': colors.accentPurple,
        'accent-blue': colors.accentBlue,
        'accent-orange': colors.accentOrange,
        'accent-green': colors.accentGreen,
      },
    },
  },
};

// Button color variants (cycling through accents on hover)
export const buttonColors = [
  {
    text: colors.accentPurple,
    border: colors.accentPurple,
  },
  {
    text: colors.accentBlue,
    border: colors.accentBlue,
  },
  {
    text: colors.accentOrange,
    border: colors.accentOrange,
  },
  {
    text: colors.accentGreen,
    border: colors.accentGreen,
  },
];