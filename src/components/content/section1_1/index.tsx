import { NavLink } from 'react-router-dom';



import { VideoSection } from './section1_1';

interface  Section1_1{
  id?: string,
  title: string,
  subTitle: string,
  text: string,
  btnText: string,
  video?: string,
  image?: string,
}

export function Section1_1({btnText, text, title, subTitle, id, image }: Section1_1) {
  return (
    <VideoSection id={id}>
      {/* <video src={video} autoPlay loop muted /> */}
      
      <img src={image} alt="" />
      
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
    </VideoSection>

  );
}
