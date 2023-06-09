import React, { useState, useEffect } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Arrows from "../../assets/icons/sort-24px.svg";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import {getInventoriesEndpoint} from '../../utils/api'
import './InventoryPage.scss';

function InventoryPage() {
  const [InventoryList, setInventoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchWarehouses = () => {
    axios
      .get(getInventoriesEndpoint)
      .then((response) => {
        setIsLoading(false);
        setInventoryList(response.data);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchWarehouses();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (hasError) {
    return <h1>Error</h1>;
  }

  return (
    <>
     <section className="inventories">
           <div className="inventories__header">
          <h1 className="inventories__header-title">inventory</h1>
          <div className="inventories__header-container">
            <form className="inventories__header-form">
              <input
                type="search"
                name="search"
                className="inventories__header-form-search"
                placeholder="Search..."
              />
              <Link to={'#'}>
                <button className="inventories__header-form-button">
                  + Add New Warehouse
                </button>
              </Link>
            </form>
          </div>
        </div>
        <section className="inventories__heading">
          <div className="inventories__container inventories__container--inventoryitemWidth">
            <h4 className="inventories__heading-warehouse">INVENTORYITEM</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="inventories__heading-icon "
            />
          </div>
          <div className="inventories__container inventories__container--categoryWidth">
            <h4 className="inventories__heading-warehouse">CATEGORY</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="inventories__heading-icon"
            />
          </div>
          <div className="inventories__container inventories__container--statusWitdh">
            <h4 className="inventories__heading-warehouse">STATUS</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="inventories__heading-icon"
            />
          </div>
          <div className="inventories__container inventories__container--qtyWitdh">
            <h4 className="inventories__heading-warehouse">QTY</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="inventories__heading-icon"
            />
          </div>
          <div className="inventories__container inventories__container--warehousenameWidth">
            <h4 className="inventories__heading-warehouse">WAREHOUSE</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="inventories__heading-icon"
            />
          </div>
          <div className="inventories__container inventories__container--actionsWidth">
            <h4 className="inventories__heading-warehouse">ACTIONS</h4>
          </div>
        </section>
        {InventoryList.map((itemDetails) => {
          return (
            <InventoryItem
              itemDetails={itemDetails}
              key={itemDetails.id}
              id={itemDetails.id}
              fetchWarehouses={fetchWarehouses}
            />
          );
        })} 
      </section>
    </>
  );
}
export default InventoryPage;
