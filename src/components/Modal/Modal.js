import ReactDOM from "react-dom";
import React, {useEffect} from "react";
import { Backdrop, Container, Header } from "./styled";
import CloseIcon from "../../components/icons/Close";
import { STATUS } from "../../service/status";

const Modal = ({
  title,
  ariaLabel,
  role = "dialog",
  children,
  modalRef,
  buttonRef,
  onClose,
  isOpen,
  status,
  toast
}) => {
  const {toastSuccess, toastError} = toast
   // avoid scrolling the page when modal is open
  useEffect(() =>{
    const htmlDOM = document.querySelector("html");
    if (isOpen){
      (htmlDOM.style.overflow = "hidden");
      buttonRef.current.focus();
    }else{
      htmlDOM.style.overflow = "visible";
    }
  },[isOpen, buttonRef])

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
        {status === STATUS.RESOLVED && toastSuccess}
        {status === STATUS.REJECTED && toastError}
    </Backdrop>,
    document.getElementById("modal")
  );
};
export default Modal;
