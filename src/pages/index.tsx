import Button from "./components/button"
import style from "./global.module.css"
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const migrateTheSite=()=>{
    router.push('/welcome')
  }
 
  const createTheSite=()=>{
    router.push('/welcome/createSite')
  }
  return (
    <>
     <div className={style.container}>
        <div>
          <h3 className={style.heading}>Let’s add your first site</h3>
          <div className={style.createSite}>
            <p className={style.text}>Build a new site from scratch</p>
            <Button className={style.btn} text="Create a Site" onClick={createTheSite}/>
          </div>
          <hr className={style.midWidth} />
          <div className={style.createSite}>
            <p className={style.text}>Bring a site to WordPress.com</p>
            <Button className={style.btn} text="Migrate a site" onClick={migrateTheSite}/>
          </div>
        </div>
      </div>
    </>
  )
}
