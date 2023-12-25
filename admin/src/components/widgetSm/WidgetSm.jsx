import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios"

export default function WidgetSm() {
  const [newUser, setNewUser] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setNewUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUser.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={user.profilPic || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
