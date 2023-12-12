import React, { useEffect, useState } from "react";
import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({ index,item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});




  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzcyMDljMjg0Njc2NmIxMjBiYWRhMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMjM5MzIwMCwiZXhwIjoxNzAyODI1MjAwfQ.DeJUApH6_jNVijWWlgDnd1NO-b9OA5xJ1Z7-DRgVaYs"
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);





  // const trailer =
  //   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
   return (
    <Link to={{pathname:"/watch", movie:movie}}>
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.img}
        alt=""
      />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.desc}
            </div>

            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
    </Link>
  );
};
export default ListItem;
