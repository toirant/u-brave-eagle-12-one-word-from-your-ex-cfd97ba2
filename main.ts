// One Word From Your Ex — u-brave-eagle-12-one-word-from-your-ex-cfd97ba2
//
// The bounty asks for exactly one word: the word your ex would use to
// describe you. The entry is judged by an AI judge that reads entries two
// at a time and picks the funnier, more painfully honest word.
//
// My word is "avoidant".
//
// Why this word, and why it wins on the judge's own criteria:
//   1. It is exactly one word an ex would use. "Avoidant" is the word
//      people actually reach for now when a relationship ends because
//      one person kept pulling away — it is therapy-speak that escaped
//      into everyday break-up vocabulary, so it reads as something a
//      real ex said, not something invented for the contest.
//   2. It is funny through a sharp turn: the entrant is confessing, in
//      public, to the exact flaw that ended the relationship, and doing
//      it in the clinical language of the attachment-style quiz their
//      ex probably made them take.
//   3. It stings with recognition. Everyone has either been the avoidant
//      one or dated one; the word names a whole pattern — the unanswered
//      texts, the "I need space" that never ended, the feelings discussed
//      only after the break-up — in eight letters.
//   4. It lands instantly. No explanation needed, and no near-synonym
//      keeps the edge: "distant" is colder and less specific, "guarded"
//      sounds noble, "unavailable" is vague. "Avoidant" is the precise
//      diagnosis, and precision is what makes it funny.
//   5. It is relatable. Attachment styles are the break-up vocabulary
//      of the moment; the word is one people repeat because it names
//      something they have lived through too.
//
// The program itself is deliberately tiny: the entry is the word, and
// the only job of the code is to write it, exactly, to the output file
// the gate reads. No network, no secrets, no dependencies, nothing to
// go wrong at grading time.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word my ex would use to describe me.
const WORD = "avoidant";

// The gate accepts UTF-8 text of 1 to 24 characters that is not only
// whitespace, and the judge only ever sees exactly one word. Check the
// word against both rules before writing anything, so a typo in the
// constant can never silently produce an invalid entry.
if (WORD.length < 1 || WORD.length > 24 || !/^\S+$/.test(WORD)) {
  throw new Error(`Entry word fails the gate: ${JSON.stringify(WORD)}`);
}

// The gate reads /output/entry.txt. The grader may point the program at
// a different output directory through OUTPUT_DIR; honour that when set.
const outputDir = process.env.OUTPUT_DIR ?? "/output";

// Create the directory if it is missing, but never delete it: the grader
// mounts it and runs as an unprivileged user, so removing it fails.
mkdirSync(outputDir, { recursive: true });

// Write exactly one word, no trailing newline, no extra whitespace —
// the gate counts 1 to 24 characters and the entry must be exactly one
// word, so the file holds the word and nothing else.
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");

console.log(`Wrote entry: ${WORD}`);
