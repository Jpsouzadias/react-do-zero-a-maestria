// 2 - links com react router
import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
   <nav>
       {/*  <Link to="/" >Home</Link>
        <Link to="/about" >Sobre</Link> */}
        <NavLink 
        to="/" 
        /* className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")} */
        >
          Home
        </NavLink>
        <NavLink to="/about">Home</NavLink>
    </nav>
    );
}

export default Navbar