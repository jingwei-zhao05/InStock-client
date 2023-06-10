import "./InventoryPageList.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { getInventoriesEndpoint } from "../../utils/api";
import InventoryItem from "../InventoryItem/InventoryItem";

function InventoryPageList() {
  const [InventoryList, setInventoryList] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [hasError, sethasError] = useState(false);

  const fetchInventories = () => {
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
  };

  useEffect(() => {
    fetchInventories();
  }, []);

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
        {InventoryList.map((itemDetails) => {
          console.log(itemDetails);
          return (
            <InventoryItem
              itemDetails={itemDetails}
              key={itemDetails.id}
              id={itemDetails.id}
              fetchInventories={fetchInventories}
            />
          );
        })}
    </>
  );
}
export default InventoryPageList;
