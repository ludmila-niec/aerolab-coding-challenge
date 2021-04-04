import React from "react";
import Card from "./Card";
import { Wrapper } from "./styled";


const validPoints = [{ value: 1000 }, { value: 5000 }, { value: 7500 }];

const Addpoints = ({addPoints}) => {
  return (
    <Wrapper>
      {validPoints.map((points, index) => (
        <Card key={index} amount={points.value} addPoints={addPoints} />
      ))}
    </Wrapper>
  );
};

export default Addpoints;
