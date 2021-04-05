import React, { useState } from "react";
import Coin from "../../icons/Coin";
import {
  Container,
  Title,
  ImageWrapper,
  CostWrapper,
  ButtonGroup,
  Button,
} from "./styled";

const STATUS = {
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED",
};

const RedeemProduct = ({ data, redeemProduct, onClose }) => {
  const { _id, name, cost, img } = data;
  const [status, setStatus] = useState(STATUS.PENDING);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");

  const handleRedeemProduct = async (productId, cost) => {
    try {
      setIsloading(true);
      await redeemProduct(productId, cost);
      setStatus(STATUS.RESOLVED);
    } catch (err) {
      setError("Error: Failed to redeem product");
      console.error(err);
    } finally {
      setStatus(STATUS.REJECTED);
      setIsloading(false);
    }
  };
  return (
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
        <Button
          primary
          disabled={isLoading}
          onClick={() => handleRedeemProduct(_id, cost)}
        >
          {isLoading ? "Loading" : "Confirm"}
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </ButtonGroup>
    </Container>
  );
};

export default RedeemProduct;
