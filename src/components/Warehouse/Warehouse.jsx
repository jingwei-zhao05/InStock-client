<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
import RemoveIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import Modal from '../../modal/WarehouseModal/WarehouseModal';
import '../../modal/WarehouseModal/WarehouseModal.scss';
import './Warehouse.scss';
=======
import "../Warehouse/Warehouse.scss";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
import RemoveIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import React from "react";
import { Link, Navigate } from "react-router-dom";
>>>>>>> develop

export default function Warehouse({
  id,
  name,
  address,
  city,
  country,
  contactName,
  contactPhone,
  contactEmail,
}) {
<<<<<<< HEAD
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

=======
>>>>>>> develop
  return (
    <div className="warehouses__box">
      <div className="warehouses__text-box">
        <div className="warehouses__column">
          <div className="warehouses__info-warehouse">
<<<<<<< HEAD
            <h3 className="warehouses__mobile-header">Warehouse</h3>
            <div className="warehouses__chevron">
              <div className="warehouses__chevron-link">
                <Link to={`/warehouses/${id}`} className="warehouses__link-anchor">
                  {name}
                </Link>
                <img
                  className="warehouses__chevron-image"
=======
            <h3 class="warehouses__mobile-header">Warehouse</h3>
            <div className="warehouses__chevron">
              <div className="warehouses__chevron-link">
                <Link to={`/warehouses/${id}`} class="warehouses__link-anchor">
                  {name}
                </Link>
                <img
                  class="warehouses__chevron-image"
>>>>>>> develop
                  src={Chevron}
                  alt="chevron"
                ></img>
              </div>
            </div>
          </div>
          <div className="warehouses__info-address">
<<<<<<< HEAD
            <h3 className="warehouses__mobile-header">Address</h3>
=======
            <h3 class="warehouses__mobile-header">Address</h3>
>>>>>>> develop
            <p className="warehouses__text">
              {address}, {city}, {country}
            </p>
          </div>
        </div>
        <div className="warehouses__column-contacts">
          <div className="warehouses__info-contact">
<<<<<<< HEAD
            <h3 className="warehouses__mobile-header">Contact Name</h3>
            <p className="warehouses__contact-text">{contactName}</p>
          </div>
          <div className="warehouses__info-contact-info">
            <h3 className="warehouses__mobile-header">Contact Information</h3>
=======
            <h3 class="warehouses__mobile-header">Contact Name</h3>
            <p className="warehouses__contact-text">{contactName}</p>
          </div>
          <div className="warehouses__info-contact-info">
            <h3 class="warehouses__mobile-header">Contact Information</h3>
>>>>>>> develop
            <p>{contactPhone}</p>
            <p>{contactEmail}</p>
          </div>
        </div>
      </div>
      <div className="warehouses__actions">
<<<<<<< HEAD
        <img
          src={RemoveIcon}
          alt="remove icon"
          className="warehouses__icon"
          onClick={handleOpenModal}
        />
        <Link to="/" className="warehouses__link">
          <img src={EditIcon} alt="edit icon" className="warehouses__icon" />
        </Link>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Delete {name} Warehouse?</h2>
        <p>Please confirm that you'd like to delete the {name} from the list of warehouses. You won't be able to undo this action.</p>
      </Modal>
=======
        <Link to="/">
          <img
            src={RemoveIcon}
            alt="remove icon"
            className="warehouses__icon"
          />
        </Link>
        <Link to="/" class="warehouses__link">
          <img src={EditIcon} alt="edit icon" class="warehouses__icon" />
        </Link>
      </div>
>>>>>>> develop
    </div>
  );
}
