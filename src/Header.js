import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Avatar } from "@material-ui/core";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <MenuIcon />
      <img
        className="header__logo"
        src="https://static.wikia.nocookie.net/logopedia/images/1/19/YouTube_logo_2017.svg/revision/latest/scale-to-width-down/300?cb=20190515171106"
        alt=""
      />
      <input type="text" />
      <SearchIcon />
      <VideoCallIcon />
      <AppsIcon />
      <NotificationsIcon />
      <Avatar
        alt="Shashank Ellareddy"
        src="https://avatars0.githubusercontent.com/u/66846202?s=460&u=3ede97a61b4a1690882fb59dceb8bbf9b188c3c7&v=4"
      />
    </div>
  );
}

export default Header;
