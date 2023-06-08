import React from "react";
import './WarehouseModal.scss';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <h2>Delete Warehouse?</h2>
        <p>Please confirm that you’d like to delete the 
            Washington from the list of warehouses. 
            You won’t be able to undo this action.</p>
        <div className="modal__button-container">
            <button className="modal__close" onClick={onClose}> Close</button>
            <button className="modal__delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;