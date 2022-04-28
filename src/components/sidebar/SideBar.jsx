import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";
import { BiAnalyse, BiCog, BiSearch } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const routes = [
  { path: "/", name: "Home", icon: <FaHome /> },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: "/file-manager",
    name: "File Manager",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
];

const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="sidebar__main-container">
      <motion.div
        animate={{ width: toggle ? "50px" : "200px" }}
        className="sidebar"
      >
        <div className="top_section">
          {!toggle && <h2 className="logo">Custom Navbar</h2>}
          <div className="bars">
            <FaBars onClick={() => setToggle((toggle) => !toggle)} />
          </div>
        </div>
        {!toggle && (
          <div className="search">
            <label htmlFor="search" className="search_icon">
              <BiSearch />
            </label>
            <div className="search_input">
              <input
                type="search"
                name="search"
                id="search"
                autoComplete="false"
              />
            </div>
          </div>
        )}
        <section className="routes">
          {routes.map((route) => (
            <NavLink to={route.path} key={route.name} className="link_outer">
              <div className="icon">{route.icon}</div>
              <div className="link_text">{route.name}</div>
            </NavLink>
          ))}
        </section>
      </motion.div>
    </div>
  );
};

export default SideBar;
