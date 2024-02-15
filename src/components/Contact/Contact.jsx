import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <section className=' p-2'>
        <div className='container '>
            <h1 className='fw-bold text-center'>CONTACT SECTION</h1>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='line me-3 text-bg-dark'></div>
              <div><i className='fa-solid fa-star  text-dark'></i></div>
              <div className='line ms-3 text-bg-dark'></div>
            </div>
            <div className='d-flex flex-column align-items-center mx-auto w-50 my-5 '>
                <input className='from-control my-3 w-100' placeholder='userName' type='text'/>
                <input className='from-control my-3 w-100' placeholder='userAge' type='text'/>
                <input className='from-control my-3 w-100' placeholder='userEmail' type='text'/>
                <input className='from-control my-3 w-100' placeholder='userPassword' type='text'/>
                <button className='btn me-auto  btn-out mt-4 bg-outlet '>send Message</button>
            </div>
        </div>
      </section>
    )
  }
}
