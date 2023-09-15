import { FirstStyle } from './FirstAndSecond'

interface First {
  img: string,
  h2: string,
  p: string,
  img2: string,
  h22: string,
  p2: string,
  img3: string,
  h23: string,
  p3: string,
}

export const Cards = ({ img, h2, p, img2, h22, p2, img3, h23, p3 }: First) => {
  return (
    <FirstStyle>
      <div>
        <img src={img} alt="" />
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
      <div>
        <img src={img2} alt="" />
        <h2>{h22}</h2>
        <p>{p2}</p>
      </div>
      <div>
        <img src={img3} alt="" />
        <h2>{h23}</h2>
        <p>{p3}</p>
        </div>

    </FirstStyle>
  )
}