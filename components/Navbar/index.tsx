import React from "react";
import { UserOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <div className="navbar-wrapper">
      <ul>
        <li>
          <HomeOutlined />
          Home
        </li>
        <li>
          <UserOutlined />
          About
        </li>
        <li>
          <MailOutlined />
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
