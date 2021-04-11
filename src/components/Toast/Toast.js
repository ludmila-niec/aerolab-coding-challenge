import React from "react";
import { Container } from "./styled";

const Toast = ({top, color, children }) => {
  return <Container top={top} color={color} role='alert' >{children}</Container>;
};

export default Toast;
