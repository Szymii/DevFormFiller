import {
  FormControl,
  FormLabel,
  Input,
  type InputProps,
} from "@chakra-ui/react";
import type { ReactNode } from "react";

interface TextFieldProps extends InputProps {
  children: ReactNode;
  isDisabled?: boolean;
}

export const TextField = ({
  children,
  isDisabled,
  ...rest
}: TextFieldProps) => {
  return (
    <FormControl isDisabled={isDisabled}>
      <FormLabel>{children}</FormLabel>
      <Input {...rest} />
    </FormControl>
  );
};
