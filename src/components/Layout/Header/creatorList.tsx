import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { getVideos } from "lib/videos";
import Image from "next/image";
import full from "public/fullsendpodcast.jpeg"
import david from "public/david.jpeg"
import charles from "public/charles.jpeg"
import mma from "public/mma.png"

export const CreatorList : FC = () => {
  const [listOpen, setListOpen] = useState(false);
  const [selectCreator, setSelectCreator] = useState<string>("creatorOne");

  useEffect(() => {
    getVideos(selectCreator)
  }, [selectCreator])

  return (
    <div className="lg:absolute lg:inset-y-0" >
      <div onClick={() => setListOpen(!listOpen)} className="text-white lg:bg-sky-500 sm:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-md lg:px-3 py-4 text-center inline-flex lg:items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">My Creators <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div>
      <div className={`${listOpen ? ` visible` : " invisible "}"z-10 bg-white rounded shadow sm:w-32 lg:w-60  dark:bg-gray-700"`}>
        <ul className="h-48 py-1 overflow-y-auto  text-white " >
          <li onClick={() => setSelectCreator("creatorOne")}>
            <Link href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" >
              <Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={full} alt="Jese image" />
              Full Send Podcast
            </Link>
          </li>
          <li onClick={() => setSelectCreator("creatorTwo")}>
            <Link href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={david} alt="Jese image" />
              David Dobrik
            </Link>
          </li>
          <li onClick={() => setSelectCreator("creatorTree")}>
            <Link href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={charles} alt="Jese image" />
              Charles Leclerc
            </Link>
          </li>
          <li onClick={() => setSelectCreator("creatorFour")}>
            <Link href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={mma} alt="Jese image" />
              FULL SEND MMA
            </Link>
          </li>
          <li onClick={() => setSelectCreator("creatorFive")}>
            <Link href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={david} alt="Jese image" />
              Amy Cuddy
            </Link>
          </li>
          <li onClick={() => setSelectCreator("creatorFive")}>
            <Link href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={full} alt="Jese image" />
              Joseph Mcfall
            </Link>
          </li>
          <li onClick={() => setSelectCreator("creatorFive")}>
            <Link href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={charles} alt="Jese image" />
              Roberta Casa
            </Link>
          </li>
          <li onClick={() => setSelectCreator("creatorFive")}>
            <Link href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={full} alt="Jese image" />
              Neil Sims
            </Link>
          </li >
        </ul>
        <Link href="#" className="flex items-center p-3 text-sm font-medium text-blue-600 border-t border-gray-200 bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline">
          <svg className="w-5 h-5 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
          Add Creator
        </Link>
      </div>
    </div>
  )
}