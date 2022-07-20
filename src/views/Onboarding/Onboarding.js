import React from "react";
import "./Onboarding.css";
import ProfileForm from "components/ProfileForm/ProfileForm";
import AddDeliveryForm from "components/AddDeliveryForm/AddDeliveryForm";
import { useNavigate, useParams } from "react-router-dom";
import onboard1 from "assets/onboard-1.png";
import { LogoutIcon } from "@heroicons/react/outline";
import useAuth from "hooks/useAuth";

const Onboarding = () => {
  const { page } = useParams();
  const { setAuth, setProfile, setError } = useAuth();
  let navigate = useNavigate();

  const handleDeliverySubmit = () => {
    navigate("/cart");
  };

  const logout = () => {
    localStorage.clear();
    setAuth(false);
    setError("You've been logged out!");
    setProfile({});
  };
  return (
    <div className="Onboarding">
      <div className="bg-century flex flex-col h-screen">
        <div
          className={`bg-century flex flex-col p-4 lg:p-24 justify-center items-center lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-120 lg:overflow-y-auto`}
        >
          <h1
            className={`text-3xl font-bold text-center text-white lg:mb-3 italic`}
          >
            Cart.africa
          </h1>
          <div className="hidden lg:block">
            <h1 className="text-2xl font-bold text-center text-white">
              Track your mood and reflect on your day
            </h1>
            <p className="text-white text-center">
              Impeet viverra vivamus porttior ules ac vulte lectus velit sen
              lectus ue
            </p>
            <img src={onboard1} alt="onboarding 1" className="w-full" />
          </div>
        </div>
        <div className="bg-white flex flex-grow p-6 lg:p-24 justify-center items-start rounded-t-3xl lg:flex lg:ml-120 lg:rounded-none">
          <div className="w-full">
            <div className="w-full py-6">
              <div className="flex">
                <div className="w-1/3">
                  <div className="relative mb-2">
                    <div className="w-10 h-10 mx-auto bg-century rounded-full text-lg text-white flex items-center">
                      <span className="text-center text-white w-full">1</span>
                    </div>
                  </div>
                </div>

                <div className="w-1/3">
                  <div className="relative mb-2">
                    <div
                      className="absolute flex align-center items-center align-middle content-center"
                      style={{
                        width: "calc(100% - 2.5rem - 1rem)",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                        <div
                          className={`${
                            page === "profile" ? "w-1/2" : "w-full"
                          } border border-century`}
                        ></div>
                      </div>
                    </div>

                    <div
                      className={`w-10 h-10 mx-auto ${
                        page === "delivery"
                          ? "bg-century text-white"
                          : "bg-white text-gray-600 border-2 border-gray-200"
                      } rounded-full text-lg flex items-center`}
                    >
                      <span className="text-center w-full">2</span>
                    </div>
                  </div>
                </div>

                <div className="w-1/3">
                  <div className="relative mb-2">
                    <div
                      className="absolute flex align-center items-center align-middle content-center"
                      style={{
                        width: "calc(100% - 2.5rem - 1rem)",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                        <div
                          className={`${
                            page === "delivery" ? "w-1/2" : "w-0"
                          }  border-century border`}
                        ></div>
                      </div>
                    </div>

                    <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                      <span className="text-center text-gray-600 w-full">
                        3
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-3xl text-center">
              {page === "profile" && "Complete Your Profile"}
              {page === "delivery" && "Add Delivery Address"}
              {page === "payment" && "Add Payment Method"}
            </h1>
            <p className="text-gray-500 text-sm text-center m-3">
              We need these information now, so you don't have to enter them
              again.
            </p>
            {page === "profile" && <ProfileForm next={true} />}
            {page === "delivery" && (
              <>
                <AddDeliveryForm handle={handleDeliverySubmit} />
                <div
                  className="flex justify-center cursor-pointer my-5"
                  onClick={() => {
                    navigate("/onboarding/payment");
                  }}
                >
                  Skip
                </div>
              </>
            )}
            {page === "payment" && (
              <>
                <ProfileForm />
                <div
                  className="flex justify-center cursor-pointer my-5"
                  onClick={() => {
                    navigate("/dashboard/orders");
                  }}
                >
                  Skip
                </div>
              </>
            )}
            <div
              className="flex justify-center cursor-pointer mt-2"
              onClick={logout}
            >
              <LogoutIcon className="h-6 mr-1" /> Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Onboarding.propTypes = {};

Onboarding.defaultProps = {};

export default Onboarding;
