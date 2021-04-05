import React from "react";
import { Container } from "./styled";

const Toast = ({top, color, children }) => {
  return <Container top={top} color={color}>{children}</Container>;
};

export default Toast;
