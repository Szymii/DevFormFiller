import {
  Checkbox,
  CheckboxGroup,
  CheckboxProps,
  FormControl,
  FormLabel,
  HStack,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface CheckboxFieldProps extends CheckboxProps {
  options: Array<{ label: string; value: string }>;
  defaultValue?: Array<string>;
  children: ReactNode;
  isDisabled?: boolean;
}

export const CheckboxField = ({
  options,
  children,
  defaultValue,
  isDisabled,
  name,
  ...rest
}: CheckboxFieldProps) => {
  const { register } = useFormContext();

  return (
    <FormControl isDisabled={isDisabled}>
      <FormLabel>{children}</FormLabel>
      <CheckboxGroup defaultValue={defaultValue}>
        <HStack spacing="24px">
          {options.map(({ label, value }) => (
            <Checkbox value={value} key={value} {...register(name!)} {...rest}>
              {label}
            </Checkbox>
          ))}
        </HStack>
      </CheckboxGroup>
    </FormControl>
  );
};
