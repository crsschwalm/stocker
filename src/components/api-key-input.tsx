import { Anchor, Button, Text, TextInput } from "@mantine/core"
import { useField } from "@mantine/form"

import { useApiKey } from "~hooks/use-api-key"

export default function ApiKeyInput() {
  const [apiKey, setApiKey] = useApiKey()

  const field = useField({
    clearErrorOnChange: true,
    initialValue: apiKey || "",
    validate: (value) => {
      if (value.trim().length < 2) {
        return "Value is too short"
      }

      setApiKey(value)
    }
  })

  return (
    <>
      <TextInput
        {...field.getInputProps()}
        label={
          <Text inherit>
            Visit{" "}
            <Anchor
              href="https://www.alphavantage.co/support/"
              target="_blank"
              underline="hover">
              Alpha Vantage
            </Anchor>{" "}
            to get your free API key.
          </Text>
        }
        placeholder="No API Key found"
        mb="md"
      />
      <Button onClick={field.validate}>Save</Button>
    </>
  )
}
