import React from "react";
import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const Featured = ({type}) => {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movies" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option value="cdventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historcal</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Wester</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                    
                    
                </select>
            </div>
        )}
      <img
        src="https://images.pexels.com/photos/19255737/pexels-photo-19255737/free-photo-of-ahsap-peyzaj-alan-yaz.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        alt=""
      />
      <div className="info">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSoqkGnoArj_YMaBB171ElVw0wr0rJcAocyA&usqp=CAU"
          alt=""
        />

        <span className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
          animi perferendis minus voluptatum similique optio reiciendis magni
          labore consequuntur debitis. Ut ad quis saepe quaerat rerum qui!
          Itaque, quae ratione?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
