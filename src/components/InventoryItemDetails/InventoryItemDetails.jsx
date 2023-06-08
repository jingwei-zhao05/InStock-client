import "../InventoryItemDetails/InventoryItemDetails.scss";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Edit from "../../assets/images/icons/edit-24px.svg";
import ArrowBack from "../../assets/images/icons/arrow_back-24px.svg";

function InventoryItemDetails() {
  return (
    <section className="item-details">
      <div className="item-details__header">
        <img
          className="item-details__arrow-icon"
          src={ArrowBack}
          alt="arrow back"
        />
        <h1 className="item-details__title">Television</h1>
        <Link
          to="/warehouses/:id/edit"
          className="item-details__edit-container"
        >
          <button className="item-details__header-button">
            <img
              className="item-details__header-button-icon"
              src={Edit}
              alt="edit"
            />
            <p className="item-details__header-button-text">Edit</p>
          </button>
        </Link>
      </div>
      <div className="item-details__container">
        <div className="item-details__description">
          <h3 className="item-details__description-header">
            ITEM DESCRIPTION:
          </h3>
          <p className="item-details__description-description">
            This 50", 4K LED TV provides a crystal-clear picture and vivid
            colors.
          </p>
          <h3 className="item-details__description-header">CATEGORY:</h3>
          <p className="item-details__description-description">Electronics</p>
        </div>
        <div className="item-details__line"></div>
        <div className="item-details__availability">
          <div className="item-details__availability-amount">
            <div className="item-details__availability-amount-status">
              <h3 className="item-details__availability-header">STATUS:</h3>
              <p className="item-details__availability-instock">IN STOCK</p>
              <p className="item-details__availability-outstock">
                OUT OF STOCK
              </p>
            </div>
            <div className="item-details__availability-amount-quantity">
              <h3 className="item-details__availability-header">QUANTITY:</h3>
              <p className="item-details__availability-description">500</p>
            </div>
          </div>
          <div className="item-details__availability-warehouse">
            <h3 className="item-details__availability-header">WAREHOUSE:</h3>
            <p className="item-details__availability-description">Manhattan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InventoryItemDetails;
