import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className='bg-outlet about w-100 d-flex justify-content-center align-items-center'>
      <section className='container w-75 '>
        <div className='text-center'>
            <h1 className='fw-bold text-white'>ABOUT COMPONENT</h1>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='line me-3'></div>
              <div><i className='fa-solid fa-star text-white'></i></div>
              <div className='line ms-3'></div>
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center m-2'>
                <p className='text-white fs-6 text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the
                    complete source files including HTML, CSS, 
                    and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className='text-white fs-6  text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the
                    complete source files including HTML, CSS, 
                    and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </div>
      </section>
      </div>
    )
  }
}
