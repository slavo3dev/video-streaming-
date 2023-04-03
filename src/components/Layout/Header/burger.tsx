import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LogoutFunc } from "lib/loginFunc";
import { CreateUser } from "lib/userTag";

export const Burger = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);


  return (
    <div className="mobile-view flex-col absolute inset-y-0 right-0">

      <div className="overflow-hiden rounded-full w-48 h-16 mb-8 flex hover:cursor-pointer">
        <Image onClick={() => setDropdownOpen(!dropdownOpen)} className="absolute  bottom-0 inset-y-0 right-0"
         src={"/../public/burgerIcon.png"}
         width={50}
         height={50}

         alt="icon" />
      </div>
      <div
        className={`${dropdownOpen ? `top-full opacity-100 visible` : "top-[110%] invisible opacity-0"}
          overflow-show flex-col left-0 z-40 mt-2 w-screen rounded border-[.5px] border-light bg-white px-6  py-5 shadow-card transition-all`}>
        <ul className="navbar-nav mr-auto flex flex-col">
          <li className="rounded-full bg-green-300 p-4 mb-8">
            <CreateUser />
          </li>
          <li className="">
            <Link
              className="nav-link block pr-2 lg:px-2 py-2 text-black  transition duration-150 ease-in-out"
              href="/"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light">
              Home
            </Link>
          </li>
          <li className="">
            <Link
              className="nav-link block pr-2  text-black lg:px-2 py-2  "
              href="/creator"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light">
              Creator
            </Link>
          </li>
          <li className="">
            <Link
              className="nav-link block pr-2 text-black lg:px-2 py-2 "
              href="/setings"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light">
              Setings
            </Link>
          </li>
          <li className="">
            <span className="nav-link block pr-2 text-red-400  lg:px-2 py-2 ">
              <LogoutFunc />
            </span>

          </li>
          <li className="">
          </li>
        </ul>
      </div>
    </div>
  );
};