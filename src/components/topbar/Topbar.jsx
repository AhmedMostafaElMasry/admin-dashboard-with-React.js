import "./topbar.css";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <span className="logo">ahmed</span>
        </div>
        <div className="topbarRight">
          <div className="topbaricon">
            <NotificationsNone />
            <span className="topiconbadge">2</span>
          </div>
          <div className="topbaricon">
            <Language />
            <span className="topiconbadge">2</span>
          </div>
          <div className="topbaricon">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
