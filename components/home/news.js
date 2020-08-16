import Container from '../container'
import PostGrid from '../post-grid'

export default function News () {
  return (
    <section className='news'>
      <Container>
        <div className='title'>
          <h2>Últimas Noticias</h2>
        </div>
        <div className='wrapper'>
          <PostGrid
            image='https://media.graphcms.com/resize=fit:crop,height:1000,width:2000/AgvzHl15Q1erVsLzMcPs'
            title='Noticia Número Uno Ejemplo'
            date='28/01/2020'
            excerpt='Una corta introducción de la noticia'
          />
          <PostGrid
            image='https://media.graphcms.com/resize=fit:crop,height:1000,width:2000/AgvzHl15Q1erVsLzMcPs'
            title='Noticia Número Dos Ejemplo'
            date='06/02/2020'
            excerpt='Una corta introducción de la noticia'
          />
          <PostGrid
            image='https://media.graphcms.com/resize=fit:crop,height:1000,width:2000/AgvzHl15Q1erVsLzMcPs'
            title='Noticia Número Tres Ejemplo'
            date='07/06/2020'
            excerpt='Una corta introducción de la noticia'
          />
        </div>
      </Container>
      <style jsx>
        {`
          .news {
            padding: 90px 0;
            background-color: var( --igs-background-secondary);
          }

          .title {
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
            h2 {
              font-size: 2rem;
              text-align: center;
            }
          }

          .wrapper {
            display: flex;
            justify-content: center;
            flex-direction: column;

            @media (min-width: 768px) {
              flex-direction: row;
            }
          }
        `}
      </style>
    </section>
  )
}
