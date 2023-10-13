import React from 'react'
import Topbar from '../topbar/topbar'
import Sidebar from '../sidebar/sidebar'

const Home=() =>{
  return (
    <div>
      <Topbar/>
      <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar/>
        <div className="col py-3">
            <div>
                <h2>Welcome to CE</h2>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
