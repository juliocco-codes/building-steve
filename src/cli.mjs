#!/usr/bin/env node
import { loadReviewContext } from "./review-context.mjs";

const [directionFile, planFile, decisionLogFile] = process.argv.slice(2);
if (!decisionLogFile) {
  console.error("Usage: node src/cli.mjs DIRECTION.md PLAN.md DECISION-LOG.md");
  process.exit(2);
}
console.log(JSON.stringify(loadReviewContext({ directionFile, planFile, decisionLogFile }), null, 2));
