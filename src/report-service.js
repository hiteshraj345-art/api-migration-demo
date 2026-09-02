const openai = require("openai");

async function generateMigrationNotes(changes) {
  const prompt = `
Create a short migration summary for these changes:
${JSON.stringify(changes)}
`;

  // Another legacy OpenAI call site intentionally included for scanning.
  const response = await openai.Completion.create({
    model: "text-davinci-003",
    prompt,
    max_tokens: 150
  });

  return response.choices[0].text.trim();
}

module.exports = { generateMigrationNotes };
