const { generateSummary } = require("./openai-service");
const { createPayment } = require("./payment-service");

async function main() {
  console.log("API Migration Demo");

  // These calls intentionally use legacy API patterns.
  const summary = await generateSummary("Explain why API version migrations matter.");
  console.log("Generated summary:", summary);

  const payment = await createPayment(2500, "usd");
  console.log("Payment result:", payment);
}

main().catch(console.error);
