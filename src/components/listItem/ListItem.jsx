import React, { useState } from "react";
import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="listItem"
      style={{left:isHovered && index * 225 - 50 + index * 2.5}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6D4g4RYiep23ssyiokloIHJfvn9kfWUlm9w&usqp=CAU"
        alt=""
      />

      <div className="itemInfo">
        <div className="icons">
          <PlayArrowIcon />
          <AddIcon />
          <ThumbUpOutlinedIcon />
          <ThumbDownOutlinedIcon />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 min</span>
          <div className="limit">+16</div>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          facere dignissimos voluptate, consequuntur saepe iste,
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
};

export default ListItem;
