import fs from "node:fs";

export function parseDecisions(markdown) {
  const entries = [];
  let current = null;
  for (const line of String(markdown || "").split("\n")) {
    const heading = line.match(/^##\s+(\d{4}-\d{2}-\d{2})\s*[—-]\s*(.+)$/);
    if (heading) {
      current = { date: heading[1], title: heading[2].trim(), notes: [] };
      entries.push(current);
    } else if (current && line.trim()) current.notes.push(line.trim());
  }
  return entries;
}

export function buildReviewContext({ direction, plan, decisionLog }, limit = 10) {
  if (!direction?.trim() || !plan?.trim()) throw new Error("direction and plan are required");
  return {
    direction: direction.trim(),
    current_plan: plan.trim(),
    recent_decisions: parseDecisions(decisionLog).slice(-limit),
    review_questions: [
      "What changed this week?",
      "Which evidence supports or challenges the current plan?",
      "What is the highest-leverage next action?",
      "Which decision should remain with the user?",
    ],
  };
}

export function loadReviewContext({ directionFile, planFile, decisionLogFile }) {
  return buildReviewContext({
    direction: fs.readFileSync(directionFile, "utf8"),
    plan: fs.readFileSync(planFile, "utf8"),
    decisionLog: fs.readFileSync(decisionLogFile, "utf8"),
  });
}
