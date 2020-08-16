import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavbarLink ({ children, href }) {
  const router = useRouter()
  return (
    <Link href={href}>
      <a className={`navlinks-link ${router.pathname === href && 'active'}`}>
        {children}
        <style jsx>
          {`
            .navlinks-link{
              display: flex;
              justify-content: center;
              padding-left: 20px;
              padding-right: 20px;
              text-decoration: none;
              transition: color 0.2s ease;
              color: #888;
              padding-top: 10px;
              padding-bottom: 10px;
              font-size: 0.875rem;

              &.active {
                color: #fff;
              }

              &:hover {
                color: #fff;
              }
            }
          `}
        </style>
      </a>
    </Link>
  )
}
