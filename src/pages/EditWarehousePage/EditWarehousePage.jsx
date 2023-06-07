import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import {
  getWarehousesEndpoint,
  getWarehouseDetailEndpoint,
  postWarehouseEndpoint,
  putWarehouseEndpoint,
  deleteWarehouseEndpoint,
} from "../../utils/api";

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
  }, []);

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

    if (
      !!values.warehouseName &&
      !!values.address &&
      !!values.city &&
      !!values.country &&
      !!values.contactName &&
      !!values.position &&
      !!values.phoneNum &&
      !!values.email
    ) {
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
        .then((response) => {
          navigate(`/warehouses/${warehouseId}`);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("Need type in form field");
    }
  };

  return (
    <article className="edit-warehouse">
      <div className="edit-warehouse__header">
        <img className="go-back-arrow" src={arrowBack} alt="go back button" />
        <h1 className="edit-warehouse__title">Edit Warehouse</h1>
      </div>
      <form className="edit-warehouse-form" onSubmit={handleSubmit}>
        <div className="warehouse-details-form">
          <h2 className="warehouse-details-form__title">Warehouse Details</h2>
          <lable>
            Warehouse Name
            <input
              className="name"
              type="text"
              name="warehouseName"
              value={values.warehouseName}
              onChange={handleInputChange}
            />
          </lable>
          <lable>
            Street Address
            <input
              className="address"
              type="text"
              name="address"
              value={values.address}
              onChange={handleInputChange}
            />
          </lable>
          <lable>
            City
            <input
              className="city"
              type="text"
              name="city"
              value={values.city}
              onChange={handleInputChange}
            />
          </lable>
          <lable>
            Country
            <input
              className="country"
              type="text"
              name="country"
              value={values.country}
              onChange={handleInputChange}
            />
          </lable>
        </div>
        <div className="contact-details-form">
          <h2 className="contact-details-form__title">Contact Details</h2>
          <lable>
            Contact Name
            <input
              className="contactName"
              type="text"
              name="contactName"
              value={values.contactName}
              onChange={handleInputChange}
            />
          </lable>
          <lable>
            Position
            <input
              className="position"
              type="text"
              name="position"
              value={values.position}
              onChange={handleInputChange}
            />
          </lable>
          <lable>
            Phone Number
            <input
              className="phone num"
              type="text"
              name="phoneNum"
              value={values.phoneNum}
              onChange={handleInputChange}
            />
          </lable>
          <lable>
            Email
            <input
              className="email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
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
