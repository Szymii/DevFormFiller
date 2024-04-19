import {
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import type { ReactNode } from "react";

interface RadioGroupFieldProps {
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
}: RadioGroupFieldProps) => {
  return (
    <FormControl isDisabled={isDisabled}>
      <FormLabel>{children}</FormLabel>
      <RadioGroup defaultValue={defaultValue}>
        <HStack spacing="24px">
          {options.map(({ label, value }) => (
            <Radio value={value} key={value}>
              {label}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
    </FormControl>
  );
};
