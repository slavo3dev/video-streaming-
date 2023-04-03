import Link from "next/link";
import Image from "next/image";
import type { creatorCardProps } from "lib/types";
import { FC } from "react";

export const CreatorCard: FC<creatorCardProps> = ({name, photo, link, avatar})=>{

return(
    <>
            <Link href={link} className="flex items-center px-2 py-2 lg:px-4 dark:hover:bg-gray-600 dark:hover:text-white">
                <div className="relative transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-400">
                  <Image width={340} height={420} className="mr-2 rounded-lg" src={photo} alt="Jese image">
                  </Image>
                  <div className="absolute bottom-0 background-gradient rounded-lg  w-full h-32 md:h-64 text-white font-family-jakarta md:text-xl lg:text-3xl ">
                    <div className="absolute bottom-1">
                      <div className="flex">
                    <Image src={avatar} width={36} height={36} className=" mr-2 rounded-full ml-4" alt={"avatar"} />
                    <span className=" bottom-2 text-sm md:text-lg"> {name}</span>
                    </div>
                    </div>

                  </div>
                </div>
              </Link>
          </>
)

};