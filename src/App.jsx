import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import InventoryItemDetailsPage from "./pages/InventoryItemDetailsPage/InventoryItemDetails";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/warehouses/:id" element={""} />
        <Route path="/warehouses/:id/edit" element={<EditWarehousePage />} />
        <Route path="/warehouses/add" element />
        {/* <Route path="/inventories" element={<InventoryPage />} /> */}
        {/* <Route path="/inventories/:id" element /> */}
        {/* <Route path="/inventories/:id/edit" element /> */}
        {/* <Route path="/inventories/add" element /> */}
        <Route path="/inventory" element={<InventoryPage />}/>
        <Route path="/inventory/:id" element={<InventoryItemDetailsPage />} />
        <Route path="/inventory/:id/edit" element />
        <Route path="/inventory/add" element />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;