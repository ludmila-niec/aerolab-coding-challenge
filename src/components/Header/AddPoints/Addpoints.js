import React, { useEffect } from "react";
import Card from "./Card";
import Spinner from "../../Spinner";
import { Wrapper, WrapperLoading } from "./styled";
import { STATUS } from "../../../service/status";

const validPoints = [{ value: 1000 }, { value: 5000 }, { value: 7500 }];

const Addpoints = ({ status, addPoints, resetStatus }) => {
  useEffect(() => {
    if (status === STATUS.RESOLVED) {
      setTimeout(() => {
        resetStatus();
      }, 4000);
    }
  }, [status, resetStatus]);

  if (status === STATUS.PENDING) {
    return (
      <WrapperLoading>
        <Spinner />
        <p>Please wait...</p>
      </WrapperLoading>
    );
  }
  return (
    <Wrapper>
      {validPoints.map((points) => (
        <Card
          key={points.value}
          amount={points.value}
          addPoints={addPoints}
          
        />
      ))}
    </Wrapper>
  );
};

export default Addpoints;
