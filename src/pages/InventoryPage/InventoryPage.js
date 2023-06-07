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
      <section className="main">
        {InventoryList.map((itemDetails) => {
          return (
            <InventoryItem itemDetails={itemDetails} key={itemDetails.id} />
          );
        })}
        <h1>feed</h1>
        <h1>feed</h1>
        <h1>feed</h1>
        <h1>feed</h1>
        <h1>feed</h1>
        <h1>feed</h1>
      </section>
    </>
  );
}
export default InventoryPage;
