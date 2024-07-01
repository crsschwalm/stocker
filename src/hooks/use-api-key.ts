import { useContext } from "react"

import { ApiKeyContext } from "~contexts"

export function useApiKey() {
  return useContext(ApiKeyContext)
}
