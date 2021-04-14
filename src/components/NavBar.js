import React, { useEffect, useState } from "react";
import Link from "./Link";
import "../css/navBar.css";

function NavBar() {
  const [isSelected, setIsSelected] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navData = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/profile",
      name: "See Your Profile",
    },

    {
      href: "/companies",
      name: "See Companies",
    },
  ];
  useEffect(() => {
    setIsSelected(
      navData.findIndex((f) => f.href === window.location.pathname)
    );
  }, [navData]);
  const onNavClick = (index) => {
    setIsSelected(index);
  };

  const renderNav = navData.map((nav, index) => {
    const active = index === isSelected ? "active" : "";
    return (
      <span key={nav.href} onClick={() => onNavClick(index)}>
        <Link key={nav.href} className={`${active} item`} href={nav.href}>
          {nav.name}
        </Link>
      </span>
    );
  });
  return (
    <React.Fragment>
      <div
        className="ui secondary pointing menu"
        style={{
          position: "sticky",
          top: "0",
          padding: "2px",
          zIndex: "6",
          background: "white",
        }}
      >
        {renderNav}
      </div>
    </React.Fragment>
  );
}

export default NavBar;
