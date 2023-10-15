import Link from 'next/link'
import React from 'react'
import style from "./Navbar.module.css"
import {  BsChevronLeft } from "react-icons/bs";

type navProps={
  currentNavBarData:string|undefined
}
const Navbar = ({currentNavBarData}:navProps) => {
  return (
    <div>
        <div className={style.nav}>
            <div className={style.imageContent}>
            <img className={style.image} src="https://i0.wp.com/wordpressfoundation.org/content/uploads/2022/02/WordPress-logotype-wmark.png?ssl=1"/>
                <Link href={"/"}><span className={style.backBtn}><BsChevronLeft/> Back</span></Link>
            </div>
            <Link href={"/welcome"} className={style.migrateBtn}>{currentNavBarData}</Link>
        </div>
    </div>
  )
}

export default Navbar