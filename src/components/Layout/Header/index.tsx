import { FC } from "react"
import Link from "next/link"
import { Burger } from "./burger"
import { magic } from "lib/magic-client"
import { CreateUser } from "lib//userTag"
import { useRouter } from "next/router"

export const Header: FC = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const logout = await magic.user.logout();
      if (logout) {
        router.push('/login')
      }
    } catch (error) {
      console.log("Error", error)
      // Handle errors if required!
    }
  }
  return (
    <header className="header flex w-full items-center bg-sky-500 from-black justify-between px-2 pb6 h-20 z-10">
      <div className="mobile-view text-white">
        <CreateUser />
      </div>
      <div className="flex  items-center py-4 w-full justify-between">
        <nav className="navbar navbar-expand-lg shadow-md py-2 relative flex items-center w-full justify-between">
          <div className="w-full flex flex-wrap items-center justify-between text-white">
            <div className="desktop-view">
              <ul className="navbar-nav mr-auto flex lflex-row">
                <li className="nav-item">
                  <Link
                    className="nav-link block pr-2 lg:px-2 py-2  transition duration-150 ease-in-out"
                    href="/"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link block pr-2 lg:px-2 py-2  "
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light">
                    Creator
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link block pr-2 lg:px-2 py-2 "
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={handleLogout}
                    className="nav-link block pr-2 lg:px-2 py-2 "
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
            <div className="desktop-view" >
              <CreateUser />
            </div>
            <Burger />
          </div>
        </nav>
      </div>
    </header>
  )
};