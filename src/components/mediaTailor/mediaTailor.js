import React from 'react'
import Topbar from '../topbar/topbar'
import Sidebar from '../sidebar/sidebar'

const MediaTailor=() =>{
  return (
    <div>
      <Topbar/>
      <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar/>
        <div className="col py-3">
            <div>
                <h2>Welcome to Media Tailor</h2>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default MediaTailor
