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
import { Link, useLocation } from "react-router-dom";
import { STATUS } from "../../service/status";

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

  const {
    state: { user },
    actions: { addPoints },
  } = useUser();
  const history = useHistory();
  const location = useLocation();

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

  const toast = {
    toastSuccess: (
      <Toast top="-100%" color="success">
        Points successfully updated!
      </Toast>
    ),
    toastError: (
      <Toast top="8vh" color="error">
        Error: Failed to update points
      </Toast>
    ),
  };

  return (
    <>
      <HeaderStyled style={{ opacity: `${location.pathname === "/" ? 0 : 1}` }}>
        <Navbar>
          <Link id="logo-kite" to="/home" aria-label="go to homepage">
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
      </HeaderStyled>
      <></>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Get More Points!"
        ariaLabel="Get more points"
        modalRef={modalRef}
        buttonRef={buttonModalRef}
        status={status}
        toast={toast}
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
