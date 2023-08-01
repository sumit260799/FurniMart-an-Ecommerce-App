const EXCHANGE_RATE = 82; // Fixed exchange rate (1 USD = 82 INR)

export const formatPrice = (dollarPrice) => {
  if (typeof dollarPrice !== "number" || dollarPrice < 0) {
    return null; // Return null or a default value if the dollar price is not valid
  }

  // Convert dollar price to Indian Rupees and round down to remove decimal points
  const indianRupeePrice = Math.floor((dollarPrice / 100) * EXCHANGE_RATE);

  // Format the Indian Rupee price without decimal points
  const formattedPrice = indianRupeePrice.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formattedPrice;
};
