import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import InventoryItemDetailsPage from "./pages/InventoryItemDetailsPage/InventoryItemDetails";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";
// import InventorieList from "./pages/Inventories/InventorieList";
// import WarehouseInventorieListPage from "./pages/WarehouseInventorieListPage/WarehouseInventorieListPage";

import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import "./App.scss";
import InventoryPageList from "./components/InventoryPageList/InventoryPageList";
import WarehouseInventorieListPage from "./pages/WarehouseInventorieListPage/WarehouseInventorieListPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route
          path="/warehouses/:id"
          element={<WarehouseInventorieListPage />}
        />
        <Route path="/warehouses/:id/edit" element={<EditWarehousePage />} />
        <Route path="/warehouses/add" element={<AddWarehousePage />} />
        <Route path="/inventory" element={<InventoryPage/>} />
        <Route path="/inventory/:id" element={<InventoryItemDetailsPage />} />
        <Route path="/inventory/:id/edit" element />
        <Route path="/inventory/add" element={<AddInventoryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
