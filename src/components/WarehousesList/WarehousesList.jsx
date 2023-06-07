import "../WarehousesList/WarehousesList.scss";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
import RemoveIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import React from "react";
import { Link } from "react-router-dom";

function WarehousesList() {
  return (
    <section className="warehouses">
      <div className="warehouses__box">
        <div className="warehouses__text-box">
          <div className="warehouses__column">
            <div className="warehouses__info-short">
              <h3 class="warehouses__mobile-header">Warehouse</h3>
              <div className="warehouses__chevron">
                <div className="warehouses__chevron-link">
                  <Link to="/" class="warehouses__link-anchor">
                    Manhattan
                  </Link>
                  <img
                    class="warehouses__chevron-image"
                    src={Chevron}
                    alt="chevron"
                  ></img>
                </div>
              </div>
            </div>
            <div className="warehouses__info-long">
              <h3 class="warehouses__mobile-header">Address</h3>
              <p className="warehouses__text">503 Broadway, New York, USA</p>
            </div>
          </div>
          <div className="warehouses__column">
            <div className="warehouses__info-short">
              <h3 class="warehouses__mobile-header">Contact Name</h3>
              <p className="warehouses__contact-text">Parmin Aujla</p>
            </div>
            <div className="warehouses__info-long">
              <h3 class="warehouses__mobile-header">Contact Information</h3>
              <p>+1 (646) 123-1234</p>
              <p>paujla@instock.com</p>
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
          <Link to="/" class="warehouses__link">
            <img src={EditIcon} alt="edit icon" class="warehouses__icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WarehousesList;
