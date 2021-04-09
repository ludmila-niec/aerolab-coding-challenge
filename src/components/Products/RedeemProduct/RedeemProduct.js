import React, { useState } from "react";
import Coin from "../../icons/Coin";
import Spinner from "../../Spinner";
import Toast from "../../Toast";
import {
  Container,
  Title,
  ImageWrapper,
  Image,
  CostWrapper,
  ButtonGroup,
  Button,
} from "./styled";

const STATUS = {
  IDLE: "IDLE",
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED",
};

const RedeemProduct = ({ data, redeemProduct, onClose }) => {
  const { _id, name, cost, img } = data;
  const [status, setStatus] = useState(STATUS.IDLE);

  const handleRedeemProduct = async (productId, cost) => {
    try {
      setStatus(STATUS.PENDING);
      await redeemProduct(productId, cost);
      setStatus(STATUS.RESOLVED);
    } catch(error) {
      setStatus(STATUS.REJECTED);
    }
  };

  

  if (status === STATUS.REJECTED) {
    return (
      <Container>
        <Title>Something went wrong</Title>
        <Toast top="8vh" color="error">
          Error: Fail to redeem product
        </Toast>
      </Container>
    );
  }
  if (status === STATUS.RESOLVED) {
    return (
      <Container>
        <Title>Congratulations! You've redeem "{name}"</Title>
        <ImageWrapper>
          <Image src={img.url} alt={name} />
        </ImageWrapper>
        <Toast top="8vh" color="success">
          You've redeem the product successfully
        </Toast>
      </Container>
    );
  }
  return (
    <>
      <Container>
        <Title>Are you sure you want to redeem "{name}"?</Title>
        <ImageWrapper>
          <img src={img.url} alt={name} />
        </ImageWrapper>
        <CostWrapper>
          <p>- {cost} Points</p>
          <Coin />
        </CostWrapper>
        <ButtonGroup>
          {status === STATUS.PENDING ? (
            <Spinner />
          ) : (
            <>
              <Button primary onClick={() => handleRedeemProduct(_id, cost)}>
                Confirm
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </>
          )}
        </ButtonGroup>
      </Container>
    </>
  );
};

export default RedeemProduct;
