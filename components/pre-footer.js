import Container from './container'

export default function PreFooter () {
  return (
    <section className='pre-footer'>
      <Container>
        <div className='wrapper'>
          <div className='content extract'>
            <h5>
              Iglesias Claras es una base de datos de origen colectivo
              de una gran cantidad de comunidades cristianas
              calificadas por nuestro equipo de voluntarios
              en función de lo fácil que es encontrar las políticas
              de cada iglesia o comunidad,
              enumeradas por la claridad con la que comunican
              sus políticas que impactan a personas LGBTIQ+ y a mujeres en el liderazgo.
            </h5>
          </div>
          <div />
          <div className='content links'>
            <h4>Iglesias Claras</h4>
            <p>
              <a href='#'>¿Qué es?</a>
            </p>
            <p>
              <a href='#'>Preguntas Frecuentes</a>
            </p>
            <p>
              <a href='#'>Nuestro Equipo</a>
            </p>
            <p>
              <a href='#'>Recursos</a>
            </p>
          </div>
          <div className='content links'>
            <h4>Iglesias</h4>
            <p>
              <a href='#'>Busca una Iglesia</a>
            </p>
            <p>
              <a href='#'>Publicar Iglesia</a>
            </p>
            <p>
              <a href='#'>Convertirse en Iglesia Verificada</a>
            </p>
            <p>
              <a href='#'>Definición de Puntajes</a>
            </p>
          </div>

        </div>
      </Container>
      <style jsx>
        {`
          .pre-footer {
            padding: 90px 0;
            background-color: var(--igs-footer-background);
          }
          .wrapper {
            display: flex;
            flex-direction: column;

            @media (min-width: 768px) {
              flex-direction: row;
            }
          }
          .extract {
            padding: 0 12px;
            flex: 1;
          }
          .links {
            flex: .5;
          }
          .content {
            padding: 0 12px;

            h4 {
              font-weight: 500;
              font-size: 0.875rem;
              color: var(--igs-prefooter-foreground);
              margin-bottom: 14px;
            }

            h5 {
              color: var(--igs-prefooter-foreground);
              margin-top: 0;
              font-size: 1rem;
              font-weight: 400;
            }

            p {
              margin-bottom: 10px;
              a {
                color: var(--igs-footer-foreground);
                font-size: 0.875rem;
                :hover {
                  color: var(--igs-background);
                }
              }
            }
          }
        `}
      </style>
    </section>
  )
}
