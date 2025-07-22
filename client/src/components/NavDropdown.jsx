import React from "react";

export default function NavDropdown({ category }) {

  let navDropdownLinks = [];
  // use ID/key later
  if (category == "Apparel Fabrics") {
     navDropdownLinks = [
      { name: "Fabric1" },
      { name: "Fabric1" },
      { name: "Fabric1" },
      { name: "Fabric1" },
    ];
  }

  if (category == "Upholstery Fabrics") {
     navDropdownLinks = [
      { name: "Fabric2" },
      { name: "Fabric2" },
      { name: "Fabric2" },
      { name: "Fabric2" },
    ];
  }

  if (category == "Handmade Items") {
     navDropdownLinks = [
      { name: "Fabric3" },
      { name: "Fabric3" },
      { name: "Fabric3" },
      { name: "Fabric3" },
    ];
  }

  if (category == "Haberdashery") {
     navDropdownLinks = [
      { name: "Fabric4" },
      { name: "Fabric4" },
      { name: "Fabric4" },
      { name: "Fabric4" },
    ];
  }

  return (
    <div className="nav-dropdown-container">
      <div className="nav-dropdown-content">
        {/* mock list for now */}
        <ul>
          {navDropdownLinks.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
