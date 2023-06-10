import "./WarehouseInventorieItems.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
import RemoveIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import Modal from "../../modal/InventoryModal/InventoryDetailModal";
import "../../modal/WarehouseModal/WarehouseModal.scss";
import { useParams } from "react-router";
function WarehouseInventorieItems({
  itemId,
  name,
  category,
  status,
  quantity,
  fetchInventories,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (isDeleted) => {
    setIsModalOpen(false);
    if (isDeleted) {
      fetchInventories();
    }
  };

  return (
    <div className="warehouseInventoryItems__box">
      <div className="warehouseInventoryItems__info-warehouse">
        <h3 className="warehouseInventoryItems__mobile-header">Inventory</h3>
        <div className="warehouseInventoryItems__chevron">
          <div className="warehouseInventoryItems__chevron-link">
            <Link
              to={`/inventory/${itemId}`}
              className="warehouseInventoryItems__link-anchor"
            >
              {name}
            </Link>
            <img
              className="warehouseInventoryItems__chevron-image"
              src={Chevron}
              alt="chevron"
            ></img>
          </div>
        </div>
      </div>
      <div className="warehouseInventoryItems__info-address">
        <h3 className="warehouseInventoryItems__mobile-header">Category</h3>
        <p className="warehouseInventoryItems__text">{category}</p>
      </div>
      <div className="warehouseInventoryItems__info-contact">
        <h3 className="warehouseInventoryItems__mobile-header">Status</h3>
        <p
          className={
            status === "In Stock"
              ? "warehouseInventoryItems__contact-text in-stock"
              : "warehouseInventoryItems__contact-text out-stock"
          }
        >
          {status}
        </p>
      </div>
      <div className="warehouseInventoryItems__info-contact-info">
        <h3 className="warehouseInventoryItems__mobile-header">quantity</h3>
        <p>{quantity}</p>
      </div>

      <div className="warehouseInventoryItems__actions">
        <Link to={`/warehouses/${id}`}>
          <img
            src={RemoveIcon}
            alt="remove icon"
            className="inventory__icon"
            onClick={handleOpenModal}
          />
        </Link>
        <Link
          to={`/warehouses/${id}/edit`}
          className="warehouseInventoryItems__link"
        >
          <img
            src={EditIcon}
            alt="edit icon"
            className="warehouseInventoryItems__icon"
          />
        </Link>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        itemDetailsId={itemId}
        itemDetailsName={name}
        fetchInventories={fetchInventories}
      />
    </div>
  );
}
export default WarehouseInventorieItems;
