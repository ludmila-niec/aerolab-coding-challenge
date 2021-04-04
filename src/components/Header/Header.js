import React, { useState } from "react";
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
import Modal from "../Modal/Modal";
import AddPoints from "./AddPoints/Addpoints";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, actions } = useUser();
  const { user } = state;
  const { addPoints } = actions;
  return (
    <>
      <HeaderStyled>
        <Navbar>
          <Logo width="30px" height="27px" />
          <WrapperFlex>
            <Username>{user.name}</Username>
            <Button onClick={() => setIsOpen(true)}>
              <Text>{user.points}</Text>
              <Coin width="25px" height="25px" />
              <Text>+</Text>
            </Button>
          </WrapperFlex>
        </Navbar>
      </HeaderStyled>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Get More Points!"
      >
        <AddPoints addPoints={addPoints} />
      </Modal>
    </>
  );
};

export default Header;
