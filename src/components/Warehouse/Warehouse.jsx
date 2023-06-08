import "../Warehouse/Warehouse.scss";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
import RemoveIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import React from "react";
import { Link, Navigate } from "react-router-dom";

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
  return (
    <div className="warehouseList__box">
      {/* <div className="warehouseList__text-box"> */}
      {/* <div className="warehouseList__column"> */}
      <div className="warehouseList__info-warehouse">
        <h3 class="warehouseList__mobile-header">Warehouse</h3>
        <div className="warehouseList__chevron">
          <div className="warehouseList__chevron-link">
            <Link to={`/warehouses/${id}`} class="warehouseList__link-anchor">
              {name}
            </Link>
            <img
              class="warehouseList__chevron-image"
              src={Chevron}
              alt="chevron"
            ></img>
          </div>
        </div>
      </div>
      <div className="warehouseList__info-address">
        <h3 class="warehouseList__mobile-header">Address</h3>
        <p className="warehouseList__text">
          {address}, {city}, {country}
        </p>
      </div>
      {/* </div> */}
      {/* <div className="warehouseList__column-contacts"> */}
      <div className="warehouseList__info-contact">
        <h3 class="warehouseList__mobile-header">Contact Name</h3>
        <p className="warehouseList__contact-text">{contactName}</p>
      </div>
      <div className="warehouseList__info-contact-info">
        <h3 class="warehouseList__mobile-header">Contact Information</h3>
        <p>{contactPhone}</p>
        <p>{contactEmail}</p>
      </div>
      {/* </div> */}
      {/* </div> */}
      <div className="warehouseList__actions">
        <Link to="/">
          <img
            src={RemoveIcon}
            alt="remove icon"
            className="warehouseList__icon"
          />
        </Link>
        <Link to={`/warehouses/${id}/edit`} class="warehouseList__link">
          <img src={EditIcon} alt="edit icon" class="warehouseList__icon" />
        </Link>
      </div>
    </div>
  );
}
