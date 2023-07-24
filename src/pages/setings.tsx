import { Header } from "src/components"
import { Footer } from "src/components"
import { useRouter } from "next/router"
import { magic } from "lib/magic-client"
import { useEffect, useState } from "react"
import { Spinner } from "src/components/index"
import { SetingsMenu } from "src/components/Layout"

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
    <div className="flex flex-col bg-slate-50 min-h-screen w-full">
      <Header />
      <SetingsMenu />
      <Footer />
    </div>
  )
  return auth === "loading" ? Spinning : auth ? setingsPage : Spinning
}
