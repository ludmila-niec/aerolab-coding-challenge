import React from "react";
import {
  HeaderStyled,
  Navbar,
  WrapperFlex,
  Button,
  Username,
  Text,
} from "./styled";
import Logo from "../icons/Logo";
import Coin from "../icons/Coin";

const Header = () => {
  return (
    <HeaderStyled>
      <Navbar>
        <Logo width="30px" height="27px" />
        <WrapperFlex>
          <Username>John Kite</Username>
          <Button>
            <Text>6000</Text>
            <Coin width="25px" height="25px" />
            <Text>+</Text>
          </Button>
        </WrapperFlex>
      </Navbar>
    </HeaderStyled>
  );
};

export default Header;
