import "src/styles/globals.css"
import type { AppProps } from "next/app";
import { useState } from "react";
import { CreatorContext } from "src/context";



export default function App({ Component, pageProps }:AppProps):JSX.Element {
 
const [creator, setCreator] = useState<string>("Full Send Podcast")
const [state, setState] = useState<string>("creatorOne")
const [payment, setPayment] = useState<string>("https://buy.stripe.com/test_9AQbLbdhD8Y5eYM3cf")
const [image, setImage] = useState<string>("https://yt3.googleusercontent.com/5_TYQJ-59yU45NoK1GpQcRuov8OgZuwuSiS-0X8IveZI3QK_tKaiQxx9BHGqVkGogD08zY-txA=s900-c-k-c0x00ffffff-no-rj")
  return ( 
   <CreatorContext.Provider value = {{creator, setCreator, payment, setPayment, image, setImage, state, setState}} >
         <Component {...pageProps} />
   </CreatorContext.Provider>
  )
};