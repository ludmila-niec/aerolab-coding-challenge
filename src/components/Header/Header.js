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
import Modal from "../Modal";
import AddPoints from "./AddPoints/Addpoints";
import Toast from "../Toast";

export const STATUS = {
  IDLE: "IDLE",
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED",
};

const Header = () => {
  // track status of 'addPoints' action
  const [status, setStatus] = useState(STATUS.IDLE);
  // Modal state
  const [isOpen, setIsOpen] = useState(false);
  const { state, actions } = useUser();
  const { user } = state;
  const { addPoints } = actions;

  const handleAddPoints = async (amount) => {
    try{
      setStatus(STATUS.PENDING);
      await addPoints(amount)
      setStatus(STATUS.RESOLVED)
    }catch(error){
      setStatus(STATUS.REJECTED)
    }
  };

  const resetStatus = () => {
    setStatus(STATUS.IDLE);
  };
  return (
    <>
      <HeaderStyled>
        <Navbar>
          <Logo width="30px" height="27px" />
          <WrapperFlex>
            <Username>{user.name}</Username>
            <Button onClick={() => setIsOpen(!isOpen)}>
              <Text>{user.points}</Text>
              <Coin width="25px" height="25px" />
              <Text>+</Text>
            </Button>
          </WrapperFlex>
        </Navbar>
        {status === STATUS.RESOLVED && (
          <Toast color="success">Points successfully updated!</Toast>
        )}
      </HeaderStyled>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Get More Points!"
      >
        <AddPoints
          status={status}
          addPoints={handleAddPoints}
          resetStatus={resetStatus}
        />
      </Modal>
    </>
  );
};

export default Header;
