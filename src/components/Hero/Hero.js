import React from "react";
import imgSm from "../../assets/header-x1.png";
import imgMd from "../../assets/header-x2.png";
import { Container, Image, Title } from "./styled";

const Hero = ({title}) => {
  return (
    <section>
      <Container>
        <Image
          srcSet={`${imgSm} 900w, ${imgMd} 1950w`}
          sizes="
          (max-width: 899px) 900w, 1950w"
          src={imgSm}
          alt="Headphones Banner"
        />
        <Title>{title}</Title>
      </Container>
    </section>
  );
};

export default Hero;
