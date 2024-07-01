import { ActionIcon, Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

export default function SettingsOpener({ children }) {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal opened={opened} onClose={close} title="Settings">
        {children}
      </Modal>
      <ActionIcon size={42} variant="default" onClick={open}>
        ⚙️
      </ActionIcon>
    </>
  )
}
