import React from 'react'
import {Button,Box} from "@chakra-ui/react";

function CustomButton(props:any) {
  return (
    <>
     <Box sx={{
            width: "60%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}>
     <Button
     onClick={props.onClick} sx={{
        backgroundColor:props.backColor,
        borderRadius:"2px",
        width:"230px",
        height:"33px",
        my:"12px",
        color:props.color

      }}>{props.text}</Button> 
      </Box>   
    </>
  )
}

export default CustomButton