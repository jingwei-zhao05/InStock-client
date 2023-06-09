import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import axios from "axios";
import { useState, useEffect } from "react";
import Arrows from "../../assets/icons/sort-24px.svg";
import { useParams, Link } from "react-router-dom";
import {getInventoriesEndpoint} from '../../utils/api'
// import arrow from '../../assets/images/icons/arrow_back-24px.svg';
import WarehouseItemsList from "../../components/WarehouseItemsList/WarehouseItemsList";
import './WarehouseInventorieListPage.scss';
import WarehouseInventorieListPageHeader from "../../components/WarehouseInventorieListPageHeader/WarehouseInventorieListPageHeader";
import WarehouseInventorieListPageList from "../../components/WarehouseInventorieListPageList/WarehouseInventorieListPageList";

function WarehouseInventorieListPage() {
  const { id } = useParams();
  const [warehouseItemsList, setwarehouseItemsList] = useState([]);
  const [InventoryList, setInventoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);


  // const fetchInventories = () => {
  //   axios
  //     .get(getInventoriesEndpoint)
  //     .then((response) => {
  //       setIsLoading(false);
  //       setInventoryList(response.data);
  //     })
  //     .catch(() => {
  //       setHasError(true);
  //       setIsLoading(false);
  //     });
  // };
  // console.log(InventoryList)

  // useEffect(() => {
  //   fetchInventories();
  // }, []);

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

  // console.log(warehouseItemsList);
  return (
    <div className="warehouse-page">
      <WarehouseInventorieListPageHeader />
      <WarehouseInventorieListPageList 
        // itemDetails={itemDetails}
        // key={itemDetails.id}
        // id={itemDetails.id}
        // fetchInventories={fetchInventories}
        />
    </div>
  );
}
export default WarehouseInventorieListPage;
