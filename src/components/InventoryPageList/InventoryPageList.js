import "./InventoryPageList.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { getInventoriesEndpoint } from "../../utils/api";
import { Link } from "react-router-dom";
import Arrows from "../../assets/icons/sort-24px.svg";
import InventoryItemDetailsPage from "../../pages/InventoryItemDetailsPage/InventoryItemDetails";
import InventoryItem from "../InventoryItem/InventoryItem";
import InventoryPageHeader from "../InventoryPageHeader/InventoryPageHeader";

function InventoryPageList() {
  const [InventoryList, setInventoryList] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [hasError, sethasError] = useState(false);

  useEffect(() => {
    axios
      .get(getInventoriesEndpoint)
      .then((response) => {
        setisLoading(false);
        setInventoryList(response.data);
        console.log(response);
      })
      .catch(() => {
        sethasError(true);
        setisLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (hasError) {
    return <h1>error</h1>;
  }
  console.log(InventoryList);
  return (
    <>
    
      {/* <section className="inventories">
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
              <Link to={"#"}>
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
        </section> */}
        {InventoryList.map((itemDetails) => {
          console.log(itemDetails);
          return (
            <InventoryItem
              itemDetails={itemDetails}
              key={itemDetails.id}
              id={itemDetails.id}
            />
          );
        })}
      {/* </section> */}
    </>
  );
}
export default InventoryPageList;
