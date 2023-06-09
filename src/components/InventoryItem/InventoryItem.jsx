import React, { useState } from "react";
import { Link } from "react-router-dom";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
import RemoveIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import Modal from "../../modal/InventoryModal/InventoryModal";
import './InventoryItem.scss';

function InventoryItem({ itemDetails, id, fetchWarehouses }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (isDeleted) => {
    setIsModalOpen(false);
    if (isDeleted) {
      fetchWarehouses();
    }
  };

  return (
    <>
      <section>
        <div className="inventory__box">
          <div className="inventory__text-box">
            <div className="inventory__column">
              <div className="inventory__chevron">
                <div className="inventory__chevron-link">
                  <h3 className="inventory__mobile-header">INVENTORYITEM</h3>
                  <Link
                    to={`/warehouses/${id}`}
                    className="inventory__link-anchor"
                  >
                    {itemDetails.item_name}
                    <img
                      className="inventory__chevron-image"
                      src={Chevron}
                      alt="chevron"
                    />
                  </Link>
                </div>
              </div>
              <div className="inventory__info-address">
                <h3 className="inventory__mobile-header">CATEGORY</h3>
                <p className="inventory__text">{itemDetails.category}</p>
              </div>
            </div>

            <div className="inventory__column-contacts">
              <div className="inventory__info-contact">
                <h3 class="inventory__mobile-header">STATUS</h3>

                <p
                  className={
                    itemDetails.status === "In Stock"
                      ? "inventory__contact-text in-stock"
                      : "inventory__contact-text out-stock"
                  }
                >
                  {itemDetails.status}
                </p>
              </div>
              <div className="inventory__info-contact-info">
                <h3 className="inventory__mobile-header">QTY</h3>
                <p>{itemDetails.quantity}</p>
              </div>
              <div className="inventory__info-contact-info">
                <h3 class="inventory__mobile-header">WAREHOUSE</h3>
                <p>{itemDetails.warehouse_name}</p>
              </div>
            </div>
          </div>
          <div className="inventory__actions">
            <Link to="/inventory">
              <img
                src={RemoveIcon}
                alt="remove icon"
                className="inventory__icon"
                onClick={handleOpenModal}
              />
            </Link>
            <Link to={`/warehouses/${id}/edit`} class="inventory__link">
              <img src={EditIcon} alt="edit icon" class="inventory__icon" />
            </Link>
          </div>
        </div>
        <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        itemDetailsId={id}
        itemDetailsName={itemDetails.item_name}
      />
      </section>
    </>
  );
}
export default InventoryItem;
