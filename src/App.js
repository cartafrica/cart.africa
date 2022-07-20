import "./App.css";
import Auth from "views/Auth/Auth";
import Cart from "views/Cart/Cart";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "views/Dashboard/Index";
import Onboarding from "views/Onboarding/Onboarding";
import RequireAuth from "views/RequireAuth";
import PersistLogin from "views/PersistLogin";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/cart/:id" element={<Cart />} />

      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth />}>
          <Route path="/onboarding/:page" element={<Onboarding />} />
          <Route path="/dashboard/:page" element={<Dashboard />} />
          <Route path="/dashboard/:page/:subpage" element={<Dashboard />} />
          <Route
            path="/dashboard"
            element={<Navigate replace to="/dashboard/orders" />}
          />
        </Route>
      </Route>
      <Route path="/" element={<Navigate replace to="/auth" />} />
      <Route path="*" element={<Navigate replace to="/auth" />} />
    </Routes>
  );
}

export default App;
