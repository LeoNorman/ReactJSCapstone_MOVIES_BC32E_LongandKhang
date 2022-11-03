import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import _ from "lodash";

const { Option } = Select;
const Header = (props) => {
  const { userLogin } = useSelector((state) => state.quanLyNguoiDungReducer);
  const { t, i18n } = useTranslation();
  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            className="self-center px-8 py-3 rounded"
            onClick={() => {
              history.push("/login");
            }}
          >
            {t("signin")}
          </button>
          <button
            className="self-center px-8 py-3 font-semibold rounded text-gray-50"
            onClick={() => {
              history.push("/register");
            }}
          >
            {t("register")}
          </button>
        </Fragment>
      );
    }
    return (
      <button
        className="self-center px-8 py-3 rounded"
        onClick={() => {
          history.push("/profile");
        }}
      >
        Hello ! {userLogin.taiKhoan}
      </button>
    );
  };
  return (
    // header của mamui.com
    <header className="p-4 bg-opacity-40 bg-gray-600 text-white fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt="cyberlearn.vn"
          />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/home"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
              activeClassName="border-b-2 border-white"
            >
              Home
            </NavLink>
            {/* activeClasName để khi bấm vào nó tự hiện border bottom */}
          </li>
          <li className="flex">
            <NavLink
              to="/contact"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
              activeClassName="border-b-2 border-white"
            >
              Contact
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/news"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
              activeClassName="border-b-2 border-white"
            >
              News
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {renderLogin()}
        </div>
        <Select
          defaultValue="en"
          style={{
            width: 120,
          }}
          onChange={handleChange}
        >
          <Option value="en">Eng</Option>
          <Option value="chi">China</Option>
          <Option value="vi">Việt nam</Option>
        </Select>
      </div>
    </header>
  );
};

export default Header;
