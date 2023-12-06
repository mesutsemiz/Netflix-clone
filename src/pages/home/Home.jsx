import React from 'react'
import "./home.scss";
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Register from '../register/Register';


const Home = () => {
  return (
    <div className='home'>
      < Register/>
      
      <Featured type={"series"}/>
      <List/>
      <List/>
      <List/>
      <List/>

    </div>
  )
}

export default Home