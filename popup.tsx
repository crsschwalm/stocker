import { Title } from "@mantine/core"

import "@mantine/core/styles.css"

import ApiKeyInput from "~components/api-key-input"
import ApiKeyProvider from "~components/api-key-provider"
import MantineProvider from "~components/mantine-provider"
import PriceTile from "~components/price-tile"
import SettingsOpener from "~components/settings-opener"

function IndexPopup() {
  return (
    <MantineProvider>
      <ApiKeyProvider>
        <div
          style={{
            padding: 16,
            minWidth: 500
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 16
            }}>
            <Title order={1}>Stocker</Title>

            <SettingsOpener>
              <ApiKeyInput />
            </SettingsOpener>
          </div>

          <Title order={2}>We're watching you.. I mean, your stocks</Title>
          <PriceTile symbol="SQ" />
        </div>
      </ApiKeyProvider>
    </MantineProvider>
  )
}

export default IndexPopup
