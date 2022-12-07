import React from 'react'
import {Text, Flex} from "@chakra-ui/react";

function CustomText(props:any) {
  return (
   <>
     <Flex
        flexDirection="column"
        sx={{
          width: "60%",
          margin: "auto",
        }}
      >
        <Text
          sx={{
            textAlign: "center",
            backgroundColor: "white",
            fontFamily:"Inter",
            fontStyle:"normal",
            fontWeight:"600",
            fontSize:"20px",
            color:props.clr

          }}
        >
         {props.headText}
        </Text>
        <Text
          sx={{
            backgroundColor: "white",
            color:"#919DAD",
            fontFamily:"inter",
            fontStyle:"normal",
            fontWeight:"600",
            fontSize:"14px",
          
          }}
          textAlign="center"
        >
        {props.subText}
 
        </Text>
      </Flex></>
  )
}

export default CustomText