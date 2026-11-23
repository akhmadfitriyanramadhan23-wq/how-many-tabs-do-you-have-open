// how-many-tabs-do-you-have-open
// My honest tab count right now: 143. Not a round number, not a boast —
// the lived-in count of someone who opens a tab "just to check one thing"
// and never closes it. Three digits, odd, specific: a real browser.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: 1-5 characters, digits only (this entry: 3 code points, "143").
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text = "143";

const points = [...text].length;
if (points < 1 || points > 5 || !/^\d+$/.test(text)) {
  throw new Error(`entry must be 1-5 digits, got ${JSON.stringify(text)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
