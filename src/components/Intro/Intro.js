import React from "react";
import Logo from "../icons/Logo";
import { Container, Wrapper, WrapperLogo,Text } from "./styled";

const Intro = ({user, loading}) => {
  return (
    <Container>
      <Wrapper>
        <span className="hello">Hello!</span>
        {!loading && <span className="name">{user.name}</span>}
      </Wrapper>
      <WrapperLogo>
        <Logo width="90px" height="93px" />
        <Text>Loading...</Text>
      </WrapperLogo>
    </Container>
  );
};

export default Intro;
