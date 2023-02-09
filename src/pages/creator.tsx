import { magic } from "lib/magic-client";
import { useEffect, useState } from "react";
import { CardSection } from "src/components";
import { Login, Header, Footer, Spinner } from "src/components";


export default function CreatorPage() {

  const [auth, setAuth] = useState<string | boolean>("loading")

  useEffect(() => {
    const handleLoggedIn = async () => {
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        setAuth(true)
      } else {
        setAuth(false)
      }
    }
    handleLoggedIn();
  }, [auth]);

  let creatorPage = (
    <div className="flex flex-col min-h-screen w-full">
      <div className="lg:absolute lg:inset-y-0 " >
      </div>
      <Header />
      { /* this neads to be refactor */ }
      <CardSection />
      <CardSection />
      <CardSection />
      <Footer />
    </div>
  )
  let LoginUser = (
    <div><Login /> </div>
  )
  let Spinning = (
    <Spinner />
  )

  return auth === 'loading' ? Spinning : auth ? creatorPage : LoginUser
}