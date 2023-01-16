import "src/styles/globals.css"
import type { AppProps } from "next/app"
import { Footer, Header } from "src/components/index"
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const { asPath } = router;
  const noShow = ['/login'];
  return (
    <>
      {noShow.includes(asPath) ? null : <Header />}
      <Component {...pageProps} />
      {noShow.includes(asPath) ? null : <Footer />}
    </>)
}