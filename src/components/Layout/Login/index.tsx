import { FC } from "react"
import { useState } from "react"
import { magic } from "lib/magic-client"
import { useRouter } from "next/router"
import Image from "next/image"
export const Login: FC = () => {
  const router = useRouter()
  const [authData, setAuthData] = useState({ email: "", userMsg: "" })
  const handleOnChangeEmail = (e: {
    target: { value: string }
    preventDefault: () => void
  }) => {
    e.preventDefault()
    setAuthData({ email: e.target.value, userMsg: "" })
  }
  const handleLoginWithEmail = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    let emailInput = authData.email
    if (emailInput) {
      // log in a user by their email
      try {
        console.log(emailInput)
        await magic.auth.loginWithMagicLink({
          email: emailInput,
        })
        router.reload()
      } catch (error) {
        // Handle errors if required!
        console.error("Something went wrong logging in", error)
      }
    } else {
      setAuthData({ email: "", userMsg: "Please enter valid email" })
    }
  }
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="center m-0 absolute top-1/4 left-2/4">
        <Image
          width={280}
          height={140}
          src={"/../public/LogoText.png"}
          alt={"FC Logo"}
        ></Image>
      </div>
      <div className="center m-0 absolute top-3/4 left-2/4">
        <form className="items-center h-64 p-2 center left-2/4 justify-start rounded-md text-left flex flex-col relative">
          <div className="flex flex-col ">
            <h1 className="text-slate-400 text-sm font-light">Email</h1>
            <input
              className="email rounded-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.10)] border border-slate-200 p-2 h-12 login-input form-info-email"
              type="email"
              placeholder="Email"
              onChange={handleOnChangeEmail}
            />
          </div>

          <div className="btn pt-6">
            <div className="pb-6">
              <input
                className="accent-green-500"
                value="true"
                type="checkbox"
              />
              <label className="pl-2 ">Remember me</label>
            </div>
            <button
              className="bg-green-600 font-normal login-button h-12 text-white cursor-pointer  rounded-md btn-primary "
              type="submit"
              onClick={handleLoginWithEmail}
            >
              Login
            </button>
            <p className="text-white">{authData.userMsg}</p>
          </div>
          <div className="text-white"></div>
        </form>
      </div>
    </div>
  )
}
