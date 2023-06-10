import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import "./WarehouseDetails.scss";
import axios from "axios";

function WarehouseDetails() {
  const { id } = useParams();
  const [warehouse, setWarehouse] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouses/${id}`)
      .then((response) => {
        setWarehouse(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!warehouse) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details">
      <div className="details__header-container">
        <div className="details__title-arrow">
          <img
            src={arrow}
            alt="Back"
            className="details__arrow"
            onClick={() => {
              navigate(-1);
            }}
          />
          <h1 className="details__title">{warehouse.warehouse_name}</h1>
        </div>
        <Link to={`/warehouses/${id}/edit`}>
          <button className="details__button"></button>
        </Link>
        <Link to={`/warehouses/${id}/edit`}>
          <button className="details__tablet-button">Edit</button>
        </Link>
      </div>
      <div className="details__info-container">
        <div className="details__location-container">
          <p className="details__subheader">WAREHOUSE ADDRESS:</p>
          <div className="details__inner-container">
            <p className="details__location">{warehouse.address}, </p>
            <p className="details__location">
              {warehouse.city}, {warehouse.country}
            </p>
          </div>
        </div>
        <div className="details__contact-container">
          <div className="details__contact-box">
            <p className="details__subheader">CONTACT NAME:</p>
            <p className="details__contact">{warehouse.contact_name}</p>
            <p className="details__contact">{warehouse.contact_position}</p>
          </div>
          <div className="details__contact-holder">
            <p className="details__subheader">CONTACT INFO:</p>
            <p className="details__contact">{warehouse.contact_phone}</p>
            <p className="details__contact">{warehouse.contact_email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarehouseDetails;
