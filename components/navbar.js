import Link from 'next/link'
import IglesiasLogo from './logo'
import NavbarCollapse from './navbar-collapse'

const routes = [
  {
    href: '/que-es',
    text: 'Iglesias Claras'
  },
  {
    href: '/noticias',
    text: 'Noticias'
  },
  {
    href: '/blog',
    text: 'Blog'
  },
  {
    href: '/agregar-iglesia',
    text: 'Agregar una iglesia'
  },
  {
    href: '/buscar-iglesia',
    text: 'Buscar iglesia'
  }
]

export default function Navbar () {
  return (
    <nav>
      <div className='nav-container'>
        <Link href='/'>
          <a className='brand'>
            <IglesiasLogo />
          </a>
        </Link>

        <NavbarCollapse routes={routes} />

      </div>
      <style jsx>
        {`
          nav {
            width: 100%;
            padding-top: .5rem;
            padding-bottom: .5rem;
          }

          .nav-container {
            width: 100%;
            padding-right: 1rem;
            padding-left: 1rem;
            margin-right: auto;
            margin-left: auto;

            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;

            @media (min-width: 576px) {
              max-width: 540px;
            }

            @media (min-width: 768px) {
              max-width: 720px;
            }

            @media (min-width: 992px) {
              max-width: 960px;
            }

            @media (min-width: 1200px) {
              max-width: 1140px;
            }

            @media (min-width: 1400px) {
              max-width: 1320px;
            }
          }

          .brand {
            text-decoration: none;
            white-space: nowrap;
            transition: color 0.2s ease;
            display: flex;
            margin-right: 20px;
          }
        `}
      </style>
    </nav>
  )
}
