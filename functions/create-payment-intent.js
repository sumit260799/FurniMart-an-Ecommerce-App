const stripe = require("stripe");

// Initialize stripe with your secret key
const stripeInstance = stripe(process.env.VITE_REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  const { cart, shipping_fee, total_amount } = JSON.parse(event.body);
  console.log(shipping_fee + total_amount);
  const calculateOrderAmount = () => {
    return shipping_fee + total_amount;
  };

  try {
    // Create a PaymentIntent with the order amount and currency (INR)
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount: calculateOrderAmount() * 100,
      currency: "inr", // Set the currency to INR
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
