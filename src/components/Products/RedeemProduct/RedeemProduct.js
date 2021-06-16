import React from "react";
import Coin from "../../icons/Coin";
import Spinner from "../../Spinner";
import {
  Container,
  Title,
  ImageWrapper,
  Image,
  CostWrapper,
  ButtonGroup,
  Button,
} from "./styled";
import { useHistory } from "react-router-dom";
import { STATUS } from "../../../service/status";

const RedeemProduct = ({ data, status, handleRedeemProduct, onClose }) => {
  const { name, cost, img } = data;
  const history = useHistory();

  // close modal and redirect to history page
  const handleRedirectToHistory = () => {
    onClose();
    history.push("/history");
  };

  if (status === STATUS.REJECTED) {
    return (
      <>
        <Container>
          <Title>Something went wrong</Title>
        </Container>
      </>
    );
  }
  if (status === STATUS.RESOLVED) {
    return (
      <>
        <Container>
          <Title>Congratulations! You've redeemed "{name}"</Title>
          <ImageWrapper>
            <picture>
              <source
                type="image/png"
                srcSet={img.hdUrl}
                media="(min-width:960px)"
              />
              <source type="image/png" srcSet={img.url} />
              <Image src={img.url} alt={name} width="200" height="250" />
            </picture>
          </ImageWrapper>
          <ButtonGroup>
            <Button
              className="btn__history"
              primary
              onClick={handleRedirectToHistory}
            >
              Review History
            </Button>
          </ButtonGroup>
        </Container>
      </>
    );
  }
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
        {status === STATUS.PENDING ? (
          <Spinner />
        ) : (
          <>
            <Button
              aria-label="confirm and redeem product"
              primary
              onClick={handleRedeemProduct}
            >
              Confirm
            </Button>
            <Button aria-label="cancel redeem" onClick={onClose}>
              Cancel
            </Button>
          </>
        )}
      </ButtonGroup>
    </Container>
  );
};

export default RedeemProduct;
