import { VideoType } from "./types"
import { getVideos } from "./videos"
import { useContext } from "react"
import { CreatorContext } from "src/context"
import { constants } from "./constants"
import Link from "next/link"
import { Card } from "src/components"
const data: Data = require("data/data-videos.json")

interface Data {
  [key: string]: {
    active: any
    state: string
    creatorOne: {
      active: boolean
      items: {
        kind: string
        etag: string
        id: {
          kind: string
          videoId: string
        }
        snippet: {
          publishedAt: string
          channelId: string
          title: string
          description: string
          thumbnails: any
          channelTitle: string
          liveBroadcastContent: string
          publishTime: string
        }
      }[]
    }
  }
}

export const SubscribedSectionLine = () => {
  const context = useContext(CreatorContext)
  const subscribedVideos = (): VideoType[] => {
    let activeVideos: VideoType[] = []

    for (const creator in data) {
      const creatorData = data[creator]
      if (creatorData.active) {
        const videos = getVideos(creator)
        for (const video of videos) {
          activeVideos.push(video)
        }
      }
    }

    for (let i = activeVideos.length - 1; i > 0; i--) {
      const mix = Math.floor(Math.random() * (i + 1))
      const temp = activeVideos[i]
      activeVideos[i] = activeVideos[mix]
      activeVideos[mix] = temp
    }
    return activeVideos
  }

  function subscribedContent(Creator: string, Images: string, State: string) {
    context.setCreator(Creator)
    context.setImage(Images)
    context.setSubscription(true)
    context.setState(State)
  }

  return (
    <div className="overflow-x-scroll w-screen flex flex-row">
      {subscribedVideos().map(
        (
          video: {
            id: string
            imgUrl: string
            title: string
            channelName: string
            stateName: string
          },
          idx: {},
        ) => {
          return (
            <Link
              onClick={() =>
                subscribedContent(
                  video.channelName,
                  video.imgUrl,
                  video.stateName,
                )
              }
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
