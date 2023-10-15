import React from 'react'
import TopBar from '../components/siteComponent/topbar'
import Filter from '../components/siteComponent/filter'
import WebSiteList from '../components/siteComponent/websiteList'

const Sites = () => {
  return (
    <div>
        <TopBar/>
        <Filter/>
        <WebSiteList/>
    </div>
  )
}

export default Sites