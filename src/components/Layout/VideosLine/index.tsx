import { FC, useEffect, useState } from "react"
import { magic } from "lib/magic-client"
import {NewSectionLine,SubscribedSectionLine,PopularSectionLine,} from "lib/helperFunctions"

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

  let videoSection2 = NewSectionLine()

  let videoSection3 = PopularSectionLine()
  return (
    <div>
      <h1 className="text-4xl  pt-3 ml-6 font-bold text-blue-500">
        Your Videos
      </h1>
      <div className="overflow-scroll">
      {videoSection1}
      </div>
      <h1 className="text-4xl  pt-3 ml-6 font-bold text-blue-500">
        New Videos
      </h1>
      <div className="overflow-scroll">
      {videoSection2}
      </div>
      <h1 className="text-4xl  pt-3 ml-6 font-bold text-blue-500">Other</h1>
      <div className="overflow-scroll">
      {videoSection3}
      </div>
    </div>
  )
}