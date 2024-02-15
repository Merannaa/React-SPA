import React, { Component } from 'react'

export default function Footer() {

    return (
    <footer className='bg-main'>
      <section className=' bg-footer pt-5'>
        <div className='container d-flex justify-content-between'>
        <div className='m-3 text-center'>
            <h3>LOCATION</h3>
            <div className='d-flex flex-column '>
                <span>2215 John Daniel Drive</span>
                <span className='py-3'>Clark, MO 65243</span>
            </div>
        </div>
        <div className='m-3 text-center'>
            <h3>AROUND THE WEB</h3>
            <div className='text-center'>
                <span> <i className="rounded-circle p-2   fa-brands fa-facebook"></i></span>
                <span> <i className="rounded-circle p-2  fa-brands fa-twitter"></i></span>
                <span> <i className="rounded-circle p-2  fa-brands fa-linkedin-in"></i></span>
                <span> <i className="rounded-circle p-2  fa-solid fa-globe"></i></span>
            </div>
        </div>
        <div className='m-3 d-flex flex-column text-center'>
            <h3>ABOUT FREELANCER</h3>
            <span>Freelance is a free to use, licensed Bootstrap 
                theme created by </span>
                <span className='text-center'>Meranna</span> 
        </div>
        </div>
        <div className='text-center p-2  bg-main' >
        <span>Copyright © Your Website 2024</span>
        </div>
      </section>

      

      </footer>
    )
  }
