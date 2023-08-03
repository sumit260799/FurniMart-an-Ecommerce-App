const EXCHANGE_RATE = 82; // Fixed exchange rate (1 USD = 82 INR)

export const formatPrice = (dollarPrice) => {
  if (typeof dollarPrice !== "number" || dollarPrice < 0) {
    return null; // Return null or a default value if the dollar price is not valid
  }
  const indianRupeePrice = Math.floor((dollarPrice / 100) * EXCHANGE_RATE);

  const formattedPrice = indianRupeePrice.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formattedPrice;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }

  return ["all", ...new Set(unique)];
};
