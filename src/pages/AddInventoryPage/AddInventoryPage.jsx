import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import arrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import errorIcon from "../../assets/icons/error-24px.svg";
import dropDownIcon from "../../assets/icons/arrow_drop_down-24px.svg";
import {
  getWarehousesEndpoint,
  postInventoryEndpoint,
  getInventoriesEndpoint,
} from "../../utils/api";
import "./AddInventoryPage.scss";

const initialValues = {
  itemName: "",
  description: "",
  category: "",
  status: "",
  quantity: 0,
  warehouse: "",
};

export default function AddInventoryPage() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = () => {};

  return (
    <article className="add-inventory">
      <div className="add-inventory__header">
        <img
          className="go-back-arrow"
          src={arrowBackIcon}
          alt="go back button"
          onClick={() => {
            navigate(-1);
          }}
        />
        <h1 className="add-inventory__title">Add New Inventory Item</h1>
      </div>
      <form className="add-inventory-form" onSubmit={handleSubmit}>
        <div className="item-form">
          <h2 className="item-form__title">Item Details</h2>
          <label className="item-form__label">
            Item Name
            <input
              className={
                errors.itemName
                  ? "item-form__input item-form__input--error"
                  : "item-form__input"
              }
              type="text"
              name="itemName"
              placeholder="Item Name"
              value={values.itemName}
              onChange={handleInputChange}
            />
            {errors.itemName && (
              <div className="item-form__error">
                <img
                  className="item-form__error-icon"
                  src={errorIcon}
                  alt="something wrong here"
                />
                <p className="item-form__error-message">
                  This field is required
                </p>
              </div>
            )}
          </label>
          <label className="item-form__label">
            Description
            <textarea
              className={
                errors.itemDescription
                  ? "item-form__input item-form__input--error"
                  : "item-form__input"
              }
              name="itemDescription"
              placeholder="Please enter a brief item description"
              onChange={handleInputChange}
            ></textarea>
            {errors.itemDescription && (
              <div className="item-form__error">
                <img
                  className="item-form__error-icon"
                  src={errorIcon}
                  alt="something wrong here"
                />
                <p className="item-form__error-message">
                  This field is required
                </p>
              </div>
            )}
          </label>
          <label className="item-form__label">
            Category
            <select className="item-form__category" name="category">
              <option value="" disabled selected>
                Please select
              </option>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
              <option value="Health">Health</option>
            </select>
          </label>
        </div>
        <div className="item-availability">
          <h2 className="item-availability__title">Item Availability</h2>
          <label className="item-form__label">Status </label>
          <label>
            <input
              className=""
              type="radio"
              name="status"
              value="In Stock"
              onChange={handleInputChange}
            />
            In stock
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="Out of Stock"
              onChange={handleInputChange}
            />
            Out of stock
          </label>
          {values.status === "In Stock" && (
            <label>
              Quantity
              <input
                className={
                  errors.quantity
                    ? "item-form__input item-form__input--error"
                    : "item-form__input"
                }
                type="number"
                name="quantity"
                value={values.quantity}
                onChange={handleInputChange}
              />
            </label>
          )}
          <label className="item-form__label">
            Warehouse
            <select className="item-form__category" name="category">
              <option value="" disabled selected>
                Please select
              </option>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
              <option value="Health">Health</option>
            </select>
          </label>
        </div>
        <div className="item-form__buttons">
          <button
            className="item-form__buttons-cancel"
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </button>
          <button className="item-form__buttons-submit">+Add Item</button>
        </div>
      </form>
    </article>
  );
}
