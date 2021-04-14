import React, { useState, useEffect, useRef } from "react";
import RedeemProduct from "../RedeemProduct";
import Modal from "../../Modal";
import BuyWhite from "../../icons/BuyWhite";
import BuyBlue from "../../icons/BuyBlue";
import Coin from "../../icons/Coin";
import { useUser } from "../../../context/user/UserContext";
import {
  Container,
  WrapperImg,
  WrapperInfo,
  Badge,
  Overlay,
  WrapperValue,
  Button,
  Divider,
} from "./styled";

const ProductCard = ({ data, index }) => {
  const [display, setDisplay] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  // user context
  const { state, actions } = useUser();
  const { user } = state;
  const { redeemProduct } = actions;
  // refs
  const containerRef = useRef(null);
  const modalRef = useRef(null);
  const closeModalBtnRef = useRef(null);
  const { name, category, cost, img } = data;

  useEffect(() => {
    const container = containerRef.current;

    function showOverlay() {
      setDisplay(true);
      container.style.transform = "translateY(-5%)";
    }

    function hideOverlay() {
      setDisplay(false);
      container.style.transform = "translateY(0)";
    }

    container.addEventListener("mouseenter", showOverlay);
    container.addEventListener("mouseleave", hideOverlay);

    return () => {
      container.removeEventListener("mouseenter", showOverlay);
      container.removeEventListener("mouseleave", hideOverlay);
    };
  }, []);

  // when modal is open, focus the 'close' button
  useEffect(() => {
    if (isOpenModal) closeModalBtnRef.current.focus();
  }, [isOpenModal]);

  // MODAL HANDLERS //
  const onOpen = () => {
    setIsOpenModal(true);
    toggleScrollLock();
  };

  const onClose = () => {
    setIsOpenModal(false);
    toggleScrollLock();
  };

  // avoid scrolling the page when modal is open
  const toggleScrollLock = () => {
    const htmlDOM = document.querySelector("html");
    if (isOpenModal) {
      return (htmlDOM.style.overflow = "visible");
    }
    htmlDOM.style.overflow = "hidden";
  };

  // keyboard navigation for products
  const onKeyDown = (e) => {
    if (e.keyCode === 13) setDisplay(true);
    if (e.keyCode === 27) setDisplay(false);
  };

  const showOverlay = (
    <Overlay display={display.toString()}>
      <BuyWhite />
      <WrapperValue>
        <p>{cost}</p>
        <Coin width="40px" height="45px" />
      </WrapperValue>
      <Button
        aria-label="select product"
        onClick={onOpen}
      >
        Redeem Now
      </Button>
    </Overlay>
  );

  return (
    <>
      <Container
        tabIndex="0"
        aria-label={name}
        onKeyDown={onKeyDown}
        index={index}
        ref={containerRef}
      >
        {cost <= user.points ? (
          <BuyBlue />
        ) : (
          <Badge aria-label="not enought points to redeem">
            You need {Math.abs(user.points - cost)} points
            <Coin width="25px" height="23px" />
          </Badge>
        )}

        <WrapperImg>
          <img
            src={img.url}
            srcSet={`${img.hdUrl} 2x, ${img.url} 1x`}
            alt={name}
          />
        </WrapperImg>
        <Divider aria-hidden='true' />
        <WrapperInfo>
          <p>{category}</p>
          <p>{name}</p>
        </WrapperInfo>
        {display && cost <= user.points && showOverlay}
      </Container>
      <Modal
        isOpen={isOpenModal}
        onClose={onClose}
        modalRef={modalRef}
        buttonRef={closeModalBtnRef}
        ariaLabel='redeem product process'
      >
        <RedeemProduct
          data={data}
          redeemProduct={redeemProduct}
          onClose={onClose}
        />
      </Modal>
    </>
  );
};

export default ProductCard;
