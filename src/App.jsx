import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import "./App.scss";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/warehouses/:id" element={<InventoryPage />} />
        <Route path="/warehouses/:id/edit" element={<EditWarehousePage />} />
        <Route path="/warehouses/add" element />
        <Route path="/inventories" element={<InventoryPage />} />
        <Route path="/inventories/:id" element />
        <Route path="/inventories/:id/edit" element />
        <Route path="/inventories/add" element />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
