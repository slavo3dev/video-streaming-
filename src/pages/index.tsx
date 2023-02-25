import { magic } from "lib/magic-client";
import { useContext, useEffect, useState } from "react";
import { Card, Login, Header, Footer, Spinner } from "src/components/index";
import { getVideos } from "lib/videos";
import Link from "next/link";
import { CreatorContext } from "src/context";

export default function HomePage() {

  let creatorData1 = getVideos("creatorOne");
  let creatorData2 = getVideos("creatorTwo");
  let creatorData3 = getVideos("creatorSeven");

  const context = useContext(CreatorContext)
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
  }, [auth])

  let videoSection1 = (
    <div className="overflow-x-scroll w-screen flex flex-row"
      onClick={() => {
        context.setCreator("Full Send Podcast");
        context.setPayment("https://buy.stripe.com/test_9AQbLbdhD8Y5eYM3cf")
        context.setImage("https://yt3.googleusercontent.com/5_TYQJ-59yU45NoK1GpQcRuov8OgZuwuSiS-0X8IveZI3QK_tKaiQxx9BHGqVkGogD08zY-txA=s900-c-k-c0x00ffffff-no-rj")
      }} >
      {creatorData1.map((video: {
        id: string; imgUrl: string;
      }, idx: {}) => {
        return <Link href={`/video/${video.id}`} key={video.id + Math.random()}><Card id={idx} key={video.id} imgUrl={video.imgUrl} /></Link>;
      })}
    </div>
  )

  let videoSection2 = (
    <div className="overflow-x-scroll w-screen flex flex-row"
      onClick={() => {
        context.setCreator("David Dobrik");
        context.setPayment("https://buy.stripe.com/test_9AQbLb4L7del4k89AC")
        context.setImage("https://yt3.googleusercontent.com/ytc/AL5GRJULlbEP4MO2qjUSF3X8op4Errek_FlWpoXfbZfRmA=s176-c-k-c0x00ffffff-no-rj")
      }}
    >
      {creatorData2.map((video: {
        id: string; imgUrl: string;
      }, idx: {}) => {
        return <Link href={`/video/${video.id}`} key={video.id + Math.random()}><Card id={idx} key={video.id} imgUrl={video.imgUrl} /></Link>;
      })}
    </div>
  )

  let videoSection3 = (
    <div className="overflow-x-scroll w-screen flex flex-row"
      onClick={() => {
        context.setCreator("PowerfulJRE");
        context.setPayment("https://buy.stripe.com/test_28o2aB2CZ6PX9EsfZ8")
        context.setImage("https://yt3.googleusercontent.com/ytc/AL5GRJXxw6Z2O6R2LSeCbDFhcBITwJiVxR7-tFOW663eXg=s176-c-k-c0x00ffffff-no-rj")
      }}>
      {creatorData3.map((video: {
        id: string; imgUrl: string;
      }, idx: {}) => {
        return <Link href={`/video/${video.id}`} key={video.id + Math.random()}><Card id={idx} key={video.id} imgUrl={video.imgUrl} /></Link>;
      })}
    </div>
  )
  let homePage = (
    <div className="flex flex-col min-h-screen w-full">
      <div className="lg:absolute lg:inset-y-0">
      </div>
      <Header />
      <h1 className="text-4xl  pt-3 ml-6 font-bold text-blue-500">Your Videos</h1>
      {videoSection1}
      <h1 className="text-4xl  pt-3 ml-6 font-bold text-blue-500">New Videos</h1>
      {videoSection2}
      <h1 className="text-4xl  pt-3 ml-6 font-bold text-blue-500">Other</h1>
      {videoSection3}
      <Footer />
    </div>
  )
  let LoginUser = (
    <div><Login /> </div>
  )
  let Spinning = (
    <Spinner />
  )

  return auth === 'loading' ? Spinning : auth ? homePage : LoginUser
}