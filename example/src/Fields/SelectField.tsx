import {
  FormControl,
  FormLabel,
  Select,
  type SelectProps,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface SelectFieldProps extends SelectProps {
  options: Array<{ label: string; value: string }>;
  isDisabled?: boolean;
  children: ReactNode;
}

export const SelectField = ({
  options,
  isDisabled,
  children,
  name,
  ...rest
}: SelectFieldProps) => {
  const { register } = useFormContext();

  return (
    <FormControl isDisabled={isDisabled}>
      <FormLabel>{children}</FormLabel>
      <Select {...rest} {...register(name!)}>
        {options.map(({ label, value }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
