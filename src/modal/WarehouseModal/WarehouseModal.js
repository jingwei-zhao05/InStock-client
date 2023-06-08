import React from "react";
import './WarehouseModal.scss';

const Modal = ({ isOpen, onClose, children }) => {
  if(!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <div className="modal__button-container">
            <button className="modal__close" onClick={onClose}> Close</button>
            <button className="modal__delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;