import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './components/navbar'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  let navBarData=[{
    link:"/welcome",
    linkName:"Migrate a Site",
    isNavBar:true
  },
  {
    link:"/welcome/createSite",
    linkName:"Create a Site",
    isNavBar:true
  },
  {
    link:"/",
    linkName:"",
    isNavBar:false
  },
  {
    link:"/sites",
    linkName:"",
    isNavBar:false
  },
]

let currentNavBarData=navBarData.find((item)=>item.link==router.pathname)

    return(
    <>
    {currentNavBarData?.isNavBar ?<Navbar currentNavBarData={currentNavBarData?.linkName}/>:""}
    <Component {...pageProps} />
    </>
  ) 
}
