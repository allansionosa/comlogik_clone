import React, { useEffect, useState } from "react";
import About from "../pages/About";
import { Dropdown, Space } from "antd";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineMail,
} from "react-icons/ai";
const NavBar = () => {
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("white") : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  const items = [
    {
      label: <a href="/">Home</a>,
      key: "0",
    },
    {
      label: <a href="/About">About Us</a>,
      key: "1",
    },
    {
      label: <a href="">Solution</a>,
      key: "2",
    },
    {
      label: <a href="">Clients</a>,
      key: "3",
    },
    {
      label: <a href="">News</a>,
      key: "4",
    },
    {
      label: <a href="">Support</a>,
      key: "5",
    },
    {
      label: <a href="">Careers</a>,
      key: "6",
    },
    {
      label: <a href="">Contact Us</a>,
      key: "7",
    },
    {
      label: <a href="">Webmail</a>,
      key: "8",
    },
  ];
  return (
    <div className="flex md:justify-center z-50">
      <div
        className="flex justify-between items-center h-24  mx-auto px-4  fixed top-0 left-0 right-0"
        style={{
          backgroundColor: navColor,

          transition: "all 1s",
        }}
      >
        <h1>
          <img
            style={{ width: 200 }}
            src="/static/logo.png"
            alt="React Image"
          />
        </h1>
        <ul className="flex">
          <li className="p-4">
            <AiOutlineSearch size={25} color="blue" />
          </li>
          <li className="p-4">
            <AiOutlineMail size={25} color="blue" />
          </li>

          <li className="p-4">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <AiOutlineMenu color="blue" size={23} />
                </Space>
              </a>
            </Dropdown>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
