import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  FaBox,
  FaPhone,
  FaBookmark,
  FaAddressBook,
  FaSignOutAlt,
} from "react-icons/fa";

// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";

const Account = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication
    localStorage.removeItem("isAuthenticated");
    // Redirect to login page
    navigate("/login");
  };

  return (
    <>
      

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div
            className="col-md-3 col-lg-3 p-3 sidebar"
          >
            <h4>My Jumia Account</h4>
            <hr />
            <ul className="list-unstyled accountant">
              <li>
                <NavLink
                  to="/account/orders"
                  className="text-decoration-none text-dark"
                >
                  <FaBox className="me-2" /> Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/account/contact"
                  className="text-decoration-none text-dark"
                >
                  <FaPhone className="me-2" /> Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/account/save-Item"
                  className="text-decoration-none text-dark"
                >
                  <FaBookmark className="me-2" /> Saved Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/account/address-book"
                  className="text-decoration-none text-dark"
                >
                  <FaAddressBook className="me-2" /> Address Book
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-danger btn-sm w-100 text-start"
                >
                  <FaSignOutAlt className="me-2" /> Logout
                </button>
              </li>
            </ul>
          </div>

          
          <div
            className="col-md-9 col-lg-9 p-3 main-content"
          >
            <Outlet />
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Account;
