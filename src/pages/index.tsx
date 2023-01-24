import { magic } from "lib/magic-client";
import { useEffect, useState } from "react";
import { Card, CardSection } from "src/components/index";
import { Login } from "src/components/index";
import { Header } from "src/components/index"
import { Footer } from "src/components/index"
import { Spinner } from "src/components/index";
import { getVideos } from "lib/videos";
import Link from "next/link";

export default function HomePage() {

   let creatorData1 = getVideos("creatorThree");
   let creatorData2 = getVideos("creatorFour");
   let creatorData3 = getVideos("creatorTwo");
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
 
   let videoSection1= (
<div className="overflow-x-scroll w-screen flex flex-row">
          {creatorData1.map((video: {
            id: string; imgUrl: string;
          }, idx: {}) => {
            return <Link href={`/video/${video.id}`} key={video.id + Math.random()}><Card id={idx} key={video.id} imgUrl={video.imgUrl} /></Link>;
          })}
        </div>
   )

   let videoSection2= (
<div className="overflow-x-scroll w-screen flex flex-row">
          {creatorData2.map((video: {
            id: string; imgUrl: string;
          }, idx: {}) => {
            return <Link href={`/video/${video.id}`} key={video.id + Math.random()}><Card id={idx} key={video.id} imgUrl={video.imgUrl} /></Link>;
          })}
        </div>
   )

   let videoSection3= (
<div className="overflow-x-scroll w-screen flex flex-row">
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