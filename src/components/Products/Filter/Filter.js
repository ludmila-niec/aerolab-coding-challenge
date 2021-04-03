import React from "react";
import { Container, WrapperFlex, Button } from "./styled";
const FILTERS = ["Most recent", "Lowest Price", "Highest Price"];

const Filter = () => {
  return (
    <Container>
      <label htmlFor="filter">Sort By:</label>
      <WrapperFlex>
        {FILTERS.map((filter) => (
          <Button key={filter} active={filter === FILTERS[0]}>
            {filter}
          </Button>
        ))}
      </WrapperFlex>
    </Container>
  );
};

export default Filter;
