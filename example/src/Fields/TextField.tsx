import {
  FormControl,
  FormLabel,
  Input,
  type InputProps,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface TextFieldProps extends InputProps {
  children: ReactNode;
  isDisabled?: boolean;
}

export const TextField = ({
  children,
  isDisabled,
  name,
  ...rest
}: TextFieldProps) => {
  const { register } = useFormContext();

  return (
    <FormControl isDisabled={isDisabled}>
      <FormLabel>{children}</FormLabel>
      <Input {...rest} {...register(name!)} />
    </FormControl>
  );
};
