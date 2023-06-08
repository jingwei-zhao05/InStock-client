import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import axios from "axios";
import { useState, useEffect } from "react";
import Arrows from "../../assets/icons/sort-24px.svg";
import { useParams, Link } from "react-router-dom";
// import arrow from '../../assets/images/icons/arrow_back-24px.svg';
import WarehouseItemsList from "../../components/WarehouseItemsList/WarehouseItemsList";
function InventorieList() {

  const { id } = useParams();
  const [warehouseItemsList, setwarehouseItemsList] = useState([]);


  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouses/${id}/inventories`)
      .then((response) => {
        setwarehouseItemsList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!warehouseItemsList) {
    return <div>Loading...</div>;
  }

  console.log(warehouseItemsList);
  return (
    <>
      <WarehouseDetails/>
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
              <Link to="">
                <button className="inventories__header-form-button">
                  + Add New Warehouse
                </button>
              </Link>
            </form>
          </div>
        </div>

        <section className="inventories__heading">
          <div className="inventories__container">
            <h4 className="inventories__heading-warehouse">INVENTORYITEM</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="inventories__heading-icon "
            />
          </div>
          <div className="inventories__container">
            <h4 className="inventories__heading-warehouse">CATEGORY</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="inventories__heading-icon"
            />
          </div>
          <div className="inventories__container">
            <h4 className="inventories__heading-warehouse">STATUS</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="inventories__heading-icon"
            />
          </div>
          <div className="inventories__container">
            <h4 className="inventories__heading-warehouse">QTY</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="inventories__heading-icon"
            />
          </div>
          <div className="inventories__container">
            <h4 className="inventories__heading-warehouse">ACTIONS</h4>
          </div>
        </section>
        {warehouseItemsList.map((itemDetails) => {
          console.log(itemDetails);
          return (
            <WarehouseItemsList
              itemDetails={itemDetails}
              key={itemDetails.id}
            />
          );
        })}
      </section>
    </>
  );
}
export default InventorieList;
