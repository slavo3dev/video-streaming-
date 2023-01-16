import "src/styles/globals.css"
import type { AppProps } from "next/app"


export default function App({ Component, pageProps }: AppProps) {



 
  return ( 
       <>
         <Component {...pageProps} />
      </> 
  )
}



//export default function App({ Component, pageProps }: AppProps) {


//   const router = useRouter();

//   const [isHere, setIsHere] = useState(false);
//   console.log(isHere)
// useEffect(() => {
//     const handleLoggedIn = async () => {
//       const isLoggedIn = await magic.user.isLoggedIn();
//       if (isLoggedIn) {
//          setIsHere(false)
//       } else {
//         setIsHere(true)
//       }
//     }
//     handleLoggedIn();
//   },[isHere])
//   return ( 
//        isHere ? 
//        <>
//        <Header/>
//          <Component {...pageProps} />
//         <Footer />
//       </> 
//        : <Login /> ) 
// }











