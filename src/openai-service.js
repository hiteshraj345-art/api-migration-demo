const openai = require("openai");

/**
 * Intentionally legacy OpenAI usage.
 * This file is included to give the migration agent a clear migration target.
 */
async function generateSummary(prompt) {
  const response = await openai.Completion.create({
    model: "text-davinci-003",
    prompt,
    max_tokens: 100
  });

  return response.choices[0].text.trim();
}

async function classifyText(text) {
  const response = await openai.Completion.create({
    model: "text-davinci-003",
    prompt: `Classify this text: ${text}`,
    max_tokens: 20
  });

  return response.choices[0].text.trim();
}

module.exports = {
  generateSummary,
  classifyText
};
