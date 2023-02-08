import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import { Profile } from "src/components";
import { dataVideos } from 'data/data';
import { getVideos } from 'lib/videos';

const creatorData = getVideos('creatorOne');
const Video = () => {

  const router = useRouter();

  const [isSubscribe, setIsSubscribe] = useState(false);

  useEffect(() => {
    const handleSubscribe = async () => {

      try {
        const sub = true;
        if (sub) {
          setIsSubscribe(true);
        }
        else {
          setIsSubscribe(false);
        }
      }
      catch (error) {
        console.log("Error", error)
      }
    }
    handleSubscribe()
  }, [isSubscribe]
  )

  let url = isSubscribe ? `https://www.youtube.com/embed/${router.query.videoId}?origin=http://example.com&controls=0&rel=0&controls=0&disablekb=1&autoplay=1&modestbranding=1&start=10&end=23` : `https://www.youtube.com/embed/${router.query.videoId}?origin=http://example.com&controls=1&rel=0&disablekb=1&modestbranding=1`;


  return (
    <div className="w-full h-screen flex-col p-6 px-10 overflow-sroll">
      <div className="bg-blue-500 mb-8 hover:bg-blue-700 text-white font-bold flex space-x-2 justify-center py-2 px-4 rounded-full w-24 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out hover:shadow-lg focus:bg-blue-700 focus:shadow-lg" 
       onClick={() => router.back()}>BACK</div>
      <h5>Preview</h5>
      <div className="player flex left-10 right-10 w-full h-4/6 outline-0 rounded-xl ">
        <iframe
          sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
          id="ytplayer"
          width="100%"
          height="100%"
          allowFullScreen
          allow="autoplay"
          src={url}
        ></iframe>
      </div>
      <div className="pb-8">
       <Profile />; 
    </div>
    </div>
  
  );
        }
export default Video;