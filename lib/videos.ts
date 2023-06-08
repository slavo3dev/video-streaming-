import data from "data/data-videos.json"
import type { getVideosType } from "./types"
interface ObjectVideoType {
  creatorOne: {
    items: []
  }
}

export const getVideos: getVideosType = (creator: string) => {
  let creatorType = creator ? creator : "creatorFour"
  return data[creatorType as keyof ObjectVideoType].items.map(
    (item: {
      id: any
      snippet: {
        imgCreator?: string
        thumbnails: { high: { url: string } }
        title: string
        channelTitle: string
      }
    }) => {
      //maping through data in order to acces same values for every object in array
      return {
        imgUrl: item.snippet.thumbnails.high.url,
        title: item.snippet.title,
        id: item.id.videoId,
        channelName: item.snippet.channelTitle,
        stateName: creatorType,
        imgCreator: item.snippet.imgCreator || 
              "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=8"
      }
    },
  )
}