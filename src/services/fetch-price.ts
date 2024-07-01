export async function fetchQuote(
  apiKey: string,
  symbol: string
): Promise<{
  price: number
  changePercent: number
}> {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
    )

    const data = await response?.json()
    console.log("crs", "data :>>", data)

    const quoteData = data["Global Quote"]
    console.log("crs", "quoteData :>>", quoteData)

    const price = parseFloat(quoteData["05. price"])
    console.log("crs", "price :>>", price)

    const changePercent = parseFloat(quoteData["10. change percent"])
    console.log("crs", "changePercent :>>", changePercent)

    return { price, changePercent }
  } catch (error) {
    console.error("Error fetching Bitcoin quote:", error)
    throw error
  }
}
