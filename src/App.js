import "./App.css";
import Auth from "views/Auth/Auth";
import Cart from "views/Cart/Cart";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "views/Dashboard/Index";
import Onboarding from "views/Onboarding/Onboarding";
import RequireAuth from "views/RequireAuth";
import PersistLogin from "views/PersistLogin";
import Orders from "views/Dashboard/Orders";
import Order from "views/Dashboard/Order";
import AccountIndex from "views/Dashboard/Account/Index";
import PrivacyPolicy from "views/Dashboard/Account/PrivacyPolicy";
import Terms from "views/Dashboard/Account/Terms";
import ManageProfile from "views/Dashboard/Account/ManageProfile";
import Delivery from "views/Dashboard/Account/Delivery";
import Payment from "views/Dashboard/Account/Payment";
import AddDelivery from "views/Dashboard/Account/AddDelivery";
import About from "views/Dashboard/Account/About";
import Faq from "views/Dashboard/Account/Faq";

function App() {
  const checkLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/cart/:id" element={<Cart />} />
      <Route path="/onboarding/:page" element={<Onboarding />} />
      <Route element={<Dashboard />}>
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:page" element={<Order />} />
        <Route element={<AccountIndex />}>
          <Route path="/account" element={<ManageProfile />} />
          <Route path="/account/privacy" element={<PrivacyPolicy />} />
          <Route path="/account/terms" element={<Terms />} />
          <Route path="/account/about" element={<About />} />
          <Route path="/account/faq" element={<Faq />} />
          <Route path="/account/profile" element={<ManageProfile />} />
          <Route path="/account/delivery" element={<Delivery />} />
          <Route path="/account/payment" element={<Payment />} />
          <Route path="/account/add-delivery" element={<AddDelivery />} />
          <Route
            path="/account/edit-delivery"
            element={<AddDelivery edit={true} />}
          />
        </Route>
      </Route>
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth />}></Route>
      </Route>
      <Route
        path="/"
        element={<Navigate replace to={checkLoggedIn ? "/orders" : "/auth"} />}
      />
      <Route path="*" element={<Navigate replace to="/auth" />} />
    </Routes>
  );
}

export default App;
