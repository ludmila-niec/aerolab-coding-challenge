import React from "react";
import { Container, WrapperFlex, Label, Button } from "./styled";
import { TYPES } from "../Products";

const Filter = ({ filterApplyed, actions }) => {
  const { showMostRecent, showLowestPrice, showHighestPrice } = actions;
  const filterBtns = [
    { name: "Most Recent", type: TYPES.MOST_RECENT, action: showMostRecent },
    { name: "Lowest Price", type: TYPES.LOWEST_PRICE, action: showLowestPrice },
    {
      name: "Highest Price",
      type: TYPES.HIGHEST_PRICE,
      action: showHighestPrice,
    },
  ];
  return (
    <Container>
      <Label htmlFor="filter">Sort By:</Label>
      <WrapperFlex>
        {filterBtns.map((filter) => (
          <Button
            key={filter.type}
            active={filter.type === filterApplyed}
            onClick={() => filter.action(filter.type)}
          >
            {filter.name}
          </Button>
        ))}
      </WrapperFlex>
    </Container>
  );
};

export default Filter;
