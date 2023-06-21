import { magic } from "lib/magic-client"
import { useEffect, useState } from "react"
import { Login, Header, Footer, Spinner, VideoLine } from "src/components/index"

const Homepage = () => {
  const [auth, setAuth] = useState<string | boolean>("loading")

  useEffect(() => {
    const handleLoggedIn = async () => {
      const isLoggedIn = await magic.user.isLoggedIn()
      if (isLoggedIn) {
        setAuth(true)
      } else {
        setAuth(false)
      }
    }
    handleLoggedIn()
  }, [auth])

  let homePage = (
    <div className="flex flex-col bg-slate-50 min-h-screen w-full">
      <Header />
      <VideoLine />
      <Footer />
    </div>
  )
  let LoginUser = (
    <div>
      <Login />{" "}
    </div>
  )
  let Spinning = <Spinner />

  return auth === "loading" ? Spinning : auth ? homePage : LoginUser
}

export default Homepage
