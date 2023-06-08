import "./InventoryPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { GetInventoryList } from "../../utility/API";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
function InventoryPage() {
  const [InventoryList, setInventoryList] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [hasError, sethasError] = useState(false);

  useEffect(() => {
    axios
      .get(GetInventoryList)
      .then((response) => {
        setisLoading(false);
        setInventoryList(response.data);
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
        {/* 
        <section className="inventories__heading">
          <div className="inventories__container">
            <h4 className="inventories__heading-warehouse">WAREHOUSE</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="inventories__heading-icon "
            />
          </div>
          <div className="inventories__container">
            <h4 className="inventories__heading-warehouse">ADDRESS</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="inventories__heading-icon"
            />
          </div>
          <div className="inventories__container">
            <h4 className="inventories__heading-warehouse">CONTACT NAME</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="inventories__heading-icon"
            />
          </div>
          <div className="inventories__container">
            <h4 className="inventories__heading-warehouse">
              CONTACT INFORMATION
            </h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="inventories__heading-icon"
            />
          </div>
          <div className="inventories__container">
            <h4 className="inventories__heading-warehouse">ACTIONS</h4>
          </div>
        </section> */}
        {InventoryList.map((itemDetails) => {
          return (
            <InventoryItem itemDetails={itemDetails} key={itemDetails.id} />
          );
        })}
      </section>
    </>
  );
}
export default InventoryPage;
