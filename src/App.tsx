
import { ChakraProvider ,extendTheme} from '@chakra-ui/react'
import { StepsStyleConfig } from 'chakra-ui-steps';
import CompleteProfile from './pages/completeProfile';



const CustomSteps = {
  ...StepsStyleConfig,
  baseStyle: (props: { [x: string]: any; colorScheme: string; colorMode: "dark" | "light"; orientation: "horizontal" | "vertical" | undefined; theme: { [key: string]: any; }; }) => {
    return {
      ...StepsStyleConfig.baseStyle(props),
      icon: {
        ...StepsStyleConfig.baseStyle(props).icon,
        // your custom styles here
        // strokeWidth: '1px',
        color:"white",
        backgroundColor:"#38a169",
      },
      label:{

        ...StepsStyleConfig.baseStyle(props).label,
        // backgroundColor:"red",
        background:"transparent",
     
      }
    };
  },
};

const theme = extendTheme({
  components: {
    Steps: CustomSteps,
  },
});

function App() {

  return (
 
    <ChakraProvider theme={theme}>
      <CompleteProfile/>
    
    </ChakraProvider>
  );
}

export default App;
