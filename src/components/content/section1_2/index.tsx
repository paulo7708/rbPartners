import { NavLink } from 'react-router-dom';
import { StyledSection } from './section1_2';

interface Section1_2{
  id?: string,
  title: string,
  subTitle: string,
  text: string,
  btnText: string,
  img: string,
}

export function Section1_2({ btnText, img, text, title, subTitle, id}:Section1_2) {
  return (
    <StyledSection id={id}>      
      <div>
        <h3>{subTitle}</h3>
        <h1>
          {title}
        </h1>
        <p>
          {text}
        </p>
        <article><NavLink to={"/faleconosco"}>{btnText}</NavLink></article>
      </div>
      <img  src={img} />
    </StyledSection>    

  );
}

{/* <VideoSection>
      <video  src={videoleft} autoPlay loop muted />
    
    </VideoSection> */}