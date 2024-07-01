import { Button, Text, Title } from "@mantine/core"

import { useQuoteFetcher } from "~hooks/use-quote-fetcher"

export default function PriceTile({ symbol }) {
  const { quote, refresh } = useQuoteFetcher(symbol)

  return (
    <>
      <Title>
        {symbol}: {quote.price}
      </Title>
      <Text c={quote.changePercent > 0 ? "teal" : "red"}>
        {quote.changePercent} %
      </Text>
      <Button onClick={refresh}>Refresh</Button>
    </>
  )
}
