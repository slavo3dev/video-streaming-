import data from "data/data-videos.json"

export const getVideos = (creator: any) => {
  console.log("Data: ", data)
  let creatorType = creator ? creator : "creatorFour"
  console.log("Creator: ", creator)
  return data[creatorType].items.map(
    (item: {
      id: any
      snippet: { thumbnails: { high: { url: string } }; title: string }
    }) => {
      //maping through data in order to acces same values for every object in array
      return {
        imgUrl: item.snippet.thumbnails.high.url,
        tittle: item.snippet.title,
        id: item.id.videoId || null,
      }
    },
  )
}

//https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLBCF2DAC6FFB574DE&key=${YOUTUBE_API_KEY}

//export const getVideos = async () => {
//   const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
//   try {
//     const response = await fetch(
//       `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&&key=${YOUTUBE_API_KEY}`); //setting video query as a props
//     const data = await response.json();

//     console.log('Data: ', data)

//     return data.items.map(
//       (item: {
//         id: any,
//         snippet: { thumbnails: { high: { url: string } }, title: string },
//       }) => {
//         //maping through data in order to acces same values for every object in array
//         return {
//           imgUrl: item.snippet.thumbnails.high.url,
//           tittle: item.snippet.title,
//           id: item.id.videoId,
//         };
//       }
//     );
//   } catch (error) {
//     return [""]; //if for some reasons there is an error we are just returning empty array
//   }
// };