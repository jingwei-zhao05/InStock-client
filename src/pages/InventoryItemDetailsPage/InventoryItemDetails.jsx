import "./InventoryItemDetails.scss";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Edit from "../../assets/icons/edit-24px.svg";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import { getInventoryDetailEndpoint } from "../../utils/api";

function InventoryItemDetails() {
  const { id } = useParams();
  const [InventoryItem, setInventoryItem] = useState(null);

  useEffect(() => {
    axios
      .get(getInventoryDetailEndpoint(id))
      .then((response) => {
        setInventoryItem(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!InventoryItem) {
    return <div>Loading...</div>;
  }
  const checkStatus = (status) => status === "In Stock";

  return (
    <section className="item-details">
      <div className="item-details__header">
        <Link to="/inventory">
          <img
            className="item-details__arrow-icon"
            src={ArrowBack}
            alt="arrow back"
          />
        </Link>
        <h1 className="item-details__title">{InventoryItem.item_name}</h1>
        <Link
          to={`/inventory/${id}/edit`}
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
            {InventoryItem.description}
          </p>
          <h3 className="item-details__description-header">CATEGORY:</h3>
          <p className="item-details__description-description">
            {InventoryItem.category}
          </p>
        </div>
        <div className="item-details__line"></div>
        <div className="item-details__availability">
          <div className="item-details__availability-amount">
            <div className="item-details__availability-amount-status">
              <h3 className="item-details__availability-header">STATUS:</h3>
              <p
                className={
                  checkStatus(InventoryItem.status)
                    ? "item-details__availability-instock"
                    : "item-details__availability-outstock"
                }
              >
                {InventoryItem.status}
              </p>
            </div>
            <div className="item-details__availability-amount-quantity">
              <h3 className="item-details__availability-header">QUANTITY:</h3>
              <p className="item-details__availability-description">
                {InventoryItem.quantity}
              </p>
            </div>
          </div>
          <div className="item-details__availability-warehouse">
            <h3 className="item-details__availability-header">WAREHOUSE:</h3>
            <p className="item-details__availability-description">
              {InventoryItem.warehouse_id}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InventoryItemDetails;
