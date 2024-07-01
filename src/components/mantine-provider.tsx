import { createTheme, MantineProvider as Provider } from "@mantine/core"

const theme = createTheme({
  /** Put your mantine theme override here */
})

export default function MantineProvider({ children }) {
  return <Provider theme={theme}>{children}</Provider>
}
