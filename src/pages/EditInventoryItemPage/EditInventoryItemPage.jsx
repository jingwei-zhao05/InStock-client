import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import arrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import errorIcon from "../../assets/icons/error-24px.svg";
import {
  getWarehouseDetailEndpoint,
  getWarehousesEndpoint,
  getInventoryDetailEndpoint,
  putInventoryEndpoint,
  getInventoriesEndpoint,
} from "../../utils/api";
import "./EditInventoryItemPage.scss";

const initialValues = {
  id: "",
  itemName: "",
  description: "",
  category: "",
  status: "",
  quantity: 0,
};

export default function EditInventoryPage() {
  const { id: InventoryId } = useParams();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(getWarehouseDetailEndpoint(InventoryId))
      .then((response) => {
        setValues({
          warehouseName: response.data.warehouse_name,
          itemName: response.data.item_name,
          description: response.data.description,
          category: response.data.category,
          status: response.data.status,
          quantity: response.data.quantity,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [InventoryId]);


  useEffect(() => {
    // Load warehouses
    axios.get(getWarehousesEndpoint).then((response) => {
      const warehouses = response.data;
      const filteredwarehouse = warehouses.map(({ id, warehouse_name }) => ({
        id,
        warehouse_name,
      }));
      setWarehouses(filteredwarehouse);
    });

    // Load categories
    axios.get(getInventoriesEndpoint).then((response) => {
      const inventories = response.data;
      const categories = inventories.map((inventory) => inventory.category);
      const uniqueCategory = [];
      categories.forEach((category) => {
        if (!uniqueCategory.includes(category) && category !== "") {
          uniqueCategory.push(category);
        }
      });
      setCategories(uniqueCategory);
    });

    // Load inventory item
    axios.get(getInventoryDetailEndpoint(InventoryId)).then((response) => {
      const item = response.data;
      setValues({
        id: item.id,
        itemName: item.item_name,
        description: item.description,
        category: item.category,
        status: item.status,
        quantity: item.quantity,
      });
      setDescription(item.description);
    });
  }, [InventoryId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (values.itemName.trim() === "") {
      validationErrors.itemName = "Item name is required";
    }
    if (description.trim() === "") {
      validationErrors.description = "Description is required";
    }
    if (values.category === "") {
      validationErrors.category = "Category is required";
    }
    if ((!values.quantity) || values.quantity === 0) {
      validationErrors.quantity = "Quantity is required";
    }
    if (values.id === "") {
      validationErrors.warehouse = "Warehouse is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      axios
        .put(putInventoryEndpoint(InventoryId), {
          warehouse_id: values.id,
          item_name: values.itemName,
          description: description,
          category: values.category,
          status: values.status,
          quantity:  Number(values.quantity),
        })
        .then((response) => {
          navigate(-1);
          console.log(response.data)
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const handleCancelClick = () => {
    setValues(initialValues);
    setDescription("");
    navigate(-1);
  };
  
  return (
    <article className="add-inventory">
      <div className="add-inventory__header">
        <img
          className="go-back-arrow"
          src={arrowBackIcon}
          alt="go back button"
          onClick={() => {
            navigate(-1);
          }}
        />
        <h1 className="add-inventory__title">Edit Inventory Item</h1>
      </div>
      <form className="item-form" onSubmit={handleSubmit}>
        <div className="details-form">
          <h2 className="item-form__title">Item Details</h2>
          <label className="item-form__label">
            Item Name
            <input
              className={
                errors.itemName
                  ? "item-form__input item-form__input--error"
                  : "item-form__input"
              }
              type="text"
              name="itemName"
              placeholder="Item Name"
              value={values.itemName}
              onChange={handleInputChange}
            />
            {errors.itemName && (
              <div className="item-form__error">
                <img
                  className="item-form__error-icon"
                  src={errorIcon}
                  alt="something wrong here"
                />
                <p className="item-form__error-message">
                  This field is required
                </p>
              </div>
            )}
          </label>
          <label className="item-form__label">
            Description
            <textarea
              className={
                errors.description
                  ? "item-form__textarea item-form__textarea--error"
                  : "item-form__textarea"
              }
              name="itemDescription"
              placeholder="Please enter a brief item description..."
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
            {errors.description && (
              <div className="item-form__error item-form__error--description">
                <img
                  className="item-form__error-icon"
                  src={errorIcon}
                  alt="something wrong here"
                />
                <p className="item-form__error-message">
                  This field is required
                </p>
              </div>
            )}
          </label>
          <label className="item-form__label">
            Category
            <select
              className={
                errors.category
                  ? "item-form__select item-form__select--error"
                  : "item-form__select"
              }
              name="category"
              value={values.category}
              onChange={handleInputChange}
            >
              <option value="DEFAULT" disabled>
                Please select
              </option>
              {categories.map((category) => {
                return <option value={category}>{category}</option>;
              })}
            </select>
            {errors.category && (
              <div className="item-form__error">
                <img
                  className="item-form__error-icon"
                  src={errorIcon}
                  alt="something wrong here"
                />
                <p className="item-form__error-message">
                  This field is required
                </p>
              </div>
            )}
          </label>
        </div>
        <div className="item-availability">
          <h2 className="item-form__title">Item Availability</h2>
          <label className="item-form__label">Status </label>
          <div className="item-form__radio">
            <label className="item-form__radio-label">
              <input
                className="item-form__status"
                type="radio"
                name="status"
                value="In Stock"
                checked={values.status === "In Stock"}
                onChange={handleInputChange}
              />
              In stock
            </label>
            <label className="item-form__radio-label">
              <input
                className="item-form__status"
                type="radio"
                name="status"
                value="Out of Stock"
                checked={values.status === "Out of Stock"}
                onChange={handleInputChange}
              />
              Out of stock
            </label>
          </div>

          {values.status === "In Stock" && (
            <label className="item-form__label">
              Quantity
              <input
                className={
                  errors.quantity
                    ? "item-form__input item-form__input--error item-form__input--quantity"
                    : "item-form__input item-form__input--quantity"
                }
                type="number"
                name="quantity"
                value={values.quantity}
                onChange={handleInputChange}
              />
              {errors.quantity && (
                <div className="item-form__error">
                  <img
                    className="item-form__error-icon"
                    src={errorIcon}
                    alt="something wrong here"
                  />
                  <p className="item-form__error-message">
                    This field is required
                  </p>
                </div>
              )}
            </label>
          )}
          <label className="item-form__label">
            Warehouse
            <select
              className={
                errors.warehouse
                  ? "item-form__select item-form__select--error"
                  : "item-form__select"
              }
              name="id"
              value={values.id}
              onChange={handleInputChange}
            >
              <option value="DEFAULT" disabled>
                Please select
              </option>
              {warehouses.map(({ id, warehouse_name }) => {
                return <option value={id}>{warehouse_name}</option>;
              })}
            </select>
            {errors.warehouse && (
              <div className="item-form__error">
                <img
                  className="item-form__error-icon"
                  src={errorIcon}
                  alt="something wrong here"
                />
                <p className="item-form__error-message">
                  This field is required
                </p>
              </div>
            )}
          </label>
        </div>
        <div className="add-inventory__buttons">
          <button
            type="button"
            className="add-inventory__buttons-cancel"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button className="add-inventory__buttons-submit">Save</button>
        </div>
      </form>
    </article>
  );
}
