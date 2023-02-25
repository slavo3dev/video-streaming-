// import Link from "next/link";
// import { FC } from "react";
// import Image from "next/image";

// export const dropMenu : FC = ()=>{



//     const closeWhen = () => {
//     if (listOpen) {
//       setListOpen(false)
//     }
//   }
//     return(
//     <div className="text-blue-500 h-10 m-5 "  >
//       <div onClick={() => setListOpen(!listOpen)} className="text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg text-md px-3 py-4 text-center inline-flex items-center active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out hover:shadow-lg focus:bg-blue-700 focus:shadow-lg ">My Creators <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div>
//       <div className={`${listOpen ? ` visible` : " invisible "}" bg-blue-600 z-50 relative rounded shadow sm:w-32 lg:w-60  dark:bg-gray-700"`}>
//         <ul className="h-48 py-1 overflow-y-auto  text-white  dark:text-gray-200" onClick={() => setListOpen(!listOpen)} >
//           <li onClick={() => { setSelectCreator("creatorOne");
//                                setCreatorTitle("Full Send Podcast");
//                                context.setCreator("Full Send Podcast"); 
//                                context.setPayment("https://buy.stripe.com/test_9AQbLbdhD8Y5eYM3cf")
//                                context.setImage("https://yt3.googleusercontent.com/5_TYQJ-59yU45NoK1GpQcRuov8OgZuwuSiS-0X8IveZI3QK_tKaiQxx9BHGqVkGogD08zY-txA=s900-c-k-c0x00ffffff-no-rj") }}>
//             <Link href="#" className="flex items-center px-4 py-2 hover:bg-sky-500 dark:hover:bg-gray-600 dark:hover:text-white" >
//               <Image width={"200"} height={"400"} className="w-6 h-6 mr-2 rounded-full" src={full} alt="Jese image" />
//               Full Send Podcast
//             </Link>
//           </li>
//           <li onClick={() => { setSelectCreator("creatorTwo");
//                                setCreatorTitle("David Dobrik");
//                                context.setCreator("David Dobrik");
//                                context.setPayment("https://buy.stripe.com/test_9AQbLb4L7del4k89AC")
//                                context.setImage("https://yt3.googleusercontent.com/ytc/AL5GRJULlbEP4MO2qjUSF3X8op4Errek_FlWpoXfbZfRmA=s176-c-k-c0x00ffffff-no-rj") }}>
//             <Link href="#" className="flex items-center px-4 py-2 hover:bg-sky-500 dark:hover:bg-gray-600 dark:hover:text-white">
//               <Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={david} alt="Jese image" />
//               David Dobrik
//             </Link>
//           </li>
//           <li onClick={() => { setSelectCreator("creatorThree");
//                                setCreatorTitle("Charles Leclerc")
//                                context.setCreator("Charles Leclerc");
//                                context.setPayment("https://buy.stripe.com/test_6oE8yZ0uRcahg2Q5kp")
//                                context.setImage("https://yt3.ggpht.com/84C9HDPd3LR0C4M7tPqYmd6WvOCNFqVrXKyhDcxpyiuqmraVlNJp_tMWIijr6DI6YFLwOxjPNvo=s176-c-k-c0x00ffffff-no-rj-mo")  }}>
//             <Link href="#" className="flex items-center px-4 py-2 hover:bg-sky-500 dark:hover:bg-gray-600 dark:hover:text-white">
//               <Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={charles} alt="Jese image" />
//               Charles Leclerc
//             </Link>
//           </li>
//           <li onClick={() => { setSelectCreator("creatorFour");
//                                setCreatorTitle("Full MMA");
//                                context.setCreator("FULL SEND MMA"); 
//                                context.setPayment("https://buy.stripe.com/test_eVa2aB7Xj4HPg2Q6ou")
//                                context.setImage("https://yt3.googleusercontent.com/DVtnT7dhsBtGqPYzmzTocgRsGe3Obf86n_hN2aq4zPZNk62tM13Y2CdK0eDe6UKaZwh_teR775c=s900-c-k-c0x00ffffff-no-rj") }}>
//             <Link href="#" className="flex items-center px-4 py-2 hover:bg-sky-500 dark:hover:bg-gray-600 dark:hover:text-white">
//               <Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={mma} alt="Jese image" />
//               FULL SEND MMA
//             </Link>
//           </li>
//           <li onClick={() => { setSelectCreator("creatorFive"); 
//                                setCreatorTitle("Amy Cudy");
//                                context.setCreator("Amy Cuddy");
//                                context.setPayment("https://buy.stripe.com/test_eVaeXndhDdel9EsfZ5")
//                                context.setImage("https://yt3.googleusercontent.com/DVtnT7dhsBtGqPYzmzTocgRsGe3Obf86n_hN2aq4zPZNk62tM13Y2CdK0eDe6UKaZwh_teR775c=s900-c-k-c0x00ffffff-no-rj")  }}>
//             <Link href="#" className="flex items-center px-4 py-2 hover:bg-sky-500 dark:hover:bg-gray-600 dark:hover:text-white">
//               <Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={rich} alt="Jese image" />
//               Amy Cuddy
//             </Link>
//           </li>
//           <li onClick={() => { setSelectCreator("creatorFour"); context.setCreator("Joseph Mcfall"); context.setPayment("https://buy.stripe.com/test_9AQbLbdhD8Y5eYM3cf") }}>
//             <Link href="#" className="flex items-center px-4 py-2 hover:bg-sky-500 dark:hover:bg-gray-600 dark:hover:text-white">
//               <Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={full} alt="Jese image" />
//               Joseph Mcfall
//             </Link>
//           </li>
//           <li onClick={() => { setSelectCreator("creatorFour"); context.setCreator("Roberta Casa"); context.setPayment("https://buy.stripe.com/test_9AQbLbdhD8Y5eYM3cf") }}>
//             <Link href="#" className="flex items-center px-4 py-2 hover:bg-sky-500 dark:hover:bg-gray-600 dark:hover:text-white">
//               <Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={charles} alt="Jese image" />
//               Roberta Casa
//             </Link>
//           </li>
//           <li onClick={() => { setSelectCreator("creatorFour"); context.setCreator("Neil Sims"); context.setPayment("https://buy.stripe.com/test_9AQbLbdhD8Y5eYM3cf")  }}>
//             <Link href="#" className="flex items-center px-4 py-2 hover:bg-sky-500 dark:hover:bg-gray-600 dark:hover:text-white">
//               <Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={full} alt="Jese image" />
//               Neil Sims
//             </Link>
//           </li >
//         </ul>
//         <Link href="#" className="flex items-center p-3 text-sm font-medium text-blue-600 border-t border-gray-200 bg-gray-50 dark:border-gray-600 hover:bg-sky-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline">
//           <svg className="w-5 h-5 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
//           Add Creator
//         </Link> 
//       </div>
//     </div>)