import { HexTitles, FirstSection2 } from "./styles"

import svg1 from '../../../assets/svg/svg1.png'
import svg2 from '../../../assets/svg/svg2.png'
import svg3 from '../../../assets/svg/svg3.png'

import { Cards } from '../Section2/Cards'

export const Section2 = () => {
  return (
    <>

      <HexTitles>
        <h2>Alcance um novo nível</h2>
        <h1>
          A ferramenta perfeita para impulsionar o seu desenvolvimento.

        </h1>
        <p>O Pix corresponde a um formato de transações financeiras estabelecido e normatizado pelo Banco Central do Brasil (BCB). Qualquer transação via Pix é viável em qualquer momento, todos os dias da semana, e demanda apenas alguns instantes para ser finalizada.
        </p>

      </HexTitles>

      <Cards
          img={svg1}
          h2='Rápido e Seguro'
          p='Transações concluídas em poucos segundos, recursos disponíveis para o recebedor em tempo real.'

          img2={svg2}
          h22='Barato'
          p2='Gratuito para pessoa física pagadora. Custo baixo para os demais casos.'

          img3={svg3}
          h23='Aberto'
          p3='Estrutura ampla de participação, possibilitando pagamentos entre instituições distintas.'        
        />

    </>
  )
}