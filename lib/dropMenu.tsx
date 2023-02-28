import Link from "next/link";
import { useContext, useState } from "react";
import CreatorContext from "src/context/CreatorContext";
import { constants } from "./constants";
import { CreatorCard } from "src/components/Layout/Card/creator-card";

export const SearchBar = ()=>{

const creators = Object.entries(constants);

const [listOpen, setListOpen]= useState<boolean>(false);
const context = useContext(CreatorContext);
  const [selectCreator, setSelectCreator] = useState<string>("creatorOne");

    return(
    <div className="text-blue-500 h-10 m-5 "  >
      <div onClick={() => setListOpen(!listOpen)} className="text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg text-md px-3 py-4 text-center inline-flex items-center active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out hover:shadow-lg focus:bg-blue-700 focus:shadow-lg ">My Creators <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div>
      <div className={`${listOpen ? ` visible` : " invisible "}" bg-blue-600 z-50 relative rounded shadow sm:w-32 lg:w-60  dark:bg-gray-700"`}>
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
        <Link href="#" className="flex items-center p-3 text-sm font-medium text-blue-600 border-t border-gray-200 bg-gray-50 dark:border-gray-600 hover:bg-sky-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline">
          <svg className="w-5 h-5 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
          Add Creator
        </Link> 
      </div>
    </div>)}