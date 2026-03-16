# Tag System

This repository uses a unified tag system so entries can be read as part of a **layered map**, not as isolated links.

## Design goals

- Keep README entries compact and readable.
- Preserve enough structure to distinguish systems from platforms, modules, benchmarks, and meta-resources.
- Make workflow placement explicit.
- Make openness and autonomy visible at a glance.
- Leave room for future machine-readable exports.

## Compact README ribbon

The README uses a compact five-tag ribbon:

```text
Level: System · Stage: End-to-end · Loop: Closed-loop · Domain: General · Openness: Open-source
```

Those five fields are the minimum display requirement for every entry.

## Full curation model

The full curation model includes seven dimensions:

| Dimension | Purpose | Allowed values |
| --- | --- | --- |
| `Level` | What kind of object this is | `System`, `Platform`, `Module`, `Benchmark`, `Survey`, `Dataset`, `Meta` |
| `Stage` | Where it primarily fits in the research workflow | `Literature`, `Ideation`, `Planning`, `Data`, `Coding`, `Experiment`, `Analysis`, `Writing`, `End-to-end` |
| `Loop` | How autonomous the resource is | `Open-loop`, `Human-in-the-loop`, `Closed-loop` |
| `Scope` | Whether it is broad or specialized | `General`, `Domain-specific` |
| `Domain` | Which scientific domain it targets | `General`, `Biology`, `Chemistry`, `Materials`, `Physics`, `Medicine`, `CS`, `Math`, `Multi-domain` |
| `Openness` | How inspectable or reusable it is | `Open-source`, `Partially Open`, `Closed-source`, `Paper-only` |
| `Maturity` | How production-like and current it is | `Research Prototype`, `Active Project`, `Production-like`, `Archived` |

## Tagging rules

### 1. Choose one primary value per dimension

Tags are meant to reduce ambiguity, not encode every possible interpretation. Pick the resource's primary role.

### 2. `Level` is about object type, not prestige

- Use `System` for integrated, loop-spanning research systems.
- Use `Platform` for infrastructure or runtime layers.
- Use `Module` for stage-specific building blocks.
- Use `Benchmark`, `Survey`, `Dataset`, and `Meta` when the object is evaluative or contextual rather than operational.

### 3. `Stage` reflects the main contribution

If a resource touches multiple stages, choose:

- `End-to-end` when the primary claim is full-loop coverage.
- The narrowest stage when the contribution is mostly local.

### 4. `Loop` reflects the default operating mode

- `Open-loop`: no meaningful feedback or iteration is built into the public system.
- `Human-in-the-loop`: human steering, review, or approval is central.
- `Closed-loop`: the system can plan, execute, evaluate, and iterate with minimal human intervention.

### 5. `Scope` and `Domain` should agree

- If `Domain` is `General`, `Scope` should usually be `General`.
- If `Domain` is one of the scientific fields, `Scope` should usually be `Domain-specific`.
- Use `Multi-domain` when the system explicitly spans multiple scientific areas.

### 6. `Openness` should be conservative

- `Open-source`: core implementation is publicly inspectable.
- `Partially Open`: some public code or API surface exists, but the whole system is not fully open.
- `Closed-source`: public product or site exists, but implementation is not open.
- `Paper-only`: public reference is primarily a paper or project page, with no meaningful public system release.

### 7. `Maturity` is useful for curation, even when hidden from README

We do not currently display `Maturity` in the README ribbon to keep entries readable, but contributors should still think about it when suggesting additions.

## Examples

### Example A

```text
Level: System · Stage: End-to-end · Loop: Closed-loop · Domain: General · Openness: Open-source
```

Good fit for: public AI Scientist systems that execute a substantial research loop.

### Example B

```text
Level: Platform · Stage: Coding · Loop: Human-in-the-loop · Domain: CS · Openness: Partially Open
```

Good fit for: agent runtimes that are especially useful for research coding and repository execution.

### Example C

```text
Level: Benchmark · Stage: End-to-end · Loop: Open-loop · Domain: CS · Openness: Partially Open
```

Good fit for: benchmarks that evaluate whether agents can reproduce research pipelines.

## Practical guidance for contributors

- Do not invent new tag values in README entries.
- If a resource feels hard to tag, its category is probably unclear.
- When in doubt, choose the narrower interpretation and explain your reasoning in the PR.

See [docs/inclusion-criteria.md](inclusion-criteria.md) for the acceptance bar and [CONTRIBUTING.md](../CONTRIBUTING.md) for the submission format.
