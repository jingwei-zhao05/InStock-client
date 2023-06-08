import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element />
        <Route path="/warehouses/:id" element={<WarehouseDetails />} />
        <Route path="/warehouses/:id/edit" element={<EditWarehousePage />} />
        <Route path="/warehouses/add" element />
        <Route path="/inventories" element />
        <Route path="/inventories/:id" element />
        <Route
          path="/inventories/:id/edit"
          element={<InventoryItemDetails />}
        />
        <Route path="/inventories/add" element />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
