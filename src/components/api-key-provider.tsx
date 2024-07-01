import { useEffect, useState } from "react"

import { Storage } from "@plasmohq/storage"

import { API_STORAGE_KEY } from "~constants"
import { ApiKeyContext } from "~contexts"

const storage = new Storage()

export default function ApiKeyProvider({ children }) {
  const [key, _setKey] = useState(null)

  useEffect(() => {
    storage.get(API_STORAGE_KEY).then((value) => {
      _setKey(value)
    })
  }, [])

  const setKey = (value: string) => {
    _setKey(value)
    storage.set(API_STORAGE_KEY, value)
  }

  return (
    <ApiKeyContext.Provider value={[key, setKey]}>
      {children}
    </ApiKeyContext.Provider>
  )
}
