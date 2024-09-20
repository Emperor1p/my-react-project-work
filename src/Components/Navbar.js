// NavBar.js
import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { TbAtomOff } from "react-icons/tb";
import { Dropdown } from "react-bootstrap";
import {
  FaHome,
  FaProductHunt,
  FaInfoCircle,
  FaPhone,
  FaCartPlus,
  FaQuestionCircle,
  FaUser,
  FaEnvelope,
  FaTag,
  FaBookmark,
  FaSignOutAlt,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from "./CartContext";

function NavBar() {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navData = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Product", path: "/product", icon: <FaProductHunt /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Contact", path: "/contact", icon: <FaPhone /> },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-success sticky-top navbar-custom">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <TbAtomOff size={32} color="white" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon toggler-color "></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navData.map(({ name, path, icon }, i) => (
              <li className="nav-item" key={i}>
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to={path}
                  activeClassName="active"
                >
                  {icon} <span className="ms-2">{name}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          <Dropdown className="ms-auto me-3">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <FaUser className="me-2" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/account">
                <FaUser className="me-2" /> Account
              </Dropdown.Item>

              <Dropdown.Item as={NavLink} to="/inbox">
                <FaEnvelope className="me-2" /> Inbox
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/account/save-Item">
                <FaBookmark className="me-2" /> Saved Items
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/vouchers">
                <FaTag className="me-2" /> Vouchers
              </Dropdown.Item>
              <hr />
              <Dropdown.Item href="/login">
                <FaSignOutAlt className="me-2" /> Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <NavLink className="nav-link me-3 makered" to="/cart">
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Hooray!</Tooltip>}
            >
              <FaCartPlus className="me-2" />
            </OverlayTrigger>
            {totalItems > 0 && (
              <span className="badge bg-danger ms-2">{totalItems}</span>
            )}
          </NavLink>

          <NavLink className="nav-link makered" to="/help">
            <FaQuestionCircle className="me-2" /> Help
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
