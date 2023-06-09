import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import InventoryItemDetailsPage from "./pages/InventoryItemDetailsPage/InventoryItemDetails";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import "./App.scss";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventorieList from "./pages/Inventories/InventorieList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/warehouses/:id" element={<InventorieList />} />
        <Route path="/warehouses/:id/edit" element={<EditWarehousePage />} />
        <Route path="/warehouses/add" element />
        <Route path="/inventory" element />
        <Route path="/inventory/:id" element={<InventoryItemDetailsPage />} />
        <Route path="/inventory/:id/edit" element />
        <Route path="/inventory/add" element />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;