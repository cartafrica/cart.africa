import React from "react";
import PropTypes from "prop-types";
import AccountHeader from "components/AccountHeader/AccountHeader";
import ProfileForm from "components/ProfileForm/ProfileForm";

const ManageProfile = () => (
  <div className="ManageProfile">
    <AccountHeader name="Manage Profile" />
    <div className="flex items-center justify-center p-5">
     <ProfileForm />
    </div>
  </div>
);

ManageProfile.propTypes = {};

ManageProfile.defaultProps = {};

export default ManageProfile;
