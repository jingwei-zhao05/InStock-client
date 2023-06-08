import '../modal/WarehouseModal/WarehouseModal.scss';
import React, { useState } from "react";
import Modal from '../modal/WarehouseModal/WarehouseModal';

const ParentComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Delete Warehouse?</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        {/* <h2>Delete Warehouse?</h2>
        <p>Please confirm that you’d like to delete the 
            Washington from the list of warehouses. 
            You won’t be able to undo this action.</p> */}
      </Modal>
    </div>
  );
};

export default ParentComponent;