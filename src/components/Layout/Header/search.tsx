import { SetStateAction, useState, useContext } from "react"
import { constants } from "lib/constants"
import { CreatorContext } from "src/context"
import Link from "next/link"
import { CreatorType } from "lib/types"

export const SearchBar = ():JSX.Element => {
  const context = useContext(CreatorContext)
  const [searchInput, setSearchInput] = useState<string>("")
  const creators:[string,CreatorType][] = Object.entries(constants)

  const handleInput = (e: {
    preventDefault: () => void
    target: { value: SetStateAction<string> }
  }) => {
    e.preventDefault()
    setSearchInput(e.target.value)
  }

  return (
    <div className="flex items-center ">
      <div className="relative pl-8 w-80">
        <input
          type="text"
          onChange={handleInput}
          className="bg-white border border-gray-200 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-400 font-thin dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className=" absolute w-full bg-sky-100 flex flex-col ">
          {creators
            .filter(([key, creator]) => {
              const creatorName = creator.name
              const lowerSearchName = creatorName.toLowerCase()
              const lowerSearchInput = searchInput.toLowerCase()
              return (
                lowerSearchInput && lowerSearchName.includes(lowerSearchInput)
              )
            })
            .map(([key, creator]) => (
              <div className="ml-2"
                key={key}
                onClick={() => {
                  context.setState(creator.state)
                  context.setCreator(creator.name)
                  context.setPayment(creator.paymentLink)
                  context.setImage(creator.image)
                  context.setSubscription(creator.subscription)
                }}
              >
                <Link href={`/video/${creator.video}`}>{creator.name} </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
