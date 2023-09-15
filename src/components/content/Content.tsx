import { BodyContent, EndSection, StartSection, ImgIcon } from "./style";
import { NavLink } from 'react-router-dom';


import CarroselBootstrap from "../carrosel";

import favIcon from '../../assets/logo/favicon.png'
import { Section1_2 } from "./section1_2/index";
import imgRight from '../../assets/quadrado1.png'

import { Section1_1 } from "./section1_1";
import video1 from '../../assets/video1.mp4'

import { Section1_3 } from "./section1_3";
import img1 from '../../assets/1_3_1.png'
import img2 from '../../assets/1_3_2.png'
import { Section2 } from "./Section2";



export const Content = () => {
  return (
    <>
      <CarroselBootstrap />
      <BodyContent>
        
        <ImgIcon src={favIcon} alt="icon" />

        <Section2 />
        
        <EndSection>
          {/* <img />
          <div>
            <h1>
              Faça cobranças por Pix
            </h1>
            <p>
              Reduza altos custos com taxas de boleto e máquina de cartão. Além disso o Pix opera 24h por dia e 7 dias por semana.
            </p>
            <article><NavLink to={"/faleconosco"}>Fale conosco</NavLink></article>
          </div> */}

        </EndSection>

        <Section1_1
          id="products"
          video={video1}
          title='É mais rápido que ler esse título'
          subTitle='Nosso Pix'
          text='
          Ter o Pix como forma de pagamento é bom para a sua empresa e para o seu cliente. Afinal, se ele paga com facilidade, você vende muito mais. 
          Utilize o Pix profissionalmente e veja suas vendas decolarem!'
          btnText="Fale conosco"
        />
        <Section1_2
          id='cashIn'
          subTitle='Cash-in'
          title='Receber com PIX Via API'
          text='Essa funcionalidade permite que os clientes consigam gerar QR Codes dinâmicos ou estáticos para qualquer instituição financeira, com objetivo de cobrar seus clientes e receber de forma instantânea.'
          btnText="Fale conosco"
          img={imgRight}
        />
        {/* <Section1_3
         id='cashOut'
          subTitle="Cash-out"
          title='Seu parceiro para pagar, receber e gerenciar pagamentos online no Brasil.'
          text='Com o PIX é possível fazer todos os tipos de pagamento: de pessoa para pessoa, de empresa para empresa, de pessoa para empresa e vice-versa. 
          Pode ser usado em comércio e/ou serviços em geral, em pontos de venda ou eletrônico. 
          Para salários, seguros, impostos, benefícios sociais e taxas em geral.'
          btnText="Fale conosco"
          img1={img1}
          img2={img2}
        /> */}

        {/* <Section1_1
          video={video2}
          title='3Faça cobranças por Pix'
          subTitle='Pix Cash-In'
          text='Reduza altos custos com taxas de boleto e máquina de cartão. Além disso o Pix opera 24h por dia e 7 dias por semana.'
          btnText="Fale conosco"
        /> */}



        

        

        {/* <Section id="products">
          <div>
            <h3>Nosso Pix
            </h3>
            <h1>
              É mais rápido que ler esse título
            </h1>
            <p>
              Ter o Pix como forma de pagamento é bom para a sua empresa e para o seu cliente. Afinal, se ele paga com facilidade, você vende muito mais.
              Utilize o Pix profissionalmente e veja suas vendas decolarem!
            </p>
            <article><NavLink to={"/faleconosco"}>Fale conosco</NavLink></article>
          </div>
          <img src={banner1} alt="" />
        </Section>

        <Section2_1 id="">
          <div>
            <h3>Cash-in</h3>
            <h1>
              Receber com PIX Via API

            </h1>
            <p>
              Essa funcionalidade permite que os clientes consigam gerar QR Codes dinâmicos ou estáticos para qualquer instituição financeira, com objetivo de cobrar seus clientes e receber de forma instantânea.
            </p>
            <article><NavLink to={"/faleconosco"}>Entre em contato</NavLink></article>
          </div>
          <img src={kr} alt="qr code" />
        </Section2_1>

        <Section3_1 id="products1">
          <img src={banner2} alt="" />
          <div>
            <h3>Cash-out</h3>
            <h1>
              Seu parceiro para pagar, receber e gerenciar pagamentos online no Brasil

            </h1>
            <p>
              Com o PIX é possível fazer todos os tipos de pagamento: de pessoa para pessoa, de empresa para empresa, de pessoa para empresa e vice-versa.
              Pode ser usado em comércio e/ou serviços em geral, em pontos de venda ou eletrônico.
              Para salários, seguros, impostos, benefícios sociais e taxas em geral.
            </p>
            <article><NavLink to={"/faleconosco"}>Fale conosco</NavLink></article>
          </div>
        </Section3_1> */}


        <ImgIcon src={favIcon} alt="icon" />

        <StartSection id='API'>
          <div>
            <h1>
              Preparado para iniciar?
            </h1>
            <p>
              Com a integração da API, você aprimora o fluxo de envio e recebimento de transações Pix. Procura receber pagamentos de forma imediata? Comece agora mesmo!
            </p>
            <article><NavLink to={"/faleconosco"}>Entre em contato</NavLink></article>
          </div>
          <img />
        </StartSection>


        


      </BodyContent>


    </>
  );
};
