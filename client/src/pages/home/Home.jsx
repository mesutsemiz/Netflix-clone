import React, { useState, useEffect } from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);


  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzcyMDljMjg0Njc2NmIxMjBiYWRhMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMjM5MzIwMCwiZXhwIjoxNzAyODI1MjAwfQ.DeJUApH6_jNVijWWlgDnd1NO-b9OA5xJ1Z7-DRgVaYs"
            },
          }
        );
       
        setLists(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);
  
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
     
      {lists.map((list)=>(
        <List list={list}/>
        ))}
    </div>
  );
};

export default Home;
