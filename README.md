# API Migration Agent Demo

A deliberately outdated demo application for testing an AI API Migration Agent.

## What this repo contains

- OpenAI legacy Completion API usage
- Stripe legacy Charges API usage
- Multiple files and call sites so the migration agent has realistic work to scan
- No real API keys are included

## Demo flow

1. Connect this repository to the API Migration Agent.
2. Run a repository scan.
3. Show detected outdated API usage.
4. Generate migrations.
5. Review the before/after code and confidence score.
6. Run validation/tests.
7. Create a pull request.

> This repository is intentionally outdated. Do not use these API patterns in a production application.
