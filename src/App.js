import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Inventories from "../pages/Inventories/InventorieList";
import InventorieList from "../pages/Inventories/InventorieList";
import "./App.scss";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element />
        <Route path="/warehouses/:id" element={<InventorieList />} />
        <Route path="/warehouses/:id/edit" element />
        <Route path="/warehouses/add" element />
        <Route path="/inventories" element />
        <Route path="/inventories/:id" element />
        <Route path="/inventories/:id/edit" element />
        <Route path="/inventories/add" element />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
