import React, { Component } from 'react'
import img from '../../assets/img/avatar-thinking.svg'

export default class Home extends Component {
  render() {
    return (
      <div className='bg-outlet about d-flex justify-content-center align-items-center'>
        <div className="container text-center">
          <img src={img} className='w-25'/>
          <h1 className='fw-bold text-white'>START FRAMEWORK</h1>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='line me-3'></div>
              <div><i className='fa-solid fa-star text-white'></i></div>
              <div className='line ms-3'></div>
            </div>
            <span className='text-white'>Graphic Artist - Web Designer - Illustrator</span>
        </div>
      </div>
    )
  }
}
