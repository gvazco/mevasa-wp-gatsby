import React from "react";
import TopBar from "./TopBar";
import MenuWeb from "./MenuWeb";

export default function Header() {
  return (
    <div className="header">
      <TopBar />
      <MenuWeb />
    </div>
  );
}
