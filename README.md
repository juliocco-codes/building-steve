# Building Steve

Steve is a private career adviser with continuity. He keeps a long-term direction, a live plan, and a dated record of decisions in view so that important questions do not restart from zero in every conversation.

## The core design

Keep three files separate:

1. **Direction:** what the person wants to become over several years and the constraints that shape that path.
2. **Plan:** the priorities, milestones, and experiments currently in force.
3. **Decision log:** dated facts, choices, corrections, and unresolved questions.

The direction should be stable but revisable. The plan should change when evidence changes. The log should preserve why a decision was made without turning every old thought into a permanent rule.

## Start here

1. Install OpenClaw through its [official documentation](https://github.com/openclaw/openclaw#readme).
2. Create a private workspace and copy the files under `workspace/`.
3. Rename `USER.example.md` to `USER.md` and replace the fictional context locally.
4. Create private `direction.md`, `plan.md`, and `decision-log.md` files.
5. Run the weekly review manually before scheduling it.
6. Keep the agent read-only and unable to contact anyone.

OpenClaw loads workspace skills from `<workspace>/skills/<skill>/SKILL.md`. Verify current behavior in the official [skills documentation](https://docs.openclaw.ai/skills).

## What makes this different from a generic career chatbot

- It knows the direction against which a choice should be judged.
- It distinguishes an aspiration from a committed plan.
- It remembers why earlier decisions were made.
- It updates the plan when new evidence invalidates an assumption.
- It challenges the user without taking the decision away from them.

## Design decisions

### Continuity lives in files

Do not depend on one long chat. A small set of clear files is easier to inspect, correct, and carry between models.

### Facts, interpretations, and decisions are different

Record what happened, what it may mean, and what was decided separately. A persuasive interpretation should not quietly become a fact.

### Character is secondary to judgment

A strong persona can make advice clearer, but it must not become imitation or theater. The useful part is a consistent standard: direct, demanding, and focused on trade-offs.

### No external authority

Steve may help draft a message, application, or negotiation document. He cannot send it, contact a person, submit an application, or commit the user to a decision.

## Repository map

- `workspace/AGENTS.md`: operating rules and file precedence.
- `workspace/SOUL.md`: tone and advisory stance.
- `workspace/USER.example.md`: example goals and boundaries.
- `workspace/skills/weekly-review/SKILL.md`: repeatable review process.
- `examples/weekly-review.md`: an example weekly review.
- `SECURITY.md`: privacy checklist.

## License

MIT. See `LICENSE`.
