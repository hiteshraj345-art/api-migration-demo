const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * Intentionally legacy Stripe usage.
 * The migration agent should identify this call site.
 */
async function createPayment(amount, currency) {
  const charge = await stripe.charges.create({
    amount,
    currency,
    description: "API Migration Demo payment"
  });

  return {
    id: charge.id,
    status: charge.status,
    amount: charge.amount
  };
}

module.exports = {
  createPayment
};
