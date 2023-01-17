import { useRouter } from "next/router"; //using useRouter hook so we can dinamically route to video based on ID
import React from "react";

const Video = () => {
  const router = useRouter();
  console.log({ router });
  return (
    <div className="w-full h-screen p-6 px-10 bg-blue-600">
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold flex space-x-2 justify-center py-2 px-4 rounded-full w-24 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out hover:shadow-lg focus:bg-blue-700 focus:shadow-lg" onClick={() => router.push("/")}>BACK</div>
      <div className="absolute player left-10 right-10 m-0-auto w-11/12 self-center bottom-10 top-24 outline-0 rounded-xl ">
        <iframe
          sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
          id="ytplayer"
          width="100%"
          height="100%"
          allowFullScreen
          allow="autoplay"

          src={`https://www.youtube.com/embed/${router.query.videoId}?origin=http://example.com&controls=0&rel=0&controls=0&disablekb=1&autoplay=1&modestbranding=1&start=10&end=23`}
        ></iframe>
      </div>
    </div>
  );
};
export default Video;