import { useRouter } from "next/router"; //using useRouter hook so we can dinamically route to video based on ID
import React from "react";

const Video = () => {
  const router = useRouter();
  console.log({ router });
  return (
    <div className="w-full h-screen bg-blue-600" onClick={() => router.push("/")}>
      <div className="absolute player left-10 right-10 m-0-auto w-11/12 self-center bottom-10 top-24 outline-0 rounded-xl ">
        <iframe
          id="ytplayer"
          width="100%"
          height="100%"
          allowFullScreen
          src={`https://www.youtube.com/embed/${router.query.videoId}?autoplay=0&origin=http://example.com&controls=0&rel=0`}
        ></iframe>
      </div>
    </div>
  );
};
export default Video;