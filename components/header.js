import Navbar from './navbar'

export default function Header () {
  return (
    <header>
      <Navbar />
      <style jsx>
        {`
          header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: var(--igs-header-background);
            padding: 8px 0;
          }
        `}
      </style>
    </header>
  )
}
