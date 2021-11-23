import React from "react";
import {NavLink} from "react-router-dom";

export const Header:React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li> <NavLink to="/"> DashBoard </NavLink> </li>
          <li> <NavLink to="/repository"> Repositório </NavLink> </li>
        </ul>
      </nav>
    </>
  )
}
