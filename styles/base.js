import css from 'styled-jsx/css'

export default css.global`
  :root {
    /* Appearance */
    --igs-radius: 5px;

    /* Fonts */
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    --font-mono: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
      Bitstream Vera Sans Mono, Courier New, monospace;

    /* Light Mode */

    --igs-background: #ffffff;
    --igs-foreground: #222222;
    --igs-selection: #79ffe1;
    --igs-header-background: #131415;
    --igs-header-link: #fafbfc;
    --igs-logo: #ffffff;
    --igs-input-border: #eaeaea;
    --igs-input-border-focus: #666666;
    --igs-radius: 5px;
    --igs-gap-half: 12px;
    --igs-button-fg-hover: #000;
    --igs-button-bg-hover: undefined;
    --igs-button-border-hover: #000;
  }

  .dark-theme {
    --igs-background: #131415;
    --igs-foreground: #fafbfc;
    --igs-selection: #79ffe1;
  }
`
