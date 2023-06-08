import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import InventoryItemDetailsPage from "./pages/InventoryItemDetailsPage/InventoryItemDetails";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import "./App.scss";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/warehouses/:id" element={<WarehouseDetails />} />
        <Route path="/warehouses/:id/edit" element={<EditWarehousePage />} />
        <Route path="/warehouses/add" element />
        <Route path="/inventories" element />
        <Route path="/inventories/:id" element={<InventoryItemDetailsPage />} />
        <Route path="/inventories/:id/edit" element />
        <Route path="/inventories/add" element />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;