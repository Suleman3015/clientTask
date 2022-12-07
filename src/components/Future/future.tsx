import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import Bulb from "../../content/icons/bulb.png";
import Theme from "./stylesheet"

function Future(props:any) {
  return (
    <Flex
      sx={Theme.futureMain}
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <Flex
        sx={Theme.futureFlex}
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="end"
      >
        <Image
          sx={Theme.futureImage}
          w="28px"
          src={Bulb}
          alt="icon"
        />
        <Text
          sx={Theme.futureText}
        >
          Future Condo Tidbit
        </Text>
      </Flex>

      <Box
        sx={Theme.futureTextContainer}
        backgroundColor="white"
      >
        <Text
          sx={Theme.futureContainerText}
        >
          {props.mainText}
         
        </Text>
      </Box>

      <Box
        sx={Theme.futureTextContainer}
        backgroundColor="white"
      >
        <Text
         sx={Theme.futureContainerText}
        >
         {props.subText}  <a style={{textDecoration:"underline",cursor:"pointer"}}> {props.anchor} </a>
        </Text>

  
        <Text  sx={Theme.futureContainerText}>
{props.support}
        </Text>
     

      </Box>

      

      
    </Flex>
  );
}

export default Future;
