import React from "react";
import imgSm from "../../assets/hero-sm.png";
import imgMd from "../../assets/hero-lg.png";
import { Container, Image, Title } from "./styled";

const Hero = () => {
  return (
    <section>
      <Container>
        <Image
          src={imgSm}
          srcSet={`${imgSm} 900w, ${imgMd} 1950w`}
          sizes="
          (max-width: 899px) 900w, 1950w"
          alt="Electronics Banner"
        />
        <Title>Electronics</Title>
      </Container>
    </section>
  );
};

export default Hero;
