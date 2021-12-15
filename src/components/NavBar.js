import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const a = links.map((link) => (
    <a key={link} href={"#" + link}> {link} </a>
  ));

  return <nav>{a}</nav>;
}

export default NavBar;

