import React from "react";
import { Container, WrapperFlex, Label, Button } from "./styled";
import { TYPES } from "../Products";

const Filter = ({ filterApplyed, handleFilterSelected }) => {
  const filterBtns = [
    { name: "Most recent", type: TYPES.MOST_RECENT },
    { name: "Lowest price", type: TYPES.LOWEST_PRICE },
    {
      name: "Highest price",
      type: TYPES.HIGHEST_PRICE,
    },
  ];
  return (
    <Container>
      <Label htmlFor="filter">Sort By:</Label>
      <WrapperFlex>
        {filterBtns.map((filter) => (
          <Button
            aria-label={`sort products by ${filter.name}`}
            key={filter.type}
            active={filter.type === filterApplyed}
            onClick={() => handleFilterSelected(filter.type)}
          >
            {filter.name}
          </Button>
        ))}
      </WrapperFlex>
    </Container>
  );
};

export default Filter;
