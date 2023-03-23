import Link from "next/link"
import { Header } from "src/components"
import { Footer } from "src/components"
import Image from "next/image"
import { useRouter } from "next/router"
import { magic } from "lib/magic-client"
import { useEffect, useState } from "react"
import { Spinner } from "src/components/index"
import { LogoutFunc } from "lib/loginFunc"

export default function Settings() {
  const [auth, setAuth] = useState<string | boolean>("loading")

  const router = useRouter()

  useEffect(() => {
    const handleLoggedIn = async () => {
      const isLoggedIn = await magic.user.isLoggedIn()
      if (!isLoggedIn) {
        router.push("/")
        setAuth(false)
      } else {
        setAuth(true)
      }
    }
    handleLoggedIn()
  })
  let Spinning = <Spinner />
  let setingsPage = (
    <div className="">
      <Header />
      <div className="min-h-screen w-screen flex overflow-scroll flex-col">
        <h1 className="font-family-jakarta font-bold text-3xl not-italic m-28 ml-36 ">
          Settings
        </h1>
        <div className=" ">
          <ul className=" text-xl ml-36 flex flex-col">
            <li className="py-2 flex tracking-wider ">
              <div className="flex green-hover font-normal text-slate-400 hover:font-bold hover:text-emerald-500">
                <svg
                  className="w-5"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="5" height="30" />
                </svg>
                <Link
                  href={
                    "https://billing.stripe.com/p/login/test_5kAdUk4iN5g05l6000"
                  }
                >
                  <p className="pl-2 pt-4">Manage Subscription</p>
                </Link>
              </div>
            </li>

            <li className="py-2 flex tracking-wider ">
              <div className="flex green-hover font-normal text-slate-400 hover:font-bold hover:text-emerald-500">
                <svg
                  className="w-5"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="5" height="30" />
                </svg>
                <Link
                  href={
                    "https://billing.stripe.com/p/login/test_5kAdUk4iN5g05l6000"
                  }
                >
                  <p className="pl-2 pt-4">Change Password</p>
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <p className="py-2 flex ml-36 pt-36 font-semibold text-xl tracking-wider text-red-500 ">
          <Image
            width={30}
            height={6}
            className=" mr-2 rounded-full"
            src="/../public/LogoutIcon.png"
            alt={"Menu bar"}
          ></Image>
          <LogoutFunc />
        </p>
      </div>
      <Footer />
    </div>
  )
  return auth === "loading" ? Spinning : auth ? setingsPage : Spinning
}