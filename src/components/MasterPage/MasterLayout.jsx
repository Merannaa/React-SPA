import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default class MasterLayout extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className='container1 vh-100'>
            <Outlet/>
        </div>
        <Footer/>
      </div>
    )
  }
}
