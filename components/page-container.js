import Head from 'next/head'

export default function PageContainer ({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title || 'Iglesias Claras - La ambigüedad es perjudicial, la claridad es razonable'}</title>
        {description !== false && (
          <meta
            name='description'
            content={description || 'Base de datos una gran cantidad de comunidades cristianas, enumerada por la claridad con la que comunican sus políticas que impactan a personas LGBTIQ+ y a mujeres en el liderazgo.'}
          />
        )}
      </Head>

      {children}

      <style jsx global>
        {`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        a {
          -webkit-tap-highlight-color: transparent;
        }

        @media (any-hover: hover) {
          a:hover {
            -webkit-tap-highlight-color: transparent;
          }
        }

        /* Remove default padding */
        ul[class],
        ol[class] {
          padding: 0;
        }

        /* Remove default margin */
        body,
        h1,
        h2,
        h3,
        h4,
        p,
        ul[class],
        ol[class],
        li,
        figure,
        figcaption,
        blockquote,
        dl,
        dd {
          margin: 0;
        }

        body {
          min-height: 100vh;
          scroll-behavior: smooth;
          text-rendering: optimizeSpeed;
          line-height: 1.5;
        }

        ul,
        ol {
          list-style: none;
        }

        a:not([class]) {
          text-decoration-skip-ink: auto;
        }

        input,
        button,
        textarea,
        select {
          font: inherit;
        }

        /* Remove all animations and transitions for people that prefer not to see them */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
          html {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            line-height: 1.5;
          }

          html,
          body {
            padding: 0;
            margin: 0;
            font-size: 1rem;
            background: var(--igs-background);
            color: var(--igs-foreground);
            font-display: block;
            font-feature-settings: 'calt' 'case' 'rlig';
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          body {
            position: relative;
            font-family: var(--font-sans);
            transition: color 0.1s ease-in-out, background 0.1s ease-in-out;
          }

          ::selection {
            background-color: var(--igs-selection);
            color: var(--igs-foreground);
            text-shadow: none;
          }
        `}
      </style>
    </div>
  )
}
