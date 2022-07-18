import "./App.css";
import Auth from "views/Auth/Auth";
import Cart from "views/Cart/Cart";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "views/Dashboard/Index";
import Onboarding from "views/Onboarding/Onboarding";
import useToken from "services/useToken";
import RequireAuth from "views/RequireAuth";

function App() {

  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />

      <Route element={<RequireAuth />}>
        <Route path="/onboarding/:page" element={<Onboarding />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/dashboard/:page"
          element={<Dashboard />}
        />
        <Route path="/dashboard/:page/:subpage" element={<Dashboard />} />
        <Route
          path="/dashboard"
          element={<Navigate replace to="/dashboard/orders" />}
        />
      </Route>
      <Route path="/" element={<Navigate replace to="/auth" />} />
      <Route path="*" element={<Navigate replace to="/auth" />} />
    </Routes>
  );
}

export default App;
