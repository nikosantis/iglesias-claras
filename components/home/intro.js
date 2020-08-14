import Container from '../container'
import Search from './search'

export default function Intro () {
  return (
    <main role='main'>
      <Container>
        <div className='intro'>
          <h1 className='title'>
            Iglesias Claras
            <br />
            <span>La ambigüedad es perjudicial, la claridad es razonable</span>
          </h1>
          <h2>
            Encuentra una <strong>iglesia verificada y clara</strong> cerca tuyo
          </h2>
          <Search />
        </div>
      </Container>

      <style jsx>
        {`
          main {
            width: 100%;
          }
          .intro {
            padding: 80px 0;
          }
          .title {
            font-size: 3.75rem;
            font-weight: 700;
            text-align: center;
            line-height: 1;
            margin-bottom: 45px;
            span {
              font-size: 2rem;
            }
          }
          h2 {
            font-weight: 400;
            font-size: 1.5rem;
            text-align: center;
            color: var(--igs-foreground);
            margin-bottom: 45px;
          }
        `}
      </style>
    </main>
  )
}
