import Link from "next/link";
import { getVideos } from "lib/videos";
import { useContext, useState } from "react";
import Image from "next/image";
import full from "public/fullSendHd.jpg"
import david from "public/davidIcon.jpeg"
import charles from "public/charles.jpeg"
import mma from "public/mma.png"
import ted from "public/ted.jpeg"
import rogan from "public/rogan.jpg"
import { CreatorContext } from "src/context";
import rich from "public/rich.jpeg"
import lex from "public/lex.jpeg"

export const CardSection = () => {
  const context = useContext(CreatorContext);
  const [selectCreator, setSelectCreator] = useState("creatorOne");
 

  let creatorData = getVideos(selectCreator);

  return (
    <>
      <div className="">
        <div className="flex flex-col md:flex-row">
          <div className="overflow-x-hidden overflow-y-hidden w-screen flex flex-row">
            <div className="w-96" onClick={() => {
              setSelectCreator("creatorOne");
              context.setCreator("Full Send Podcast");
              context.setPayment("https://buy.stripe.com/test_9AQbLbdhD8Y5eYM3cf")
              context.setImage("https://yt3.googleusercontent.com/5_TYQJ-59yU45NoK1GpQcRuov8OgZuwuSiS-0X8IveZI3QK_tKaiQxx9BHGqVkGogD08zY-txA=s900-c-k-c0x00ffffff-no-rj")
            }}>
              <Link href={`/video/PXPoKLPiSBM`} className="flex items-center px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white" >
                <div className="relative transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-400">
                  <Image width={"400"} height={"200"} className="mr-2 " src={full} alt="Jese image" />
                  <div className="absolute bottom-1 bg-black opacity-75 w-full text-white font-semibold text-base lg:text-3xl">
                    <span className="bottom-4 md:ml-4 ">Full Send</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-96" onClick={() => {
              setSelectCreator("creatorTwo");
              context.setCreator("David Dobrik");
              context.setPayment("https://buy.stripe.com/test_9AQbLb4L7del4k89AC")
              context.setImage("https://yt3.googleusercontent.com/ytc/AL5GRJULlbEP4MO2qjUSF3X8op4Errek_FlWpoXfbZfRmA=s176-c-k-c0x00ffffff-no-rj")
            }}>
              <Link href={`/video/cl4Fv61rBxw`} className="flex items-center px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">
                <div className="relative transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-400">
                  <Image width={"400"} height={"200"} className="mr-2" src={david} alt="Jese image" />
                  <div className="absolute bottom-1 opacity-75 bg-black w-full text-white font-semibold sm:text-base md:text-xl lg:text-3xl">
                    <span className=" bottom-4 md:ml-4 ">David Dobrik</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="overflow-x-hidden w-screen flex flex-row">
            <div className="w-96" onClick={() => {
              setSelectCreator("creatorThree");
              context.setCreator("Charles Leclerc");
              context.setPayment("https://buy.stripe.com/test_6oE8yZ0uRcahg2Q5kp")
              context.setImage("https://yt3.ggpht.com/84C9HDPd3LR0C4M7tPqYmd6WvOCNFqVrXKyhDcxpyiuqmraVlNJp_tMWIijr6DI6YFLwOxjPNvo=s176-c-k-c0x00ffffff-no-rj-mo")
            }}>
              <Link href={`/video/3fK7HS-dEFg`} className="flex items-center px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">
                <div className="relative transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-400">
                  <Image width={"400"} height={"200"} className="mr-2 " src={charles} alt="Jese image" />
                  <div className="absolute bottom-1 opacity-75 bg-black w-full text-white font-semibold lg:text-3xl">
                    <span className=" bottom-4 md:ml-4 ">Charles Leclerc</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-96" onClick={() => {
              setSelectCreator("creatorFour");
              context.setCreator("FULL SEND MMA");
              context.setPayment("https://buy.stripe.com/test_eVa2aB7Xj4HPg2Q6ou")
              context.setImage("https://yt3.googleusercontent.com/DVtnT7dhsBtGqPYzmzTocgRsGe3Obf86n_hN2aq4zPZNk62tM13Y2CdK0eDe6UKaZwh_teR775c=s900-c-k-c0x00ffffff-no-rj")
            }}>
              <Link href={`/video/aZYKKmZuy7I`} className="flex items-center px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">
                <div className="relative transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-400">
                  <Image width={"400"} height={"200"} className="mr-2 " src={mma} alt="Jese image" />
                  <div className="absolute bottom-1 opacity-75 bg-black w-full text-white font-semibold lg:text-3xl">
                    <span className=" bottom-4 md:ml-4 ">Full Send MMA</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="overflow-x-hidden overflow-y-hidden w-screen flex flex-row">
            <div className="w-96" onClick={() => {
              setSelectCreator("creatorFive");
              context.setCreator("Rich Roll");
              context.setPayment("https://buy.stripe.com/test_28obLb4L74HP03S7sA")
              context.setImage("https://yt3.googleusercontent.com/UXI7ZyoQPoHhboBBUD8pscuva2dd-hlTxMjRDHVg96eoHOfiru5CFoWvkVe8pFiyvlB33_ceow=s176-c-k-c0x00ffffff-no-rj")
            }}>
              <Link href={`/video/qLta9C3gekk`} className="flex items-center px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">
                <div className="relative transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-400">
                  <Image width={"400"} height={"200"} className=" overflow-hiden mr-2" src={rich} alt="Jese image" />
                  <div className="absolute bottom-1 opacity-75 bg-black w-full text-white font-semibold lg:text-3xl">
                    <span className=" bottom-4 md:ml-4 ">Rich Roll</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="w-96" onClick={() => {
              setSelectCreator("creatorSix");
              context.setCreator("TED Talk");
              context.setPayment("https://buy.stripe.com/test_3csaH7elH2zH3g4cMV")
              context.setImage("https://yt3.googleusercontent.com/ytc/AL5GRJWBWUFdKzV57BCapp3zkk8ICiMB7fugor0iSHJ4-g=s176-c-k-c0x00ffffff-no-rj")
            }}>
              <Link href={`/video/p3BJriWAJRw`} className="flex items-center px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">
                <div className="relative transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-400">
                  <Image width={"400"} height={"200"} className="mr-2" src={ted} alt="Jese image" />
                  <div className="absolute bottom-1 opacity-75 bg-black w-full text-white font-semibold lg:text-3xl">
                    <span className=" bottom-4 md:ml-4 ">TED Talk</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="overflow-x-hidden overflow-y-hidden w-screen flex flex-row">
            <div className="w-96" onClick={() => {
              setSelectCreator("creatorSeven");
              context.setCreator("PowerfulJRE");
              context.setPayment("https://buy.stripe.com/test_28o2aB2CZ6PX9EsfZ8")
              context.setImage("https://yt3.googleusercontent.com/ytc/AL5GRJXxw6Z2O6R2LSeCbDFhcBITwJiVxR7-tFOW663eXg=s176-c-k-c0x00ffffff-no-rj")
            }}>
              <Link href={`/video/Li-DZXySJQE`} className="flex items-center px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">
                <div className="relative transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-400">
                  <Image width={"400"} height={"200"} className=" mr-2 " src={rogan} alt="Jese image" />
                  <div className="absolute bottom-1 opacity-75 bg-black w-full text-white font-semibold lg:text-3xl ">
                    <span className=" bottom-4 md:ml-4">PowerfulJRE</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="w-96" onClick={() => {
              setSelectCreator("creatorEight");
              context.setCreator("Lex Fridman");
              context.setPayment("https://buy.stripe.com/test_6oE3eFelH8Y5g2Q00b")
              context.setImage("https://yt3.googleusercontent.com/ytc/AL5GRJUDA5espVSAMXGuG8dAWDJJy_yb7RDQYw168-P_beA=s176-c-k-c0x00ffffff-no-rj")
            }}>
              <Link href={`/video/x4nT1wEwy1Y`} className="flex items-center px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">
                <div className="relative transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-400">
                  <Image width={"400"} height={"200"} className="mr-2 r" src={lex} alt="Jese image" />
                  <div className="absolute bottom-1 opacity-75 bg-black w-full text-white font-semibold md:text-xl lg:text-3xl ">
                    <span className=" bottom-4 md:ml-4 ">Lex Fridman</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
