import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import "./Dashboard.css";
import FooterNav from "components/FooterNav/FooterNav";
import Header from "components/Header/Header";
import Orders from "./Orders";
import AccountIndex from "./Account/Index";
import useAuth from "hooks/useAuth";
import { getProfile } from "services/network/lib/profile";

const Dashboard = () => {
  const { page, subpage } = useParams();
  const navigate = useNavigate();
  const { setProfile } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProfile()
      .then((response) => {
        let user = response.data;
        if (!user) {
          navigate("/auth");
        }
        if (user.Status === "onboarding") {
          navigate("/onboarding/profile");
        }
        setProfile(user);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <div className="h-screen flex items-center mx-auto">
      <svg
        className="animate-spin mx-auto h-10 text-black"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  ) : (
    <div className="bg-white flex flex-col h-screen lg:w-3/4 mx-auto">
      <Header page={page} />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
      <FooterNav page={page} />
    </div>
  );
};

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
