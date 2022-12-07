import {
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { AiFillFire } from "react-icons/ai";

function SalesTargetInput() {
  return (
    <Box
      sx={{
        width: "40%",
        margin: "auto",
        textAlign: "center",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        marginTop:"120px",
        marginBottom:"80px"
      }}
    >
      <Text sx={{ backgroundColor: "white" }}>
        Set Your quorterly sales target
      </Text>
      <InputGroup sx={{ backgroundColor: "white", marginTop: "10px" }}>
        <InputLeftElement
          pointerEvents="none"
          //   // margin="20px"
          //  h="25px"
          w="20px"
          h="20px"
          m="11px"
          ml="16px"
          children={<AiFillFire color="gray" />}
        />
        <Input width="100%" placeholder="Be realistic" />
      </InputGroup>
    </Box>
  );
}

export default SalesTargetInput;
