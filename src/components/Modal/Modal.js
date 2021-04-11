import ReactDOM from "react-dom";
import React from "react";
import { Backdrop, Container, Header } from "./styled";
import CloseIcon from "../../components/icons/Close";

const Modal = ({
  title,
  ariaLabel,
  role = "dialog",
  children,
  modalRef,
  buttonRef,
  onClose,
  isOpen,
}) => {


  // close when click outside of the modal
  const onClickAway = (e) => {
    if (modalRef.current && modalRef.current.contains(e.target)) return;
    onClose()
  };
  const onKeyDown = (e) => {
    return e.keyCode === 27 && onClose();
   };

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Backdrop
      role={role}
      aria-modal="true"
      aria-label={ariaLabel}
      onClick={onClickAway}
      onKeyDown={onKeyDown}
    >
      <Container ref={modalRef}>
        <Header>
          <h3>{title}</h3>
          <button ref={buttonRef} onClick={onClose}>
            <CloseIcon />
          </button>
        </Header>
        {children}
      </Container>
    </Backdrop>,
    document.getElementById("modal")
  );
};
export default Modal;
