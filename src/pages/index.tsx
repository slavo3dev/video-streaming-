import { magic } from "lib/magic-client";
import { useEffect, useState } from "react";
import { CardSection } from "src/components/index";
import { Login } from "src/components/index";
import { Header } from "src/components/index"
import { Footer } from "src/components/index"
import { Spinner } from "src/components/index";

export default function HomePage() {
  
  const[auth, setAuth] = useState<string | boolean>("loading")
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
  },[auth])
 
  let homePage = (
  <div className="flex flex-col min-h-screen w-full">
      <div className="lg:absolute lg:inset-y-0 " >
      </div>
      <Header />
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
    <Spinner/>
  )
  
  return auth === 'loading' ?  Spinning : auth ? homePage : LoginUser
  

}
