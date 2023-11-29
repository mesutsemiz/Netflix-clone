import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/800px-Netflix_logo.svg.png" alt="" /> 
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New und Popular</span>
                <span>My List</span>
                
                </div>
            <div className="right">
                <SearchIcon/>

            </div>
        </div>
    </div>
  )
}

export default Navbar