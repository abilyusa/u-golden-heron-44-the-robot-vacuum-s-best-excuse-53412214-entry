// The Robot Vacuum's Best Excuse — one-line entry.
// The vacuum refuses to do the one thing it was built for.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I didn't miss that spot. I refuse to suck on principle — I'm a pacifist.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only white space, on a single line. Count code points so the
// em dash counts as one character, the way the scorer counts it.
const len = [...LINE].length;
if (len < 1 || len > 140) {
  throw new Error(`line is ${len} characters, gate is 1-140`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
