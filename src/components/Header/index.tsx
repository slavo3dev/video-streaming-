import { FC } from "react"
import Link from "next/link"
import { Burger } from "./burger"
import { CreateUser } from "lib//userTag"
import { LogoutFunc } from "lib/loginFunc"
import Image from "next/image"
import { SearchBar } from "./search"
import Logo from "public/LogoText.png"

export const Header: FC = () => {
  return (

    <header className="header shadow-[0_0_23px_rgba(0,0,0,0.05)] flex w-full items-center bg-white from-black justify-between pt-6 pb-6 h-20 z-10">
      <div className="mobile-view  text-white flex-col">

        <CreateUser />
        <span className="text-black">
          <SearchBar />
        </span>
      </div>

      <div className="flex items-center  py-4 mx-auto justify-between w-full">
        <nav className="navbar navbar-expand-lg shadow-[0_0_23px_rgba(0,0,0,0.05)] py-2 relative dark:text-grey flex items-center w-full">
          <div className="w-full pl-16 flex flex-wrap items-center justify-between text-grey ">
            <div className="flex ml-0 pr-2 lg:px-2 py-2 desktop-view">
              <div className="pt-2">
                <Link href="/">
                  <Image
                    width={128}
                    height={40}
                    className="mr-2 overflow-hidden"
                    src={Logo}
                    alt={"FC logo"}
                  ></Image>
                </Link>
              </div>
              <div className="desktop-view">
                <SearchBar />
              </div>
            </div>
            <div className="flex">
              <div className="desktop-view flex  justify-between mx-auto">
                <div className="">
                  <ul className="navbar-nav font-normal font-family-jakarta text-black mr-auto flex flex-row">
                    <li className="nav-item hover:bg-sky-300">
                      <Link
                        className="nav-link block pr-2 lg:px-2 py-2  transition duration-150 ease-in-out"
                        href="/"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item hover:bg-sky-300">
                      <Link
                        className="nav-link block pr-2 lg:px-2 py-2  "
                        href="/creator"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Creators
                      </Link>
                    </li>
                    <li className="nav-item hover:bg-sky-300">
                      <Link
                        className="nav-link block pr-2 lg:px-2 py-2 "
                        href="/setings"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Setings
                      </Link>
                    </li>
                    <li className="nav-item hover:bg-sky-300">
                      <span className="nav-link block pr-2 lg:px-2 py-2">
                        <LogoutFunc />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="desktop-view pr-16 text-black font-normal pt-2 ml-4 ">
                <CreateUser />
              </div>

            </div>
            <Burger />
          </div>
        </nav>
      </div>
    </header>
  )
}

