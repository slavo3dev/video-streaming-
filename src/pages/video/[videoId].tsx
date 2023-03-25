import { useRouter } from "next/router"
import { Card, Profile } from "src/components"
import { getVideos } from "lib/videos"
import  logo  from "public/FClogo.jpg"
import Link from "next/link"
import { CreatorContext } from "src/context"
import { useContext } from "react"
import { Header } from "src/components"

const Video = () => {
  const context = useContext<any>(CreatorContext)
  const selectVideos = context.state
  const creatorVideos = getVideos(selectVideos)
  const isSubscribed = context.subscription
  console.log(isSubscribed)

  const router = useRouter()
  {
    logo
  }
  let url = isSubscribed
    ? `https://www.youtube.com/embed/${router.query.videoId}?origin=http://example.com&controls=1&rel=0&disablekb=1&modestbranding=1`
    : `https://www.youtube.com/embed/${router.query.videoId}?origin=http://example.com&controls=0&rel=0&&disablekb=1&autoplay=1&modestbranding=1&start=10&end=23`

  return (


    <>
     <Header />
    <div className="w-full h-screen flex-col py-12 px-24 overflow-sroll">
      <div className="player rounded-2xl overflow-hidden flex w-full sm:h-4/6 outline-0  ">
        <iframe
          sandbox="allow-forms  allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
          id="ytplayer"
          width="60%"
          height=""
          allowFullScreen
          allow="autoplay"
          src={url}
        ></iframe>
      </div>
      <div className="pb-8 w-[60%]">
        <Profile />
      </div>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {creatorVideos.map(
          (
            video: {
              id: string 
              imgUrl: string
              title: string
            },
            idx: {},
          ) => {
            return (
              <Link href={`/video/${video.id}`} key={video.id + Math.random()}>
                <Card
                  id={idx}
                  key={video.id}
                  imgUrl={video.imgUrl}
                  title={video.title}
                />
              </Link>
            )
          },
        )}
      </div>
    </div>
    </>
  )
}
export default Video