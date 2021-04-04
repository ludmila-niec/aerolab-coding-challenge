import ReactDOM from "react-dom";
import React from "react";
import { Backdrop, Container, Header } from "./styled";
import CloseIcon from '../../components/icons/Close'

const Modal = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Backdrop role="dialog" aria-modal>
      <Container>
        <Header>
          <h3>{title}</h3>
          <button onClick={onClose}><CloseIcon /></button>
        </Header>
        {children}
      </Container>
    </Backdrop>,
    document.getElementById("modal")
  );
};
export default Modal;
