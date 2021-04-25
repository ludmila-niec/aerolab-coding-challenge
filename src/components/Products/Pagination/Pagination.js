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
  totalProducts,
}) => {
  return (
    <Container>
      <Text>
        {numberOfProductsShowing} of {totalProducts} Products
      </Text>
      <ButtonWrapper>
        {currentPage < numberOfPages && (
          <Button aria-label="show next page" onClick={handleNextPage}>
            <ArrowRight width="30px" height="30px" />
          </Button>
        )}
        {currentPage > 1 && currentPage <= numberOfPages && (
          <Button aria-label="show previous page" onClick={handlePrevPage}>
            <ArrowLeft width="30px" height="30px" />
          </Button>
        )}
      </ButtonWrapper>
    </Container>
  );
};

export default React.memo(Pagination);
