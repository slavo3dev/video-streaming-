import { FC, useContext } from "react"
import { CreatorContext } from "src/context"
import { CreatorCard } from "./creator-card"
import { constants } from "lib/constants"

export const CardSection: FC = () => {
  const context = useContext(CreatorContext)
  const creators = Object.entries(constants)

  return (
    <>
      <div className="m-16 mt-12 ">
        <p className="text-3xl ml-4 font-bold font-family-jakarta text-black">Famous Creators</p>
          <div className=" pt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-hidden overflow-y-hidden">
          {creators.map(([key, creator]) => (
            <div key={key}>
              <div
                className="w-full"
                onClick={() => {
                  context.setState(creator.state)
                  context.setCreator(creator.name)
                  context.setPayment(creator.paymentLink)
                  context.setImage(creator.image)
                  context.setSubscription(creator.subscription)
                }}
              >
                <CreatorCard
                  name={creator.name}
                  photo={creator.photo}
                  link={`/video/${creator.video}`}
                  avatar={creator.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}