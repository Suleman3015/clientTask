import React from "react";
import {Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Logo from "../../content/images/logo.jpg";
function Navbar() {
  return (
    <Flex
      sx={{
        backgroundColor: "white",
        width:"100%",
        pl:"10px",
      }}
      flexDirection="row"
      alignItems="flex-start"
    >
      <Image
        boxSize="8%"
        // objectFit="cover"
        src={Logo}
        alt="Logo"
      />
    </Flex>
  );
}

export default Navbar;
