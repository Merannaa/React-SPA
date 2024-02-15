import React, { Component } from 'react'
import img from '../../assets/img/notfound.jpg'

export default class NotFound extends Component {
  render() {
    return (
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <img src={img} className='w-50'  />
      </div>
    )
  }
}
