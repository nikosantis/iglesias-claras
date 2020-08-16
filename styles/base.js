import css from 'styled-jsx/css'

export default css.global`
  :root {
    /* Appearance */
    --igs-radius: 5px;
    --igs-accents-1: #fafafa;
    --igs-accents-2: #eaeaea;
    --igs-accents-3: #999999;
    --igs-accents-4: #888888;
    --igs-accents-5: #666666;
    --igs-accents-6: #444444;
    --igs-accents-7: #333333;
    --igs-accents-8: #111111;

    /* Fonts */
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    --font-mono: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
      Bitstream Vera Sans Mono, Courier New, monospace;

    /* Light Mode */

    --igs-background: #ffffff;
    --igs-foreground: #222222;
    --igs-background-secondary: #fafafa;
    --igs-selection: #79ffe1;
    --igs-for-background: #131415;
    --igs-header-height: 76px;
    --igs-header-background: var(--igs-for-background);
    --igs-header-link: #fafbfc;
    --igs-logo: #ffffff;
    --igs-input-border: #eaeaea;
    --igs-input-border-focus: #666666;
    --igs-radius: 5px;
    --igs-gap-half: 12px;
    --igs-button-fg-hover: #000;
    --igs-button-bg-hover: undefined;
    --igs-button-border-hover: #000;
    --igs-footer-background: var(--igs-for-background);
    --igs-footer-foreground: #666666;
    --igs-prefooter-foreground: #fafbfc;
  }

  .dark-theme {
    --igs-background: #131415;
    --igs-foreground: #fafbfc;
    --igs-selection: #79ffe1;
  }
`
