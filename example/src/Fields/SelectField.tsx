import {
	FormControl,
	FormLabel,
	Select,
	type SelectProps,
} from "@chakra-ui/react";
import type { ReactNode } from "react";

interface SelectFieldProps extends SelectProps {
	options: Array<{ label: string; value: string }>;
	isDisabled?: boolean;
	children: ReactNode;
}

export const SelectField = ({
	options,
	isDisabled,
	children,
	...rest
}: SelectFieldProps) => {
	return (
		<FormControl isDisabled={isDisabled}>
			<FormLabel>{children}</FormLabel>
			<Select {...rest}>
				{options.map(({ label, value }) => (
					<option value={value} key={value}>
						{label}
					</option>
				))}
			</Select>
		</FormControl>
	);
};
