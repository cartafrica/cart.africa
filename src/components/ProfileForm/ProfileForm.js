import React from 'react';
import PropTypes from 'prop-types';


const ProfileForm = () => (
  <form className="lg:w-1/3 w-full">
  <div className="mb-3">
    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstname">
      First Name
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="firstname"
      type="text"
    />
  </div>
  <div className="mb-3">
    <label className="block text-gray-700 text-sm mb-2" htmlFor="lastname">
      Last Name
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="lastname"
      type="text"
    />
  </div>
  <div className="mb-3">
    <label className="block text-gray-700 text-sm mb-2" htmlFor="dob">
      Date of Birth
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="dob"
      type="text"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
      Email Address
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="email"
      type="text"
    />
  </div>
  <button
    className="bg-century w-full text-white mb-3 py-3 px-4 rounded focus:outline-none focus:shadow-outline"
    type="button"
  >
    Save
  </button>
</form>
);

ProfileForm.propTypes = {};

ProfileForm.defaultProps = {};

export default ProfileForm;
