import {
  FormControl,
  FormLabel,
  Switch,
  type SwitchProps,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface SwitchFieldProps extends SwitchProps {
  children: ReactNode;
  isDisabled?: boolean;
}

export const SwitchField = ({
  children,
  isDisabled,
  name,
  ...rest
}: SwitchFieldProps) => {
  const { register } = useFormContext();

  return (
    <FormControl display="flex" alignItems="center" isDisabled={isDisabled}>
      <FormLabel mb="0">{children}</FormLabel>
      <Switch {...rest} {...register(name!)} />
    </FormControl>
  );
};
