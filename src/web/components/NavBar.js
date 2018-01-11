import React from "react";

class NavBar extends React.Component {
  render() {
    return <ul>
      <li>
        <a href="/">Main</a>
      </li>
      <li>
        <a href="/app1">App1</a>
      </li>
    </ul>;
  }
}

export default NavBar;
