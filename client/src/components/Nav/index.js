import React from "react";
import "./style.css";
function Nav() {
  return (
<nav class="nav nav-pills flex-column flex-sm-row" style={{ background: "black"}}>

  <a className="flex-sm-fill text-sm-center nav-link"  href="/" >Google Book Search</a>
  
  <a className="flex-sm-fill text-sm-center nav-link" href="/saved"  >Saved Books</a>
 
</nav>
  );
}

export default Nav;

