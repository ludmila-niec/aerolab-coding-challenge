import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  HeaderStyled,
  Navbar,
  WrapperFlex,
  Button,
  UserWrapper,
  UserMenu,
  LinkStyled,
  Username,
  Text,
} from "./styled";
import Logo from "../icons/Logo";
import Coin from "../icons/Coin";
import ArrowDown from "../icons/DropDrown";
import { useUser } from "../../context/user/UserContext";
import Modal from "../Modal";
import AddPoints from "./AddPoints/Addpoints";
import Toast from "../Toast";
import { Link } from "react-router-dom";

export const STATUS = {
  IDLE: "IDLE",
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED",
};

const Header = () => {
  // track status of 'addPoints' action
  const [status, setStatus] = useState(STATUS.IDLE);
  // user dropdown
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);
  // Modal state
  const [isOpen, setIsOpen] = useState(false);
  const { state, actions } = useUser();
  const { user } = state;
  const { addPoints } = actions;
  const history = useHistory()

  // listen for history changes
  useEffect(() =>{
    history.listen(() =>{
     setIsOpenUserMenu(false)
     setIsOpen(false) 
    })
  },[history])

  const handleAddPoints = async (amount) => {
    try {
      setStatus(STATUS.PENDING);
      await addPoints(amount);
      setStatus(STATUS.RESOLVED);
    } catch (error) {
      setStatus(STATUS.REJECTED);
    }
  };

  const resetStatus = () => {
    setStatus(STATUS.IDLE);
  };
  return (
    <>
      <HeaderStyled>
        <Navbar>
          <Link id="logo" to="/home">
            <Logo width="30px" height="27px" />
          </Link>
          <WrapperFlex>
            <UserWrapper onClick={() => setIsOpenUserMenu(!isOpenUserMenu)}>
              <Username>{user.name}</Username>
              <ArrowDown />
              {isOpenUserMenu && (
                <UserMenu id='user-menu'>
                  <LinkStyled to="/history">My History</LinkStyled>
                </UserMenu>
              )}
            </UserWrapper>
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
