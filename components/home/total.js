export default function TotalChurches () {
  return (
    <div className='total'>
      <div className='wrapper'>
        <div className='box'>
          <div className='number'>
            5.428
          </div>
          <div className='text'>
            Iglesias Ingresadas
          </div>
        </div>
        <div className='box'>
          <div className='number'>
            4.089
          </div>
          <div className='text'>
            Iglesias Publicadas
          </div>
        </div>
        <div className='box'>
          <div className='number'>
            1.339
          </div>
          <div className='text'>
            Iglesias por Publicar
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .total {
            display: flex;
            justify-content: center;
            position: relative;
            min-width: 1px;
            max-width: 100%;
            margin-top: 50px;
          }
          .wrapper {
            display: flex;
            justify-content: center;
            flex-direction: column;

            @media (min-width: 768px) {
              flex-direction: row;
            }
          }
          .box {
            padding: 15px;
            margin: 0 15px;
            text-align: center;

            .number {
              font-size: 3rem;
              font-weight: 500;
            }
            .text {
              font-size: 0.875rem;
              text-transform: uppercase;
              font-weight: 500;
            }
          }
        `}
      </style>
    </div>
  )
}
