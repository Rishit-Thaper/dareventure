import React from "react";
import Image from "next/image";
import logo from "@/assets/logo_mid.png"
const Header = () => {
  return (
    <>
      <div className="header">
        <Image src={logo} alt="dareventure-logo" width={200}></Image>
      </div>
    </>
  );
};

export default Header;
