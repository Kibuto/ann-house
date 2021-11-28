import React, { useState } from "react";
import Image from "next/image";
import classnames from "classnames";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface Props {
  children: React.ReactElement;
}

const Layouts = (props: Props) => {
  const [rotate, setRotate] = useState(false);

  return (
    <div className="layouts-wrapper">
      <div
        className={classnames("layouts-wrapper-inner", { "show-nav": rotate })}
      >
        <div className="circle-container">
          <div className="circle">
            <div className="btn btn-close" onClick={() => setRotate(false)}>
              <CloseOutlined />
            </div>
            <div className="btn btn-open" onClick={() => setRotate(true)}>
              <MenuOutlined />
            </div>
          </div>
        </div>
        <div className="logo">
          <Image
            src="https://i.ibb.co/TwVWRYZ/ann-house.png"
            height={50}
            width={400}
            alt="logo"
            objectFit="contain"
          />
        </div>
        <div className="content">{props.children}</div>
        <Footer />
      </div>
      <Navbar />
    </div>
  );
};

export default Layouts;
