import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import './Dashboard.css'
import FooterNav from "components/FooterNav/FooterNav";
import Header from "components/Header/Header";
import Orders from "./Orders";
import AccountIndex from "./Account/Index";

const Dashboard = () => {
  const { page, subpage } = useParams();
  return (
    <div className="bg-white flex flex-col h-screen">
      <Header page={page} />
      <main className="flex-1 overflow-y-auto">
        {page === "orders" && <Orders />}
        {page === "account" && <AccountIndex page={subpage} />}
      </main>
      <FooterNav page={page} />
    </div>
  );
};

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
