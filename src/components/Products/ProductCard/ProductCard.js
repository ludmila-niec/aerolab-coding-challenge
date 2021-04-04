import React, { useState } from "react";
import BuyWhite from "../../icons/BuyWhite";
import BuyBlue from "../../icons/BuyBlue";
import Coin from "../../icons/Coin";
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
import AmazonIng from "../../../assets/AmazonEcho-x1.png";

const ProductCard = () => {
  const [display, setDisplay] = useState(false);

  const showOverlay = (
    <Overlay display={display.toString()}>
      <BuyWhite />
      <WrapperValue>
        <p>12.000</p>
        <Coin width="40px" height="45px" />
      </WrapperValue>
      <Button>Redeem Now</Button>
    </Overlay>
  );
  return (
    <>
      <Container
        onMouseEnter={() => setDisplay(true)}
        onMouseLeave={() => setDisplay(false)}
      >
        <BuyBlue />
        {/* <Badge>You need 1000 <Coin width='25px' height='23px' /></Badge> */}
        <WrapperImg>
          <img src={AmazonIng} alt="product img" />
        </WrapperImg>
        <Divider />
        <WrapperInfo>
          <p>Smart home</p>
          <p>Amazon echo</p>
        </WrapperInfo>
        {display && showOverlay}
      </Container>
      {/* <Overlay display={display}>
        <BuyWhite />
        <WrapperValue>
          <p>12.000</p>
          <Coin />
        </WrapperValue>
        <Button>Redeem</Button>
      </Overlay> */}
    </>
  );
};

export default ProductCard;
