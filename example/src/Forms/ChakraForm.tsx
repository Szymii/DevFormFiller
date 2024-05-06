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
import { useForm, FormProvider } from "react-hook-form";
import { ReactSelectField } from "../Fields/ReactSelectField";

export const ChakraForm = () => {
  const methods = useForm();

  return (
    <Container pt={20}>
      <FormProvider {...methods}>
        <chakra.form
          onSubmit={methods.handleSubmit((e) => {
            console.log(e);
          })}
        >
          <VStack spacing="6">
            <TextField
              name="text"
              id="test-input-id"
              data-testid="test-input-test-id"
            >
              Text input
            </TextField>
            <SelectField
              name="select"
              id="test-select-id"
              data-testid="test-select-test-id"
              options={[
                { label: "", value: "" },
                { label: "option 1", value: "1" },
                { label: "option 2", value: "2" },
              ]}
            >
              Select input
            </SelectField>
            <ReactSelectField
              name="react-select"
              id="test-react-select-id"
              testid="test-react-select-test-id"
              options={[
                { label: "option 1", value: "1" },
                { label: "option 2", value: "2" },
                { label: "option 3", value: "3" },
              ]}
              isMulti
            >
              React select
            </ReactSelectField>
            <SwitchField
              name="switch"
              id="test-switch-id"
              data-testid="test-switch-test-id"
            >
              Switch input
            </SwitchField>
            <RadioField
              name="radio"
              options={[
                { label: "option 1", value: "1" },
                { label: "option 2", value: "2" },
              ]}
            >
              Radio input
            </RadioField>
            <CheckboxField
              name="checkbox"
              options={[
                { label: "option 1", value: "1" },
                { label: "option 2", value: "2" },
              ]}
            >
              Checkbox input
            </CheckboxField>
          </VStack>
          <ButtonGroup mt={10}>
            <Button
              id="submit-btn"
              data-testid="submit-test-btn"
              type="submit"
              colorScheme="blue"
            >
              Submit
            </Button>
          </ButtonGroup>
        </chakra.form>
      </FormProvider>
    </Container>
  );
};
