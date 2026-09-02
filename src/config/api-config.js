module.exports = {
  providers: {
    openai: {
      version: "legacy-completions"
    },
    stripe: {
      version: "legacy-charges"
    }
  },

  // These values intentionally describe the old integrations.
  migrationTargets: [
    "openai.Completion.create",
    "stripe.charges.create"
  ]
};
