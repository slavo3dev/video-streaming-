import { VideoType } from "./types"
import { getVideos } from "./videos"
import { useContext } from "react"
import { CreatorContext } from "src/context"
import { constants } from "./constants"
import Link from "next/link"
import { Card } from "src/components"

export const SubscribedSectionLine: any = () => {

  
  let subscribedVideos: VideoType[] = getVideos("")
  const context = useContext(CreatorContext)
  function subscribedContent() {
    context.setState(constants.creatorOne.state)
    context.setCreator(constants.creatorOne.name)
    context.setPayment(constants.creatorOne.paymentLink)
    context.setImage(constants.creatorOne.image)
    context.setSubscription(constants.creatorOne.subscription)
  }

  return (
    <div className="overflow-x-scroll w-screen flex flex-row">
      {subscribedVideos.map(
        (
          video: {
            id: string
            imgUrl: string
            title: string
            channelName: string
          },
          idx: {},
        ) => {
          return (
            <Link
              onClick={() => subscribedContent()}
              href={`/video/${video.id}`}
              key={video.id + Math.random()}
            >
              <Card
                id={idx}
                key={video.id}
                imgUrl={video.imgUrl}
                title={video.title}
                name={video.channelName}
              />
            </Link>
          )
        },
      )}
    </div>
  )
}

export const NewSectionLine = () => {
  const context = useContext(CreatorContext)
  function newContent() {
    context.setState(constants.creatorTwo.state)
    context.setCreator(constants.creatorTwo.name)
    context.setPayment(constants.creatorTwo.paymentLink)
    context.setImage(constants.creatorTwo.image)
    context.setSubscription(constants.creatorTwo.subscription)
  }

  let newVideos: VideoType[] = getVideos("creatorTwo")

  return (
    <div className="overflow-x-scroll w-screen  flex flex-row">
      {newVideos.map(
        (
          video: {
            id: string
            imgUrl: string
            title: string
            channelName: string
          },
          idx: {},
        ) => {
          return (
            <Link
              onClick={() => newContent()}
              href={`/video/${video.id}`}
              key={video.id + Math.random()}
            >
              <Card
                id={idx}
                key={video.id}
                imgUrl={video.imgUrl}
                title={video.title}
                name={video.channelName}
              />
            </Link>
          )
        },
      )}
    </div>
  )
}

export const PopularSectionLine = () => {
  let popularVideos: VideoType[] = getVideos("creatorSeven")
  function popularContent() {
    context.setState(constants.creatorSeven.state)
    context.setCreator(constants.creatorSeven.name)
    context.setPayment(constants.creatorSeven.paymentLink)
    context.setImage(constants.creatorSeven.image)
    context.setSubscription(constants.creatorSeven.subscription)
  }
  const context = useContext(CreatorContext)
  return (
    <div className="overflow-x-scroll w-screen  flex flex-row">
      {popularVideos.map(
        (
          video: {
            id: string
            imgUrl: string
            title: string
            channelName: string
          },
          idx: {},
        ) => {
          return (
            <Link
              onClick={() => popularContent()}
              href={`/video/${video.id}`}
              key={video.id + Math.floor(Math.random() * Date.now())}
            >
              <Card
                id={idx}
                key={video.id}
                imgUrl={video.imgUrl}
                title={video.title}
                name={video.channelName}
              />
            </Link>
          )
        },
      )}
    </div>
  )
}
