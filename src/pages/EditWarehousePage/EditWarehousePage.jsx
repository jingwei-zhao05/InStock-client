import { useState } from "react";
// import { useParams } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";

export default function EditWarehousePage() {
  //   const { warehouseId } = useParams();

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

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <article className="edit-warehouse">
      <div className="edit-warehouse__header">
        <img className="go-back-arrow" src={arrowBack} alt="go back button" />
        <h1 className="edit-warehouse__title">Edit Warehouse</h1>
      </div>
      <form className="warehose-details-form">
        <h2 className="warehose-details-form__title">Warehouse Details</h2>
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
      </form>
      <form className="contact-details-form">
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
            type="text"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </lable>
      </form>
      <div className="edit-warehouse__buttons">
        <button>Cancel</button>
        <button>+Add Warehouse</button>
      </div>
    </article>
  );
}
