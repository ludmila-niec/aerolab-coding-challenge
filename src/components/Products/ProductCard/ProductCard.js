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

const ProductCard = ({ data }) => {
  const [display, setDisplay] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { name, category, cost, img } = data;
  const { state, actions } = useUser();
  const { user } = state;
  const { redeemProduct } = actions;
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("mouseenter", () => {
      setDisplay(true);
      container.style.transform = "translateY(-5%)";
    });
    container.addEventListener("mouseleave", () => {
      setDisplay(false);
      container.style.transform = "translateY(0)";
    });

    return () => {
      container.removeListener("mouseenter");
      container.removeListener("mouseleave");
    };
  }, []);

  const showOverlay = (
    <Overlay display={display.toString()}>
      <BuyWhite />
      <WrapperValue>
        <p>{cost}</p>
        <Coin width="40px" height="45px" />
      </WrapperValue>
      <Button onClick={() => setIsOpenModal(true)}>Redeem Now</Button>
    </Overlay>
  );

  return (
    <>
      <Container
        ref={containerRef}
      >
        {cost <= user.points ? (
          <BuyBlue />
        ) : (
          <Badge>
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
        <Divider />
        <WrapperInfo>
          <p>{category}</p>
          <p>{name}</p>
        </WrapperInfo>
        {display && cost <= user.points && showOverlay}
      </Container>
      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        title="Great choice!"
      >
        <RedeemProduct
          data={data}
          redeemProduct={redeemProduct}
          onClose={() => setIsOpenModal(false)}
        />
      </Modal>
    </>
  );
};

export default ProductCard;
