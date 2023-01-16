import { useState } from "react";
import Image from "next/image";
import icon from "public/menu-icon.ico";
import Link from "next/link";

export const Burger = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="mobile-view flex-col absolute inset-y-0 right-0">
      <div onClick={() => setDropdownOpen(!dropdownOpen)}
        className="overflow-hiden rounded-full w-48 h-16 mb-2 flex  hover:cursor-pointer">
        <Image className="absolute w-10 bottom-0 inset-y-0 right-0" src={icon} alt="" />
      </div>
      <div
        className={`${dropdownOpen ? `top-full opacity-100 visible` : "top-[110%] invisible opacity-0"}
         absolute overflow-show flex-col left-0 z-40 mt-2 w-full rounded border-[.5px] border-light bg-blue-600 px-5  py-5 shadow-card transition-all`}>
        <ul className="navbar-nav mr-auto flex flex-col">
          <li className="">
            <Link
              className="nav-link block pr-2 lg:px-2 py-2  transition duration-150 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light">
              Home
            </Link>
          </li>
          <li className="">
            <Link
              className="nav-link block pr-2 lg:px-2 py-2  "
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light">
              Creator
            </Link>
          </li>
          <li className="">
            <Link
              className="nav-link block pr-2 lg:px-2 py-2 "
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light">
              Contact
            </Link>
          </li>
          <li className="">
            <Link
              className="nav-link block pr-2 lg:px-2 py-2 "
              href="/login"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light">
              Logout
            </Link>
          </li>
          <li className="">
          </li>
        </ul>
      </div>
    </div>
  );
};