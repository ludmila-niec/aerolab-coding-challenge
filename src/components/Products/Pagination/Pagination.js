import React from "react";
import { Container, Text, ButtonWrapper, Button } from "./styled";
import ArrowRight from "../../icons/ArrowRight";
import ArrowLeft from "../../icons/ArrowLeft";

const Pagination = ({
  handleNextPage,
  handlePrevPage,
  numberOfPages,
  currentPage,
  numberOfProductsShowing,
}) => {
  return (
    <Container>
      <Text>{numberOfProductsShowing} of 32 Products</Text>
      <ButtonWrapper>
        {currentPage < numberOfPages && (
          <Button onClick={handleNextPage}>
            <ArrowRight width="30px" height="30px" />
          </Button>
        )}
        {currentPage > 1 && currentPage <= numberOfPages && (
          <Button onClick={handlePrevPage}>
            <ArrowLeft width="30px" height="30px" />
          </Button>
        )}
      </ButtonWrapper>
    </Container>
  );
};

export default Pagination;
