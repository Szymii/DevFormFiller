import { ChakraProvider } from "@chakra-ui/react";
import { ChakraForm } from "./Forms/ChakraForm";

export const App = () => {
  return (
    <ChakraProvider>
      <ChakraForm />
    </ChakraProvider>
  );
};
