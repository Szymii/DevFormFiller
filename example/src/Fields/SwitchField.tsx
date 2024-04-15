import {
	FormControl,
	FormLabel,
	Switch,
	type SwitchProps,
} from "@chakra-ui/react";
import type { ReactNode } from "react";

interface SwitchFieldProps extends SwitchProps {
	children: ReactNode;
	isDisabled?: boolean;
}

export const SwitchField = ({
	children,
	isDisabled,
	...rest
}: SwitchFieldProps) => {
	return (
		<FormControl display="flex" alignItems="center" isDisabled={isDisabled}>
			<FormLabel mb="0">{children}</FormLabel>
			<Switch {...rest} />
		</FormControl>
	);
};
