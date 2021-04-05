import React, { useEffect } from "react";
import Card from "./Card";
import { Wrapper } from "./styled";
import { STATUS } from "../Header";

const validPoints = [{ value: 1000 }, { value: 5000 }, { value: 7500 }];

const Addpoints = ({ status, addPoints, resetStatus }) => {
  useEffect(() => {
    if (status === STATUS.RESOLVED) {
      setTimeout(() => {
        resetStatus();
      }, 5000);
    }
  }, [status]);
  return (
    <Wrapper>
      {validPoints.map((points, index) => (
        <Card
          key={index}
          amount={points.value}
          status={status}
          addPoints={addPoints}
        />
      ))}
    </Wrapper>
  );
};

export default Addpoints;
