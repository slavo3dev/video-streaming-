import { magic } from "lib/magic-client"
import { useEffect, useState } from "react"
import { Login, Header, Footer, Spinner, CardSection } from "src/components"

export default function CreatorPage() {
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

  let creatorPage = (
    <>
      <Header />
      <CardSection />
      <Footer />
    </>
  )
  let LoginUser = (
    <div>
      <Login />{" "}
    </div>
  )
  let Spinning = <Spinner />

  return auth === "loading" ? Spinning : auth ? creatorPage : LoginUser
}
