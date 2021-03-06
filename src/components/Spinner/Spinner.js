import React from "react";
import { Container, Ring } from "./styled";

const Spinner = ({ width, height }) => {
  return (
    <Container aria-label='Loading'>
      <Ring width={width} height={height} />
    </Container>
  );
};

export default Spinner;
