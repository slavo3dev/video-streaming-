import { FC, useEffect, useState } from "react"
import { magic } from "lib/magic-client"
import {Category1SectionLine,SubscribedSectionLine,Category2SectionLine} from "lib/helperFunctions"

export const VideoLine: FC = () => {
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

  let videoSection1 = SubscribedSectionLine()

  let videoSection2 = Category1SectionLine()

  let videoSection3 = Category2SectionLine()
  return (

    <div className="md:pl-14  pt-8 ">
      <h1 className="text-3xl  ml-6 font-bold font-family-jakarta text-black">
        Your Videos
      </h1>

      <div className="overflow-scroll overflow-y-hidden">{videoSection1}</div>

      <h1 className="text-3xl  pb-4 ml-6 font-bold font-family-jakarta text-black">
        Sport
      </h1>
      <div className="overflow-scroll overflow-y-hidden">{videoSection2}</div>
      <h1 className="text-3xl pb-4  ml-6 font-bold font-family-jakarta text-black">
        Art
      </h1>
      <div className="overflow-scroll overflow-y-hidden">{videoSection3}</div>
    </div>
  )
}

