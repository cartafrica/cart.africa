import "./App.css";
import Auth from "views/Auth/Auth";
import Cart from "views/Cart/Cart";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "views/Dashboard/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard/:page" element={<Dashboard />} />
        <Route path="/dashboard/:page/:subpage" element={<Dashboard />} />
        <Route path="/dashboard" element={<Navigate replace to="/dashboard/orders" />} />
        <Route path="/" element={<Navigate replace to="/auth" />} />
        <Route path="*" element={<Navigate replace to="/auth" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
