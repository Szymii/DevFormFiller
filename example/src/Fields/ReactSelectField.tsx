import { FormControl, FormLabel } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Select } from "chakra-react-select";

interface SelectFieldProps {
  options: Array<{ label: string; value: string }>;
  isDisabled?: boolean;
  children: ReactNode;
  name: string;
  isMulti?: boolean;
  id: string;
  testid: string;
}

export const ReactSelectField = ({
  options,
  isDisabled,
  children,
  name,
  isMulti,
  testid,
  ...rest
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormControl isDisabled={isDisabled} data-testid={testid}>
      <FormLabel>{children}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            isMulti={isMulti}
            options={options}
            value={options.find((c) => c.value === field.value)}
            onChange={(val) => {
              if (Array.isArray(val)) {
                return field.onChange(val.map(({ value }) => value));
              }

              // @ts-ignore
              return field.onChange(val?.value);
            }}
            {...rest}
          />
        )}
      />
    </FormControl>
  );
};
