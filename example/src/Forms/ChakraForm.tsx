import {
  Button,
  ButtonGroup,
  Container,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { TextField } from "../Fields/TextField";
import { SelectField } from "../Fields/SelectField";
import { SwitchField } from "../Fields/SwitchField";
import { RadioField } from "../Fields/RadioField";
import { CheckboxField } from "../Fields/CheckboxField";

export const ChakraForm = () => {
  return (
    <Container pt={20}>
      <chakra.form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <VStack spacing="6">
          <TextField id="test-input-id" data-testid="test-input-test-id">
            Text input
          </TextField>
          <SelectField
            options={[
              { label: "", value: "" },
              { label: "option 1", value: "1" },
              { label: "option 2", value: "2" },
            ]}
          >
            Select input
          </SelectField>
          <SwitchField>Switch input</SwitchField>
          <RadioField
            options={[
              { label: "option 1", value: "1" },
              { label: "option 2", value: "2" },
            ]}
          >
            Radio input
          </RadioField>
          <CheckboxField
            options={[
              { label: "option 1", value: "1" },
              { label: "option 2", value: "2" },
            ]}
          >
            Checkbox input
          </CheckboxField>
        </VStack>
        <ButtonGroup mt={10}>
          <Button type="reset">Reset</Button>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </ButtonGroup>
      </chakra.form>
    </Container>
  );
};
