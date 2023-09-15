import { HexTitles, FirstSection2 } from "./styles"

import svg1 from '../../../assets/svg/svg1.png'
import svg2 from '../../../assets/svg/svg2.png'
import svg3 from '../../../assets/svg/svg3.png'

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

      <FirstSection2>
        <div>
          <img src={svg1} alt="" />
          <h2>Integração Simples</h2>
          <p>Conecte-se com sua plataforma, de maneira rapida. Recursos disponíveis para o recebedor em tempo real.</p>
        </div>
        <div>
          <img src={svg2} alt="" />
          <h2>Experiência Simples</h2>
          <p>Experiência simples e intuitiva para o usuário final. Possibilitando pagamentos entre instituições distintas.</p>

        </div>
        <div>
          <img src={svg3} alt="" />
          <h2>Disponível</h2>
          <p>Transações podem ser iniciadas diretamente pelo celular. Disponivel sete dias por semana, inclusive feriados.</p>

        </div>

      </FirstSection2>

    </>
  )
}