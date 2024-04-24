import {
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  RadioProps,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface RadioGroupFieldProps extends RadioProps {
  options: Array<{ label: string; value: string }>;
  children: ReactNode;
  defaultValue?: string;
  isDisabled?: boolean;
}

export const RadioField = ({
  options,
  children,
  isDisabled,
  defaultValue,
  name,
  ...rest
}: RadioGroupFieldProps) => {
  const { register } = useFormContext();

  return (
    <FormControl isDisabled={isDisabled}>
      <FormLabel>{children}</FormLabel>
      <RadioGroup defaultValue={defaultValue}>
        <HStack spacing="24px">
          {options.map(({ label, value }) => (
            <Radio value={value} key={value} {...register(name!)} {...rest}>
              {label}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
    </FormControl>
  );
};
