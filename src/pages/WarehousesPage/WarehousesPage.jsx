import "../WarehousesPage/WarehousesPage.scss";
import Arrows from "../../assets/icons/sort-24px.svg";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
import RemoveIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import React from "react";
import { Link } from "react-router-dom";
import WarehousesList from "../../components/WarehousesList/WarehousesList";
import WarehousesHeader from "../../components/WarehousesHeader/WarehousesHeader";

function WarehousesPage() {
  return (
    <>
      {/* <section className="warehouses">
        <div className="warehouses__header">
          <h1 className="warehouses__header-title">Warehouses</h1>
          <div className="warehouses__header-container">
            <form className="warehouses__header-form">
              <input
                type="search"
                name="search"
                className="warehouses__header-form-search"
                placeholder="Search..."
              />
              <Link to="">
                <button className="warehouses__header-form-button">
                  + Add New Warehouse
                </button>
              </Link>
            </form>
          </div>
        </div>

        <section className="warehouses__heading">
          <div className="warehouses__container warehouses__container--short">
            <h4 className="warehouses__heading-warehouse">WAREHOUSE</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="warehouses__heading-icon "
            />
          </div>
          <div className="warehouses__container warehouses__container--long">
            <h4 className="warehouses__heading-warehouse">ADDRESS</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="warehouses__heading-icon"
            />
          </div>
          <div className="warehouses__container warehouses__container--short">
            <h4 className="warehouses__heading-warehouse">CONTACT NAME</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="warehouses__heading-icon"
            />
          </div>
          <div className="warehouses__container warehouses__container--long">
            <h4 className="warehouses__heading-warehouse">
              CONTACT INFORMATION
            </h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="warehouses__heading-icon"
            />
          </div>
          <div className="warehouses__container warehouses__container--action">
            <h4 className="warehouses__heading-warehouse">ACTIONS</h4>
          </div>
        </section> */}

      <WarehousesHeader />
      <WarehousesList />

      {/* <div className="warehouses__list">
          <div className="warehouses__box">
            <div className="warehouses__text-box">
              <div className="warehouses__column">
                <div className="warehouses__info-short">
                  <h3 class="warehouses__mobile-header">Warehouse</h3>
                  <div className="warehouses__chevron">
                    <div className="warehouses__chevron-link">
                      <Link to="/" class="warehouses__link-anchor">
                        Manhattan
                      </Link>
                      <img
                        class="warehouses__chevron-image"
                        src={Chevron}
                        alt="chevron"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="warehouses__info-long">
                  <h3 class="warehouses__mobile-header">Address</h3>
                  <p className="warehouses__text">
                    503 Broadway, New York, USA
                  </p>
                </div>
              </div>
              <div className="warehouses__column">
                <div className="warehouses__info-short">
                  <h3 class="warehouses__mobile-header">Contact Name</h3>
                  <p className="warehouses__contact-text">Parmin Aujla</p>
                </div>
                <div className="warehouses__info-long">
                  <h3 class="warehouses__mobile-header">Contact Information</h3>
                  <p>+1 (646) 123-1234</p>
                  <p>paujla@instock.com</p>
                </div>
              </div>
            </div>
            <div className="warehouses__actions">
              <Link to="/">
                <img
                  src={RemoveIcon}
                  alt="remove icon"
                  className="warehouses__icon"
                />
              </Link>
              <Link to="/" class="warehouses__link">
                <img src={EditIcon} alt="edit icon" class="warehouses__icon" />
              </Link>
            </div>
          </div>
        </div> */}
      {/* </section> */}
    </>
  );
}

export default WarehousesPage;
