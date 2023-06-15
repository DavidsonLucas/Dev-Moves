import React from 'react'
import Logo from '../../assets/logo (2).png'
import * as c from './styled'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
    const [changeBackground,setChangeBackground]= useState(false)
    const {pathname}= useLocation()

    window.onscroll = ()=> {
      if(!changeBackground && window.pageYOffset > 150){
     
        setChangeBackground(true)
      }
      if(changeBackground && window.pageYOffset <= 150){
        setChangeBackground(false)
      }
    }
  return (
    <c.Header changeBackground = {changeBackground}>
      <img src={Logo} alt="logo"  />
      <c.Ul>
        <c.Li isActive={pathname === '/'}>
          <Link to="/" >Home</Link>
        </c.Li>
        <c.Li isActive ={pathname.includes('filmes')}>
          <Link to="/filmes">Movies</Link>
        </c.Li>
        <c.Li isActive= {pathname.includes('series')}>
          <Link to="/series">Series</Link>
        </c.Li>
      </c.Ul>
    </c.Header>
  )
}

export default Header
