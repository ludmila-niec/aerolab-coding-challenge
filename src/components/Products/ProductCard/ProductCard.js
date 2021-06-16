import React, { useState, useEffect, useRef } from "react";
import RedeemProduct from "../RedeemProduct";
import Toast from "../../Toast";
import Modal from "../../Modal";
import BuyWhite from "../../icons/BuyWhite";
import BuyBlue from "../../icons/BuyBlue";
import Coin from "../../icons/Coin";
import { useUser } from "../../../context/user/UserContext";
import { STATUS } from "../../../service/status";
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
  // redeem status
  const [status, setStatus] = useState(STATUS.IDLE);
  // modal
  const [isOpenModal, setIsOpenModal] = useState(false);
  // user context
  const {
    state: { user },
    actions: { redeemProduct },
  } = useUser();
  // refs
  const containerRef = useRef(null);
  const modalRef = useRef(null);
  const closeModalBtnRef = useRef(null);
  const { _id, name, category, cost, img } = data;

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

  // redeem product handler
  const handleRedeemProduct = async () => {
    try {
      setStatus(STATUS.PENDING);
      await redeemProduct(_id, cost);
      setStatus(STATUS.RESOLVED);
    } catch (error) {
      setStatus(STATUS.REJECTED);
    }
  };

  // reset status to redeem product again
  useEffect(() => {
    if (!isOpenModal && status === STATUS.RESOLVED) {
      setStatus(STATUS.IDLE);
    }
  }, [isOpenModal, status]);

  // when modal is open, focus the 'close' button
  useEffect(() => {
    if (isOpenModal) closeModalBtnRef.current.focus();
  }, [isOpenModal]);

  // MODAL HANDLERS //
  const onOpen = () => {
    setIsOpenModal(true);
    // toggleScrollLock();
  };

  const onClose = () => {
    setIsOpenModal(false);
    // toggleScrollLock();
  };

  // keyboard navigation for products
  const onKeyDown = (e) => {
    // enter
    if (e.keyCode === 13) setDisplay(true);
    // esc
    if (e.keyCode === 27) setDisplay(false);
  };

  const showOverlay = (
    <Overlay display={display.toString()}>
      <BuyWhite />
      <WrapperValue>
        <p>{cost}</p>
        <Coin width="40px" height="45px" />
      </WrapperValue>
      <Button aria-label="select product" onClick={onOpen}>
        Redeem Now
      </Button>
    </Overlay>
  );

  const toast = {
    toastSuccess: (
      <Toast color="success">You've redeemed the product successfully</Toast>
    ),
    toastError: <Toast color="error">Error: Fail to redeem product</Toast>,
  };

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
        {/* en el futuro se puede agregar source tag con otro formato de imagen + se corregió render de la imagen correcta segun el tamaño del viewport*/}
        <WrapperImg>
          <picture>
            <source
              type="image/png"
              srcSet={img.hdUrl}
              media="(min-width:960px)"
            />
            <source type="image/png" srcSet={img.url} />
            <img
              src={img.url}
              alt={name}
              loading="lazy"
              width="200"
              height="250"
            />
          </picture>
        </WrapperImg>
        <Divider aria-hidden="true" />
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
        ariaLabel="redeem product process"
        status={status}
        toast={toast}
      >
        <RedeemProduct
          data={data}
          status={status}
          handleRedeemProduct={handleRedeemProduct}
          onClose={onClose}
        />
      </Modal>
    </>
  );
};

export default ProductCard;
