export default function PostGrid ({ image, title, date, excerpt }) {
  return (
    <article className='new'>
      <header />
      <section>
        <time dateTime={date}>{date}</time>
        <h3>{title}</h3>
        <p>{excerpt}</p>

        <div className='link'>
          <a href='#'>Leer más ...</a>
        </div>
      </section>

      <style jsx>
        {`
          .new {
            padding: 0 24px;
            width: 100%;
            @media (min-width: 768px) {
              width: calc(100% / 3);
            }
          }
          header {
            background-image: url(${image});
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            width: 100%;
            position: relative;
            height: 240px;
            margin-bottom: 25px;
          }
          section {
            padding: 12px;
            h3 {
              font-size: 1.2rem;
              margin-bottom: 12px;
            }
            time {
              color: var(--igs-accents-5);
              font-size: 0.785rem;
            }
            p {
              font-size: 0.875rem;
              margin-bottom: 12px;
            }
            .link {
              a {
                color: var(--igs-accents-6);
                :hover {
                  color: var(--igs-foreground);
                }
              }
            }
          }
        `}
      </style>
    </article>
  )
}
