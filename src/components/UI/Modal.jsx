import "./Modal.scss";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="modal__backdrop" onClick={props.onClick}></div>;
};

const ModalContent = (props) => {
  return (
    <div className={`modal__content ${props.additionalClassNames}`}>
      {props.children}
    </div>
  );
};

const overlayElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        overlayElement
      )}
      {ReactDOM.createPortal(
        <ModalContent additionalClassNames={props.additionalClassNames}>
          {props.children}
        </ModalContent>,
        overlayElement
      )}
    </>
  );
};

export default Modal;
