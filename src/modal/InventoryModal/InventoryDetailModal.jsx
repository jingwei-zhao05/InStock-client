import React from "react";
import close from '../../assets/icons/close-24px.svg';
import axios from "axios";

const Modal = ({ isOpen, onClose, itemDetailsName, itemDetailsId, fetchInventories }) => {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/inventories/${itemDetailsId}`)
      .then(() => {
        onClose(true);
        fetchInventories(); // Call fetchInventories after successful delete
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!isOpen) {
    return null;
  }
  console.log(itemDetailsId);

  return (
    <div className="modal">
      <div className="modal-content">
        <img
          src={close}
          alt="X"
          className="modal__x"
          onClick={() => {
            onClose(false);
          }}
        />
        <h2>Delete {itemDetailsName} Inventory Item?</h2>
        <p className="modal__text">
          Please confirm that you'd like to delete the {itemDetailsName} from
          the list of inventories. You won't be able to undo this action.
        </p>
        <div className="modal__button-container">
          <button className="modal__close" onClick={() => onClose(false)}>
            Close
          </button>
          <button className="modal__delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
