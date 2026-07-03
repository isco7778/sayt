import React from 'react'
import"./Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className="nav">
            <img width={80} src="data:image/png;base64,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" alt="" />
            <ul className='ul'>
                <li > 
                  <NavLink to="/Men">Men</NavLink> 
                </li>
                <li > 
                  <NavLink to="/Woman">Woman</NavLink> 
               </li>
                <li >
                   <NavLink to="/Kids">Kids</NavLink> 
                </li>
                <li > 
                  <NavLink to="/Sale">Sale</NavLink> 
                </li>
                <li >
                   <NavLink to="/NewTrending">NewTrending</NavLink> 
                </li>
              
            </ul>
            <div className="sp">
            <input type="text" placeholder='Search' name=""  />
            <img width={30} src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="" />
            <img width={30} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8n5vpWkDh69eXx07vhRLAPsC_hZomncLnlQ&s" alt="" />
            <img width={30} src="https://static.vecteezy.com/system/resources/thumbnails/002/205/906/small/shopping-bag-icon-free-vector.jpg" alt="" />
            </div>

         
        </div>
    </>
  )
}

export default Navbar