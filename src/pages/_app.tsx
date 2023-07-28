import "src/styles/globals.css"
import type { AppProps } from "next/app"
import { useState, useEffect } from "react"
import { CreatorContext } from "src/context"
import { Layout } from "src/components"

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [creator, setCreator] = useState(() => {
    if (typeof window !== "undefined") {
      const storedCreator = localStorage.getItem("creator")
      return storedCreator || "Full Send Podcast"
    }
    return "Full Send Podcast"
  })
  const [state, setState] = useState(() => {
    if (typeof window !== "undefined") {
      const storedState = localStorage.getItem("state")
      return storedState || "creatorOne"
    }
    return "creatorOne"
  })
  const [payment, setPayment] = useState(() => {
    if (typeof window !== "undefined") {
      const storedPayment = localStorage.getItem("payment")
      return storedPayment || "https://buy.stripe.com/test_9AQbLbdhD8Y5eYM3cf"
    }
    return "https://buy.stripe.com/test_9AQbLbdhD8Y5eYM3cf"
  })
  const [image, setImage] = useState(() => {
    if (typeof window !== "undefined") {
      const storedImage = localStorage.getItem("image")
      return (
        storedImage ||
        "https://yt3.googleusercontent.com/5_TYQJ-59yU45NoK1GpQcRuov8OgZuwuSiS-0X8IveZI3QK_tKaiQxx9BHGqVkGogD08zY-txA=s900-c-k-c0x00ffffff-no-rj"
      )
    }
    return "https://yt3.googleusercontent.com/5_TYQJ-59yU45NoK1GpQcRuov8OgZuwuSiS-0X8IveZI3QK_tKaiQxx9BHGqVkGogD08zY-txA=s900-c-k-c0x00ffffff-no-rj"
  })
  const [subscription, setSubscription] = useState(() => {
    if (typeof window !== "undefined") {
      const storedSubscription = localStorage.getItem("subscription")
      return storedSubscription === "true"
    }
    return "false"
  })

  // Update local storage whenever the state changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("creator", creator)
      localStorage.setItem("state", state)
      localStorage.setItem("payment", payment)
      localStorage.setItem("image", image)
      localStorage.setItem("subscription", subscription.toString())
    }
  }, [creator, state, payment, image, subscription])

  return (
    <CreatorContext.Provider
      value={{
        creator,
        setCreator,
        payment,
        setPayment,
        image,
        setImage,
        state,
        setState,
        subscription,
        setSubscription,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CreatorContext.Provider>
  )
}
