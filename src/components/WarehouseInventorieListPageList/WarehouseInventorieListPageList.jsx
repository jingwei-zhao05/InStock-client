import "./WarehouseInventorieListPageList.scss";
import { getWarehouseInventoryItemsEndpoint } from "../../utils/api";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import WarehouseInventorieItems from "../WarehouseInventorieItems/WarehouseInventorieItems";
import { useParams, Link } from "react-router-dom";
function WarehouseInventorieListPageList() {
  const [WarehouseInventoryList, setWarehouseInventoryList] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [hasError, sethasError] = useState(false);
  // const [defaultWarehouses, setdefaultWarehouses] = useState(null);

  const { id } = useParams();

  const fetchInventories = () => {
    axios
      .get(getWarehouseInventoryItemsEndpoint(id))
      .then((response) => {
        setisLoading(false);
        setWarehouseInventoryList(response.data);
        console.log(response);
      })
      .catch(() => {
        sethasError(true);
        setisLoading(false);
      });
  };

  useEffect(() => {
    fetchInventories();
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (hasError) {
    return <h1>error</h1>;
  }
  return (
    <ul>
      {WarehouseInventoryList.map((item) => {
        return (
          <li className="warehouse" key={item.id}>
            {
              <WarehouseInventorieItems
                itemId={item.id}
                name={item.item_name}
                category={item.category}
                status={item.status}
                quantity={item.quantity}
                fetchInventories={fetchInventories}
              />
            }
          </li>
        );
      })}
    </ul>
  );
}
export default WarehouseInventorieListPageList;
