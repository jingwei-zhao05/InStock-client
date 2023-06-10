import "./WarehouseInventorieListPageHeader.scss";
import Arrows from "../../assets/icons/sort-24px.svg";
import React from "react";
import WarehouseDetails from "../WarehouseDetails/WarehouseDetails";
function WarehouseInventorieListPageHeader() {
  return (
    <>
      <WarehouseDetails />
      <section className="warehouseInventoryHeader">
        <section className="warehouseInventoryHeader__heading">
          <div className="warehouseInventoryHeader__container warehouseInventoryHeader__container--warehouseWitdh">
            <h4 className="warehouseInventoryHeader__heading-warehouse">
              INVENTORY ITEM
            </h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="warehouseInventoryHeader__heading-icon "
            />
          </div>
          <div className="warehouseInventoryHeader__container warehouseInventoryHeader__container--addressWitdh">
            <h4 className="warehouseInventoryHeader__heading-warehouse">
              CATEGORY
            </h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="warehouseInventoryHeader__heading-icon"
            />
          </div>
          <div className="warehouseInventoryHeader__container warehouseInventoryHeader__container--contactNameWitdh">
            <h4 className="warehouseInventoryHeader__heading-warehouse">
              STATUS
            </h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="warehouseInventoryHeader__heading-icon"
            />
          </div>
          <div className="warehouseInventoryHeader__container warehouseInventoryHeader__container--contactInformationWitdh">
            <h4 className="warehouseInventoryHeader__heading-warehouse">
              QUANTITY
            </h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="warehouseInventoryHeader__heading-icon"
            />
          </div>
          <div className="warehouseInventoryHeader__container warehouseInventoryHeader__container--actionsWitdh">
            <h4 className="warehouseInventoryHeader__heading-warehouse">
              ACTIONS
            </h4>
          </div>
        </section>
      </section>
    </>
  );
}
export default WarehouseInventorieListPageHeader;
