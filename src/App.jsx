import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
<<<<<<< HEAD:src/App.jsx
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
=======
import './App.scss';

>>>>>>> develop:src/App.js
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element />
        <Route path="/warehouses/:id" element />
        <Route path="/warehouses/:id/edit" element={<EditWarehousePage />} />
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
