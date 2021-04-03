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
import { useUser } from "../../context/user/UserContext";

const Header = () => {
  const {
    state: { user },
  } = useUser();
  return (
    <HeaderStyled>
      <Navbar>
        <Logo width="30px" height="27px" />
        <WrapperFlex>
          <Username>{user.name}</Username>
          <Button>
            <Text>{user.points}</Text>
            <Coin width="25px" height="25px" />
            <Text>+</Text>
          </Button>
        </WrapperFlex>
      </Navbar>
    </HeaderStyled>
  );
};

export default Header;
