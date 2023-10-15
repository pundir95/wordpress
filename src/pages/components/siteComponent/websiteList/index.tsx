import React from 'react'
import {HiOutlineDotsHorizontal} from "react-icons/hi"
import  style  from '../topbar/global.module.css'

const WebSiteList = () => {
  return (
    <div className={style.websiteContent}>
        <div>
            <img className={style.webImage} src="https://images.prismic.io/dribbble/2504bec0-2c34-4ff1-a0d1-56c043d412f2_4.webp?auto=compress,format&rect=0,0,1399,646&w=1200&h=554%201200w,%20https://images.prismic.io/dribbble/2504bec0-2c34-4ff1-a0d1-56c043d412f2_4.webp?auto=compress,format&rect=0,0,1400,646&w=375&h=173%20375w,%20https://images.prismic.io/dribbble/2504bec0-2c34-4ff1-a0d1-56c043d412f2_4.webp?auto=compress,format&rect=0,0,1400,645&w=744&h=343%20744w"/>
            <div className={style.content}>
                <h3 className={style.hSiteTitle}>Site Title</h3>
                <div className={style.actionItem}>
                <p className={style.statusTrail}>Trail</p>
                <HiOutlineDotsHorizontal size="1rem"/>
                </div>
                
            </div>
            <p>www.mytittle.com</p>
        </div>
        <div>
            <img  className={style.webImage} src="https://bloggingwizard.com/wp-content/uploads/2019/11/drawkit-Best-Websites-To-Find-Free-Vector-Illustrations.png"/>
         <div className={style.content}>
            <h3 className={style.hSiteTitle}>Site Title</h3>
            <div className={style.actionItem}>
            <p className={style.status}>Coming soon</p>
                <HiOutlineDotsHorizontal size="1rem"/>
                </div>
            </div>
            <p>www.mytittle.com</p>
        </div>
        <div>
            <img className={style.webImage} src="https://bloggingwizard.com/wp-content/uploads/2019/11/Ouch-Best-Websites-To-Find-Free-Vector-Illustrations.png"/>
            <div className={style.content}>
            <h3 className={style.hSiteTitle}>Site Title</h3>
                <div className={style.actionItem}>
                <p className={style.status}>Coming soon</p>
                <HiOutlineDotsHorizontal size="1rem"/>
                </div>
            </div>
            <p>www.mytittle.com</p>
        </div>
    </div>
  )
}

export default WebSiteList