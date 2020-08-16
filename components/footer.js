import Link from 'next/link'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'
import Container from './container'
import IglesiasLogo from './logo'
import PreFooter from './pre-footer'

export default function Footer () {
  return (
    <footer>
      <PreFooter />
      <Container>
        <div className='bottom'>
          <div className='brand'>
            <IglesiasLogo size='25' />
            <p>Copyright © 2020 Iglesias Claras. Todos los derechos reservados.</p>
            <p>Inspirado en <a rel='noopener' href='https://www.churchclarity.org/'>Church Clarity</a>.</p>
            <p className='dev'>Sitio web desarrollado por <a href='https://www.linkedin.com/in/nikosantis'>Nikolas Santis</a>.</p>
          </div>
          <div className='privacy'>
            <ul>
              <li>
                <Link href='#'>
                  <a>Cookies</a>
                </Link>
              </li>
              <li>
                •
              </li>
              <li>
                <Link href='#'>
                  <a>Políticas de Privacidad</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='social'>
            <ul>
              <li>
                <a href='#'>
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a href='#'>
                  <FaTwitterSquare />
                </a>
              </li>
              <li>
                <a href='#'>
                  <FaInstagramSquare />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <style jsx>
        {`
          footer {
            padding: 35px 0;
            background-color: var(--igs-footer-background);
          }
          .bottom {
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            @media (min-width: 768px) {
              flex-direction: row;
            }
          }

          .brand {
            padding: 0 12px;
            & > :global(svg) {
              margin-bottom: 20px;
            }
            p {
              color: var(--igs-footer-foreground);
              font-size: 0.785rem;
              a {
                color: var(--igs-footer-foreground);
                :hover {
                  color: var(--igs-background);
                }
              }
            }
            .dev {
              margin-top: 10px;
            }
          }

          .privacy {
            display: flex;
            align-items: center;
            justify-content: center;
            @media (min-width: 768px) {
              justify-content: flex-end;
            }
            padding: 0 12px;
            font-size: 0.785rem;
            ul {
              display: inline-flex;
              li {
                padding: 0 5px;
                color: var(--igs-footer-foreground);
                a {
                  color: var(--igs-footer-foreground);
                  :hover {
                    color: var(--igs-background);
                  }
                }
              }
            }
          }

          .social {
            display: flex;
            align-items: center;
            justify-content: center;
            @media (min-width: 768px) {
              justify-content: flex-end;
            }
            padding: 0 12px;
            & :global(svg) {
              color: var(--igs-footer-foreground);
              font-size: 1.2rem;
              transition: all .2s ease;
            }
            ul {
              display: inline-flex;
              li {
                padding: 0 5px;
                a {
                  :hover :global(svg) {
                    color: var(--igs-background);
                  }
                }
              }
            }
          }
        `}
      </style>
    </footer>
  )
}
