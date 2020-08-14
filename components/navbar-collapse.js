import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import NavbarLink from './navbar-link'
import Collapse from './collapse'

export default function NavbarCollapse ({ routes }) {
  const [collapsed, setCollapsed] = useState(false)

  function handleClick () {
    setCollapsed(collapsed => !collapsed)
  }

  return (
    <>
      <button className={`navbar-toggler${collapsed ? ' active' : ''}`} onClick={handleClick}>
        <FiMenu />
      </button>
      <Collapse isOpen={collapsed} navbar>
        <div className='navbar-links'>
          {
            routes.map(r => (
              <NavbarLink
                href={r.href}
                key={r.href}
              >
                {r.text}
              </NavbarLink>
            ))
          }
        </div>
      </Collapse>
      <style jsx>
        {`
          .navbar-toggler {
            padding: .25rem .75rem;
            font-size: 1.25rem;
            line-height: 1;
            background-color: transparent;
            border: 1px solid #888;
            border-radius: .25rem;
            color: #888;
            cursor: pointer;
            transition: color 0.2s ease;

            &.active {
              color: #fff;
            }

            @media (min-width: 992px) {
              display: none;
            }
          }
          .navbar-links {
            margin-left: auto;
            display: flex;
            flex-direction: column;
            padding-left: 0;
            margin-bottom: 0;
            @media (min-width: 992px) {
              flex-direction: row;
            }
          }
        `}
      </style>
    </>
  )
}
