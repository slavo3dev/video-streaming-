import { getVideos } from "lib/videos";
import { FC, useContext, useState } from "react";
import { CreatorContext } from "src/context";
import {CreatorCard } from "./creator-card";
import { constants } from "lib/constants";

export const CardSection : FC = () => {
  const context = useContext(CreatorContext);
  const [selectCreator, setSelectCreator] = useState<string>("creatorOne");
  const creators = Object.entries(constants);

  let creatorData = getVideos(selectCreator);

  return (
    <>
      <div className="">
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  overflow-x-hidden overflow-y-hidden">
        {creators.map(([key, creator])=><div key={key}>
          <div className="w-full" onClick={() => {
              setSelectCreator("creatorOne");
              context.setCreator(creator.name);
              context.setPayment(creator.paymentLink)
              context.setImage(creator.image)
            }}>
              <CreatorCard name={creator.name} photo={creator.photo} link={`/video/${creator.video}`} />
            </div>
        </div>)}
      </div>
      </div>
    </>
  )
};