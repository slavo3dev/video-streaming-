import { getVideos } from "lib/videos";
import { useContext, useState } from "react";
import full from "public/fullSendHd.jpg"
import david from "public/davidIcon.jpeg"
import charles from "public/charles.jpeg"
import mma from "public/mma.png"
import ted from "public/ted.jpeg"
import rogan from "public/rogan.jpg"
import { CreatorContext } from "src/context";
import rich from "public/rich.jpeg"
import lex from "public/lex.jpeg"
import { CreatorCard } from "./creator-card";

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
              <CreatorCard name={"Full Send"} photo={full} link={`/video/PXPoKLPiSBM`} />
            </div>
            <div className="w-96" onClick={() => {
              setSelectCreator("creatorTwo");
              context.setCreator("David Dobrik");
              context.setPayment("https://buy.stripe.com/test_9AQbLb4L7del4k89AC")
              context.setImage("https://yt3.googleusercontent.com/ytc/AL5GRJULlbEP4MO2qjUSF3X8op4Errek_FlWpoXfbZfRmA=s176-c-k-c0x00ffffff-no-rj")
            }}>
              <CreatorCard name={"David Dobrik"} photo={david} link={`/video/cl4Fv61rBxw`} />
            </div>
          </div>
          <div className="overflow-x-hidden w-screen flex flex-row">
            <div className="w-96" onClick={() => {
              setSelectCreator("creatorThree");
              context.setCreator("Charles Leclerc");
              context.setPayment("https://buy.stripe.com/test_6oE8yZ0uRcahg2Q5kp")
              context.setImage("https://yt3.ggpht.com/84C9HDPd3LR0C4M7tPqYmd6WvOCNFqVrXKyhDcxpyiuqmraVlNJp_tMWIijr6DI6YFLwOxjPNvo=s176-c-k-c0x00ffffff-no-rj-mo")
            }}>
              <CreatorCard name={"Charles Leclerc"} photo={charles} link={`/video/3fK7HS-dEFg`} />
            </div>
            <div className="w-96" onClick={() => {
              setSelectCreator("creatorFour");
              context.setCreator("FULL SEND MMA");
              context.setPayment("https://buy.stripe.com/test_eVa2aB7Xj4HPg2Q6ou")
              context.setImage("https://yt3.googleusercontent.com/DVtnT7dhsBtGqPYzmzTocgRsGe3Obf86n_hN2aq4zPZNk62tM13Y2CdK0eDe6UKaZwh_teR775c=s900-c-k-c0x00ffffff-no-rj")
            }}>
              <CreatorCard name={"Full Send MMA"} photo={mma} link={`/video/aZYKKmZuy7I`} />
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
              <CreatorCard name={"Rich Roll"} photo={rich} link={`/video/qLta9C3gekk`} />
            </div>

            <div className="w-96" onClick={() => {
              setSelectCreator("creatorSix");
              context.setCreator("TED Talk");
              context.setPayment("https://buy.stripe.com/test_3csaH7elH2zH3g4cMV")
              context.setImage("https://yt3.googleusercontent.com/ytc/AL5GRJWBWUFdKzV57BCapp3zkk8ICiMB7fugor0iSHJ4-g=s176-c-k-c0x00ffffff-no-rj")
            }}>
              <CreatorCard name={"TED Talk"} photo={ted} link={`/video/p3BJriWAJRw`} />
            </div>
          </div>
          <div className="overflow-x-hidden overflow-y-hidden w-screen flex flex-row">
            <div className="w-96" onClick={() => {
              setSelectCreator("creatorSeven");
              context.setCreator("PowerfulJRE");
              context.setPayment("https://buy.stripe.com/test_28o2aB2CZ6PX9EsfZ8")
              context.setImage("https://yt3.googleusercontent.com/ytc/AL5GRJXxw6Z2O6R2LSeCbDFhcBITwJiVxR7-tFOW663eXg=s176-c-k-c0x00ffffff-no-rj")
            }}>
              <CreatorCard name={"Joe Rogan"} photo={rogan} link={`/video/Li-DZXySJQE`} />
            </div>
            <div className="w-96" onClick={() => {
              setSelectCreator("creatorEight");
              context.setCreator("Lex Fridman");
              context.setPayment("https://buy.stripe.com/test_6oE3eFelH8Y5g2Q00b")
              context.setImage("https://yt3.googleusercontent.com/ytc/AL5GRJUDA5espVSAMXGuG8dAWDJJy_yb7RDQYw168-P_beA=s176-c-k-c0x00ffffff-no-rj")
            }}>
              <CreatorCard name={"Lex Fridman"} photo={lex} link={`/video/x4nT1wEwy1Y`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};