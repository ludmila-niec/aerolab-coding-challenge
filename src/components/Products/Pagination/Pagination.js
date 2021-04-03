import React from "react";
import { Container, Text } from "./styled";
import ArrowRight from "../../icons/ArrowRight";

const Pagination = () => {
  return (
    <Container>
      <Text>16 of 32 Products</Text>
      <ArrowRight width='30px' height='30px' />
    </Container>
  );
};

export default Pagination;
