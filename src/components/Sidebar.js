import React from "react";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <ul className="side-items">
        <li className="side-item">
          <Link className="nav-item" to="/">
            HELLO!
          </Link>
        </li>
        <li className="side-item">
          <Link className="nav-item" to="/ourstory">
            OUR<span>STORY</span>
          </Link>
        </li>
        <li className="side-item">
          <Link className="nav-item" to="/whatsgood">
            WHATS<span>GOOD</span>
          </Link>
        </li>
        <li className="side-item">
          <Link className="nav-item" to="/ourfamily">
            OUR<span>FAMILY</span>
          </Link>
        </li>
        <li className="side-item">
          <Link className="nav-item" to="/findus">
            WHERE<span>TO</span>FIND<span>US</span>
          </Link>
        </li>
        <li className="side-item">
          <Link className="nav-item" to="/hive">
            HIVE
          </Link>
        </li>
        <li className="side-item">
          <Link className="nav-item" to="/videos">
            VIDEOS
          </Link>
        </li>
        <li className="side-item">
          <Link className="nav-item" to="/callus">
            CALL<span>US</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
