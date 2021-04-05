import React from "react";
import { CardStyled, Button } from "./styled";
import Coin from "../../icons/Coin";
import Spinner from "../../Spinner";
import { STATUS } from "../Header";

const Card = ({ amount, status, addPoints}) => {
  return (
    <CardStyled>
      <p>+{amount}</p>
      <p>Points</p>
      <Coin />
      {status === STATUS.PENDING ? (
        <Spinner />
      ) : (
        <Button onClick={() => addPoints(amount)}>Collect</Button>
      )}
    </CardStyled>
  );
};

export default Card;
