import React, { useState, useEffect, useRef } from "react";
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
  const modalRef = useRef(null);
  const buttonModalRef = useRef(null);
  const buttonPointsRef = useRef(null);
  const { state, actions } = useUser();
  const { user } = state;
  const { addPoints } = actions;
  const history = useHistory();

  // listen for history changes
  useEffect(() => {
    history.listen(() => {
      setIsOpenUserMenu(false);
      setIsOpen(false);
    });
  }, [history]);

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
  
  const toggleUserMenu = (e) => {
    if (e.keyCode !== 13) return;
    setIsOpenUserMenu(!isOpenUserMenu);
  };

  // MODAL HANDLERS //
  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
    buttonPointsRef.current.focus();
  };

  return (
    <>
      <HeaderStyled>
        <Navbar>
          <Link id="logo" to="/home" aria-label="go to homepage">
            <Logo width="30px" height="27px" />
          </Link>
          <WrapperFlex>
            <UserWrapper
              tabIndex="0"
              role="button"
              aria-label="Toggle user's menu"
              onClick={() => setIsOpenUserMenu(!isOpenUserMenu)}
              onKeyDown={toggleUserMenu}
            >
              <Username>{user.name}</Username>
              <ArrowDown />
              {isOpenUserMenu && (
                <UserMenu id="user-menu">
                  <LinkStyled to="/history" aria-label="go to user's history">
                    My History
                  </LinkStyled>
                </UserMenu>
              )}
            </UserWrapper>
            <Button
              aria-label="Add more points"
              ref={buttonPointsRef}
              onClick={onOpen}
            >
              <WrapperFlex id="points-container">
                <Text aria-label={`current points ${user.points}`}>
                  {user.points}
                </Text>
                <Coin width="25px" height="25px" />
                <Text aria-hidden="true" id="plus-sign">
                  +
                </Text>
              </WrapperFlex>
            </Button>
          </WrapperFlex>
        </Navbar>
        {status === STATUS.RESOLVED && (
          <Toast color="success">Points successfully updated!</Toast>
        )}
        {status === STATUS.REJECTED && (
          <Toast color="error">Error: Failed to update points</Toast>
        )}
      </HeaderStyled>
      <></>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Get More Points!"
        ariaLabel='Get more points'
        modalRef={modalRef}
        buttonRef={buttonModalRef}
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
