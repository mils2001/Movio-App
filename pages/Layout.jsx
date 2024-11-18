import React, from 'react';
import React {Routes,Route,Link} from 'react-router';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Route } from 'react-router-dom';


function Layout() {
  return (
    <div>
        <Home/>
        <About/>
        <Contact/>

    </div>
  )
}

export default  Layout
