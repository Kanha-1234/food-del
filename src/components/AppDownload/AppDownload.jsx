import React from 'react'
import { assets } from '../../assets/assets'
import './AppDownload.css'
const AppDownload = () => {
  return (
    <div className='app-download' id='mobile-app'>
      <p>For better Experience download <br/>  App name </p>
      <div className='app-download-platform'>
          <img src={assets.play_store}/>
          <img src={assets.app_store}/>
      </div>
    </div>
  )
}

export default AppDownload
