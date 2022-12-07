import React,{useState} from 'react'
import {
    Box,
    Text,
    Flex,
    Image,
  } from "@chakra-ui/react";
  import Product from "../../content/images/product.png";
  import { Divider } from "@chakra-ui/react";
  import { TiLocation } from "react-icons/ti";
  

function ProductBox(props:any) {
    const [active,setActive] = useState(false)
  return (
    <>
    <Flex
    onClick={()=> setActive(!active)}
   border={active === true ?"3px solid blue":"0px"}
    boxShadow="base"
    rounded="md"
    bg="white"
    flexDirection="column"
    justifyContent="space-around"
  >
    <Image boxSize="100%" objectFit="cover" src={Product} />
   <Box sx={{
      width:"22px",
      height:"22px",
  backgroundColor: "white", /* Green */
  border: "none",
  color: "black",
  padding: "0px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "14px",
  cursor: "pointer",
  borderRadius:"50%",
  position:"absolute",
  marginLeft:"8.8vw",
  marginBottom:"1vw"
      
   }}>
   +
   </Box>

 <Box sx={{
   width:"55px",
   height:"25px",
  backgroundColor: "green", /* Green */
  border: "none",
  color: "white",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "10px",
  cursor: "pointer",
  position:"absolute",
  paddingTop:"5px",
  marginBottom:"7vw",
  marginRight:"4px"

  }} >
  <Text sx={{
      backgroundColor:"green",
      fontFamily:"inter",
  }}>Easy Sell</Text>
 </Box>
    <Box sx={{ padding: "8px" }}>
      <Text
        sx={{
          fontFamily: "poppins",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "17px",
        }}
      >
        The Deane
      </Text>
      <Flex flexDirection="row" >
      <TiLocation/>
      <Text
        sx={{
          fontFamily: "inter",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "11px",
          color: "#606164",
          marginLeft:"2px",
          marginBottom:"2px"
          // marginTop:"2px"
        }}
      >
        {" "}

         224 kerr street, Oakville, On
      </Text>
      </Flex>
      
      <Divider sx={{ margin: "auto" }} width="100%" />
      <Text
        sx={{
          fontFamily: "inter",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "12px",
          color: "#606164",
          marginTop: "2px",
        }}
      >
        {props.commission}
      </Text>
    </Box>
  </Flex>
  </>
  )
}

export default ProductBox