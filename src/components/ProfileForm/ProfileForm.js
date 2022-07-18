import React from 'react';
import PropTypes from 'prop-types';


const ProfileForm = (props) => (
  <form className="w-full lg:w-3/4 xl:w-1/2 m-auto">
  <div className="mb-3">
    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstname">
      First Name
    </label>
    <input
      className="appearance-none border-0 border-b border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-century focus:border-century"
      id="firstname"
      type="text"
    />
  </div>
  <div className="mb-3">
    <label className="block text-gray-700 text-sm mb-2" htmlFor="lastname">
      Last Name
    </label>
    <input
      className="appearance-none border-0 border-b border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-century focus:border-century"
      id="lastname"
      type="text"
    />
  </div>
  <div className="mb-3">
    <label className="block text-gray-700 text-sm mb-2" htmlFor="dob">
      Date of Birth
    </label>
    <input
      className="appearance-none border-0 border-b border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-century focus:border-century"
      id="dob"
      type="text"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
      Email Address
    </label>
    <input
      className="appearance-none border-0 border-b border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-century focus:border-century"
      id="email"
      type="text"
    />
  </div>
  <button
    className="bg-century w-full text-white mb-3 py-3 px-4 rounded focus:outline-none focus:shadow-outline"
    type="button"
    onClick={props.handle}
  >
    Save
  </button>
</form>
);

ProfileForm.propTypes = {};

ProfileForm.defaultProps = {};

export default ProfileForm;
