import "../WarehousesList/WarehousesList.scss";
import Warehouse from "../Warehouse/Warehouse";
import { getWarehousesEndpoint } from "../../utils/api";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function WarehousesList() {
  const [defaultWarehouses, setdefaultWarehouses] = useState(null);
  
    const fetchWarehouses = () => {
      axios
      .get(getWarehousesEndpoint)
      .then((response) => {
        setdefaultWarehouses(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
    }

  useEffect(() => {
    fetchWarehouses();
  }, []);

  if (!defaultWarehouses) {
    return <span>Loading...</span>;
  }

  return (
    <ul>
      {defaultWarehouses.map((warehouse) => {
        return (
          <li className="warehouses">
            {
              <Warehouse
                id={warehouse.id}
                name={warehouse.warehouse_name}
                address={warehouse.address}
                city={warehouse.city}
                coutry={warehouse.country}
                contactName={warehouse.contact_name}
                contactPhone={warehouse.contact_phone}
                contactEmail={warehouse.contact_email}
                fetchWarehouses= {fetchWarehouses}
              />
            }
          </li>
        );
      })}
    </ul>
  );
}

export default WarehousesList;
