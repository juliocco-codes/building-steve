import test from "node:test";
import assert from "node:assert/strict";
import { buildReviewContext, parseDecisions } from "../src/review-context.mjs";

test("keeps dated decisions distinct", () => {
  const decisions = parseDecisions("## 2026-08-20 — Choose a direction\n- Evidence changed\n\n## 2026-08-27 — Run an experiment\n- Review next week");
  assert.equal(decisions.length, 2);
  assert.equal(decisions[1].title, "Run an experiment");
});

test("builds context without making the decision", () => {
  const context = buildReviewContext({ direction: "Build toward operating leadership.", plan: "Run one commercial experiment.", decisionLog: "" });
  assert.match(context.review_questions.at(-1), /remain with the user/);
});
