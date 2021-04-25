import React  from "react";
import { Container, Image, Title } from "./styled";

const Hero = ({title}) => {
  return (
    <section>
      <Container>
        <Image
          srcSet={`${process.env.PUBLIC_URL + "/header-x1.png"} 900w, ${process.env.PUBLIC_URL + "/header-x2.png"} 1950w`}
          sizes="
          (max-width: 899px) 900w, 1950w"
          src={process.env.PUBLIC_URL + "/header-x1.png"}
          alt="Headphones Banner"
        />
        <Title>{title}</Title>
      </Container>
    </section>
  );
};

export default Hero;
