import { useEffect, useState } from "react"

import { fetchQuote } from "~services/fetch-price"

import { useApiKey } from "./use-api-key"

export function useQuoteFetcher(symbol: string) {
  const [quote, setQuote] = useState({ price: 0, changePercent: 0.0 })
  const [key] = useApiKey()

  const refresh = () => {
    fetchQuote(key, symbol)
      .then((val) => {
        setQuote(val)
      })
      .catch((err) => {
        console.error("From useQuoteFetcher", err)
      })
  }

  useEffect(refresh, [])

  return { quote, refresh }
}
