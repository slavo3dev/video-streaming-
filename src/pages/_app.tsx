import "src/styles/globals.css"
import type { AppProps } from "next/app";
import { useState } from "react";
import { CreatorContext } from "src/context";


export default function App({ Component, pageProps }: AppProps) {
 
  // const [ creator, setCreator] = useState('Full Send Podcast')
const [creator, setCreator] = useState("Full Send Podcast")
const [payment, setPayment] = useState("https://buy.stripe.com/test_9AQbLbdhD8Y5eYM3cf")
const [image, setImage] = useState("https://yt3.googleusercontent.com/5_TYQJ-59yU45NoK1GpQcRuov8OgZuwuSiS-0X8IveZI3QK_tKaiQxx9BHGqVkGogD08zY-txA=s900-c-k-c0x00ffffff-no-rj")
  return ( 
   <CreatorContext.Provider value = {{creator, setCreator, payment, setPayment, image, setImage}} >
         <Component {...pageProps} />
   </CreatorContext.Provider>
  )
};