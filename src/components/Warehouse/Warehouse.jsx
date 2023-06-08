import React, { useState } from "react";
import { Link } from "react-router-dom";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
import RemoveIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import Modal from '../../modal/WarehouseModal/WarehouseModal';
import '../../modal/WarehouseModal/WarehouseModal.scss';
import './Warehouse.scss';

export default function Warehouse({
  id,
  name,
  address,
  city,
  country,
  contactName,
  contactPhone,
  contactEmail,
  fetchWarehouses
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (isDeleted) => {
    setIsModalOpen(false);
    if(isDeleted) {
      fetchWarehouses();
    }
  };


  return (
    <div className="warehouses__box">
      <div className="warehouses__text-box">
        <div className="warehouses__column">
          <div className="warehouses__info-warehouse">
            <h3 className="warehouses__mobile-header">Warehouse</h3>
            <div className="warehouses__chevron">
              <div className="warehouses__chevron-link">
                <Link to={`/warehouses/${id}`} className="warehouses__link-anchor">
                  {name}
                </Link>
                <img
                  className="warehouses__chevron-image"
                  src={Chevron}
                  alt="chevron"
                ></img>
              </div>
            </div>
          </div>
          <div className="warehouses__info-address">
            <h3 className="warehouses__mobile-header">Address</h3>
            <p className="warehouses__text">
              {address}, {city}, {country}
            </p>
          </div>
        </div>
        <div className="warehouses__column-contacts">
          <div className="warehouses__info-contact">
            <h3 className="warehouses__mobile-header">Contact Name</h3>
            <p className="warehouses__contact-text">{contactName}</p>
          </div>
          <div className="warehouses__info-contact-info">
            <h3 className="warehouses__mobile-header">Contact Information</h3>
            <p>{contactPhone}</p>
            <p>{contactEmail}</p>
          </div>
        </div>
      </div>
      <div className="warehouses__actions">
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
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        warehouseId={id}
        warehouseName={name}
      />
    </div>
  );
}