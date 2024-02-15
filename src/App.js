import React, { Component } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MasterLayout from './components/MasterPage/MasterLayout'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'


const router =createBrowserRouter([
  {path:'/',element:<MasterLayout/>,errorElement:<NotFound/>,children:[
    {path:'/',element:<Home/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>}
  ]}
])
export default class App extends Component {
  state={}
  render() {
    return (
      <>
        <RouterProvider router={router}/>
      </>
    )
  }
}

