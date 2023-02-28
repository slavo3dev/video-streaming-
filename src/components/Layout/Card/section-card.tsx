import { getVideos } from "lib/videos";
import { useContext, useState } from "react";
import { CreatorContext } from "src/context";
import { CreatorCard } from "./creator-card";
import { constants } from "lib/constants";

export const CardSection = () => {
  const context = useContext(CreatorContext);
  const [selectCreator, setSelectCreator] = useState<string>("creatorOne");

  let creatorData = getVideos(selectCreator);

  return (
    <>
      <div className="">
        <div className="flex flex-col md:flex-row">
          <div className="overflow-x-hidden overflow-y-hidden w-screen flex flex-row">
            <div className="w-96" onClick={() => {
              setSelectCreator("creatorOne");
              context.setCreator(constants.creatorOne.name)
              context.setPayment(constants.creatorOne.paymentLink)
              context.setImage(constants.creatorOne.image)
            }}>
              <CreatorCard name={constants.creatorOne.name} photo={constants.creatorOne.photo} link={`/video/${constants.creatorOne.video}`} />
            </div>
            <div className="w-96" onClick={() => {
              setSelectCreator("creatorTwo");
              context.setCreator(constants.creatorTwo.name);
              context.setPayment(constants.creatorTwo.paymentLink)
              context.setImage(constants.creatorTwo.image)
            }}>
              <CreatorCard name={constants.creatorTwo.name} photo={constants.creatorTwo.photo} link={`/video/${constants.creatorTwo.video}`} />
            </div>
          </div>
          <div className="overflow-x-hidden w-screen flex flex-row">
            <div className="w-96" onClick={() => {
              setSelectCreator("creatorThree");
              context.setCreator(constants.creatorThree.name);
              context.setPayment(constants.creatorThree.paymentLink)
              context.setImage(constants.creatorThree.image)
            }}>
              <CreatorCard name={constants.creatorThree.name} photo={constants.creatorThree.photo} link={`/video/${constants.creatorThree.video}`} />
            </div>
            <div className="w-96" onClick={() => {
              setSelectCreator("creatorFour");
              context.setCreator(constants.creatorFour.name);
              context.setPayment(constants.creatorFour.paymentLink)
              context.setImage(constants.creatorFour.image)
            }}>
              <CreatorCard name={constants.creatorFour.name} photo={constants.creatorFour.photo} link={`/video/${constants.creatorFour.video}`} />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="overflow-x-hidden overflow-y-hidden w-screen flex flex-row">
            <div className="w-96" onClick={() => {
              setSelectCreator("creatorFive");
              context.setCreator(constants.creatorFive.name);
              context.setPayment(constants.creatorFive.paymentLink)
              context.setImage(constants.creatorFive.image)
            }}>
              <CreatorCard name={constants.creatorFive.name} photo={constants.creatorFive.photo} link={`/video/${constants.creatorFive.video}`} />
            </div>

            <div className="w-96" onClick={() => {
              setSelectCreator("creatorSix");
              context.setCreator(constants.creatorSix.name);
              context.setPayment(constants.creatorSix.paymentLink)
              context.setImage(constants.creatorSix.image)
            }}>
              <CreatorCard name={constants.creatorSix.name} photo={constants.creatorSix.photo} link={`/video/${constants.creatorSix.video}`} />
            </div>
          </div>
          <div className="overflow-x-hidden overflow-y-hidden w-screen flex flex-row">
            <div className="w-96" onClick={() => {
              setSelectCreator("creatorSeven");
              context.setCreator(constants.creatorSeven.name);
              context.setPayment(constants.creatorSeven.paymentLink)
              context.setImage(constants.creatorSeven.image)
            }}>
              <CreatorCard name={constants.creatorSeven.name} photo={constants.creatorSeven.photo} link={`/video/${constants.creatorSeven.video}`} />
            </div>
            <div className="w-96" onClick={() => {
              setSelectCreator("creatorEight");
              context.setCreator(constants.creatorEight.name);
              context.setPayment(constants.creatorEight.paymentLink)
              context.setImage(constants.creatorEight.image)
            }}>
              <CreatorCard name={constants.creatorEight.name} photo={constants.creatorEight.photo} link={`/video/${constants.creatorSeven.video}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};