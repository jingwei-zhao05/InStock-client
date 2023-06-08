import "./WarehouseItemsList.scss";

import { Link, Navigate } from "react-router-dom";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
import RemoveIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";

function WarehouseItemsList({ itemDetails }) {
  return (
    <>
      <section>
        {/* <h1>{itemDetails.item_name}</h1>
        <h1>{itemDetails.category}</h1>
        <h1>{itemDetails.status}</h1>
        <h1>{itemDetails.quantity}</h1>
        <h1>{itemDetails.warehouse_name}</h1>
        <div>
          <img src={""} />
          <img src={""} />
        </div> */}
        <div className="inventory__box">
          <div className="inventory__text-box">
            <div className="inventory__column">
                <h3 class="inventory__mobile-header">INVENTORYITEM</h3>
                <div className="inventory__chevron">
                  <div className="inventory__chevron-link">
                    <Link to={`#`} class="inventory__link-anchor">
                      {itemDetails.item_name}
                    </Link>
                    <img
                      class="inventory__chevron-image"
                      src={Chevron}
                      alt="chevron"
                    ></img>
                  </div>
                </div>
              <div className="inventory__info-address">
                <h3 class="inventory__mobile-header">CATEGORY</h3>
                <p className="inventory__text">{itemDetails.category}</p>
              </div>
            </div>

            <div className="inventory__column-contacts">
              <div className="inventory__info-contact">
                <h3 class="inventory__mobile-header">STATUS</h3>
               
                <p className={itemDetails.status === "In Stock" ? "inventory__contact-text in-stock" : "inventory__contact-text out-stock"}>{itemDetails.status}</p>
              </div>
              <div className="inventory__info-contact-info">
                <h3 class="inventory__mobile-header">QTY</h3>
                <p>{itemDetails.quantity}</p>
              </div>
              <div className="inventory__info-contact-info">
                <h3 class="inventory__mobile-header">WAREHOUSE</h3>
                <p>{itemDetails.warehouse_name}</p>
              </div>
            </div>
          </div>
          <div className="inventory__actions">
            <Link to="/">
              <img
                src={RemoveIcon}
                alt="remove icon"
                className="inventory__icon"
              />
            </Link>
            <Link to="/" class="inventory__link">
              <img src={EditIcon} alt="edit icon" class="inventory__icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default WarehouseItemsList;