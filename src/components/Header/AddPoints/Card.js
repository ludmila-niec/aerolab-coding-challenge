import React from "react";
import { CardStyled, Button } from "./styled";
import Coin from "../../icons/Coin";

const Card = ({ amount, addPoints}) => {
  return (
    <CardStyled>
      <p>+{amount}</p>
      <p>Points</p>
      <Coin />
      <Button
        aria-label={`add ${amount} points`}
        onClick={() => addPoints(amount)}
      >
        Collect
      </Button>
    </CardStyled>
  );
};

export default Card;
