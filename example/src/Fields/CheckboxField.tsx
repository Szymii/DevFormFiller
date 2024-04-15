import {
	Checkbox,
	CheckboxGroup,
	FormControl,
	FormLabel,
	HStack,
} from "@chakra-ui/react";
import type { ReactNode } from "react";

interface CheckboxFieldProps {
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
}: CheckboxFieldProps) => {
	return (
		<FormControl isDisabled={isDisabled}>
			<FormLabel>{children}</FormLabel>
			<CheckboxGroup defaultValue={defaultValue}>
				<HStack spacing="24px">
					{options.map(({ label, value }) => (
						<Checkbox value={value} key={value}>
							{label}
						</Checkbox>
					))}
				</HStack>
			</CheckboxGroup>
		</FormControl>
	);
};
