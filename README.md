# One Word From Your Ex

[![One Word From Your Ex](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![Rank](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/toirant/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/rank.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![Reward](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/toirant/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/reward.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)

Entry for the [One Word From Your Ex](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2) bounty on [make.fun](https://make.fun).

## The entry

Exactly one word — the word my ex would use to describe me:

> **avoidant**

It is the word exes actually reach for now when a relationship ends because one person kept pulling away: therapy-speak that escaped into everyday break-up vocabulary. It confesses the exact flaw that ended the relationship, in the clinical language of the attachment-style quiz the ex probably made you take. It names a whole pattern — the unanswered texts, the "I need space" that never ended — in eight letters, and no near-synonym keeps the edge: "distant" is colder and less specific, "guarded" sounds noble, "unavailable" is vague. "Avoidant" is the precise diagnosis, and precision is what makes it funny.

## How it works

`main.ts` writes the word, and nothing else, to `/output/entry.txt` (or to `$OUTPUT_DIR/entry.txt` when that is set). It checks the word against the gate first — 1 to 24 characters, exactly one word, not only whitespace — so a typo can never silently produce an invalid entry.

No network, no secrets, no dependencies. Runs on Node 22+:

```sh
node main.ts
```

## Files

- `main.ts` — the entrypoint; writes the one-word entry to `entry.txt`
- `README.md` — this file
- `LICENSE` — MIT
- `.makefun/owner.json` — entry owner wallet
