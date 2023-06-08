import "../Warehouse/Warehouse.scss";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
import RemoveIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import React from "react";
import { Link } from "react-router-dom";

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
    <div className="warehouses__box">
      <div className="warehouses__text-box">
        <div className="warehouses__column">
          <div className="warehouses__info-warehouse">
            <h3 class="warehouses__mobile-header">Warehouse</h3>
            <div className="warehouses__chevron">
              <div className="warehouses__chevron-link">
                <Link to={`/warehouses/${id}`} class="warehouses__link-anchor">
                  {name}
                </Link>
                <img
                  class="warehouses__chevron-image"
                  src={Chevron}
                  alt="chevron"
                ></img>
              </div>
            </div>
          </div>
          <div className="warehouses__info-address">
            <h3 class="warehouses__mobile-header">Address</h3>
            <p className="warehouses__text">
              {address}, {city}, {country}
            </p>
          </div>
        </div>
        <div className="warehouses__column-contacts">
          <div className="warehouses__info-contact">
            <h3 class="warehouses__mobile-header">Contact Name</h3>
            <p className="warehouses__contact-text">{contactName}</p>
          </div>
          <div className="warehouses__info-contact-info">
            <h3 class="warehouses__mobile-header">Contact Information</h3>
            <p>{contactPhone}</p>
            <p>{contactEmail}</p>
          </div>
        </div>
      </div>
      <div className="warehouses__actions">
        <Link to="/">
          <img
            src={RemoveIcon}
            alt="remove icon"
            className="warehouses__icon"
          />
        </Link>
        <Link to={`/warehouses/${id}/edit`} class="warehouses__link">
          <img src={EditIcon} alt="edit icon" class="warehouses__icon" />
        </Link>
      </div>
    </div>
  );
}
