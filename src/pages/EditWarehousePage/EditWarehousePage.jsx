import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import arrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import errorIcon from "../../assets/icons/error-24px.svg";
import {
  getWarehousesEndpoint,
  getWarehouseDetailEndpoint,
  putWarehouseEndpoint,
} from "../../utils/api";
import "./EditWarehousePage.scss";

const initialValues = {
  warehouseName: "",
  address: "",
  city: "",
  country: "",
  contactName: "",
  position: "",
  phoneNum: "",
  email: "",
};

export default function EditWarehousePage() {
  const { id: warehouseId } = useParams();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(getWarehouseDetailEndpoint(warehouseId))
      .then((response) => {
        setValues({
          warehouseName: response.data.warehouse_name,
          address: response.data.address,
          city: response.data.city,
          country: response.data.country,
          contactName: response.data.contact_name,
          position: response.data.contact_position,
          phoneNum: response.data.contact_phone,
          email: response.data.contact_email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [warehouseId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCancelClick = () => {
    navigate(`/warehouses/${warehouseId}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (values.warehouseName.trim() === "") {
      validationErrors.warehouseName = "Warehouse name is required";
    }
    if (values.address.trim() === "") {
      validationErrors.address = "Address is required";
    }
    if (values.city.trim() === "") {
      validationErrors.city = "City is required";
    }
    if (values.country.trim() === "") {
      validationErrors.country = "Country is required";
    }
    if (values.contactName.trim() === "") {
      validationErrors.contactName = "Contact name is required";
    }
    if (values.position.trim() === "") {
      validationErrors.position = "Position is required";
    }
    if (values.phoneNum.trim() === "") {
      validationErrors.phoneNum = "Phone number is required";
    }
    if (values.email.trim() === "") {
      validationErrors.email = "Email is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      axios
        .put(putWarehouseEndpoint(warehouseId), {
          id: warehouseId,
          warehouse_name: values.warehouseName,
          address: values.address,
          city: values.city,
          country: values.country,
          contact_name: values.contactName,
          contact_position: values.position,
          contact_phone: values.phoneNum,
          contact_email: values.email,
        })
        .then(() => {
          navigate(`/warehouses/${warehouseId}`);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <article className="edit-warehouse">
      <div className="edit-warehouse__header">
        <img
          className="go-back-arrow"
          src={arrowBackIcon}
          alt="go back button"
        />
        <h1 className="edit-warehouse__title">Edit Warehouse</h1>
      </div>
      <form className="edit-warehouse-form" onSubmit={handleSubmit}>
        <div className="warehouse-form">
          <h2 className="warehouse-form__title">Warehouse Details</h2>
          <lable className="warehouse-form__lable" htmlFor="warehouseName">
            Warehouse Name
            <input
              className={
                errors.warehouseName
                  ? "warehouse-form__input warehouse-form__input--error"
                  : "warehouse-form__input"
              }
              type="text"
              name="warehouseName"
              value={values.warehouseName}
              onChange={handleInputChange}
            />
            {errors.warehouseName && (
              <div className="warehouse-form__error">
                <img
                  className="warehouse-form__error-icon"
                  src={errorIcon}
                  alt="something wrong here"
                />
                <p className="warehouse-form__error-message">
                  This field is required
                </p>
              </div>
            )}
          </lable>
          <lable className="warehouse-form__lable" htmlFor="address">
            Street Address
            <input
              className={
                errors.address
                  ? "warehouse-form__input warehouse-form__input--error"
                  : "warehouse-form__input"
              }
              type="text"
              name="address"
              value={values.address}
              onChange={handleInputChange}
            />
            {errors.address && (
              <div className="warehouse-form__error">
                <img
                  className="warehouse-form__error-icon"
                  src={errorIcon}
                  alt="something wrong here"
                />
                <p className="warehouse-form__error-message">
                  This field is required
                </p>
              </div>
            )}
          </lable>
          <lable className="warehouse-form__lable" htmlFor="city">
            City
            <input
              className={
                errors.city
                  ? "warehouse-form__input warehouse-form__input--error"
                  : "warehouse-form__input"
              }
              type="text"
              name="city"
              value={values.city}
              onChange={handleInputChange}
            />
            {errors.city && (
              <div className="warehouse-form__error">
                <img
                  className="warehouse-form__error-icon"
                  src={errorIcon}
                  alt="something wrong here"
                />
                <p className="warehouse-form__error-message">
                  This field is required
                </p>
              </div>
            )}
          </lable>
          <lable className="warehouse-form__lable" htmlFor="country">
            Country
            <input
              className={
                errors.country
                  ? "warehouse-form__input warehouse-form__input--error"
                  : "warehouse-form__input"
              }
              type="text"
              name="country"
              value={values.country}
              onChange={handleInputChange}
            />
            {errors.country && (
              <div className="warehouse-form__error">
                <img
                  className="warehouse-form__error-icon"
                  src={errorIcon}
                  alt="something wrong here"
                />
                <p className="warehouse-form__error-message">
                  This field is required
                </p>
              </div>
            )}
          </lable>
        </div>
        <div className="warehouse-form">
          <h2 className="warehouse-form__title">Contact Details</h2>
          <lable className="warehouse-form__lable" htmlFor="contactName">
            Contact Name
            <input
              className={
                errors.contactName
                  ? "warehouse-form__input warehouse-form__input--error"
                  : "warehouse-form__input"
              }
              type="text"
              name="contactName"
              value={values.contactName}
              onChange={handleInputChange}
            />
            {errors.contactName && (
              <div className="warehouse-form__error">
                <img
                  className="warehouse-form__error-icon"
                  src={errorIcon}
                  alt="something wrong here"
                />
                <p className="warehouse-form__error-message">
                  This field is required
                </p>
              </div>
            )}
          </lable>
          <lable className="warehouse-form__lable" htmlFor="position">
            Position
            <input
              className={
                errors.position
                  ? "warehouse-form__input warehouse-form__input--error"
                  : "warehouse-form__input"
              }
              type="text"
              name="position"
              value={values.position}
              onChange={handleInputChange}
            />
            {errors.position && (
              <div className="warehouse-form__error">
                <img
                  className="warehouse-form__error-icon"
                  src={errorIcon}
                  alt="something wrong here"
                />
                <p className="warehouse-form__error-message">
                  This field is required
                </p>
              </div>
            )}
          </lable>
          <lable className="warehouse-form__lable" htmlFor="phoneNum">
            Phone Number
            <input
              className={
                errors.phoneNum
                  ? "warehouse-form__input warehouse-form__input--error"
                  : "warehouse-form__input"
              }
              type="text"
              name="phoneNum"
              value={values.phoneNum}
              onChange={handleInputChange}
            />
            {errors.phoneNum && (
              <div className="warehouse-form__error">
                <img
                  className="warehouse-form__error-icon"
                  src={errorIcon}
                  alt="something wrong here"
                />
                <p className="warehouse-form__error-message">
                  This field is required
                </p>
              </div>
            )}
          </lable>
          <lable className="warehouse-form__lable" htmlFor="email">
            Email
            <input
              className={
                errors.email
                  ? "warehouse-form__input warehouse-form__input--error"
                  : "warehouse-form__input"
              }
              type="email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <div className="warehouse-form__error">
                <img
                  className="warehouse-form__error-icon"
                  src={errorIcon}
                  alt="something wrong here"
                />
                <p className="warehouse-form__error-message">
                  This field is required
                </p>
              </div>
            )}
          </lable>
        </div>
        <div className="edit-warehouse__buttons">
          <button
            className="edit-warehouse__buttons-cancel"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button className="edit-warehouse__buttons-submit">Save</button>
        </div>
      </form>
    </article>
  );
}
