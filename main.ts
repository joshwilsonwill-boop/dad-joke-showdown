// Dad Joke Showdown: a single dad joke of at most 200 characters.
// The joke works because the pun lands on the first read: a belt made
// of watches is absurd on its face, and "waist of time" turns the setup
// into a groan in the last few words. The program's only job is to
// write that joke to entry.txt exactly as written below.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  // "waist" does double duty: the belt sits at the waist, and the whole
  // thing is a waste of time, which is exactly the groan a dad joke wants.
  "I bought a belt made of watches. It was a waist of time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write the joke exactly as-is, no trailing newline added, so the
// sealed gate sees the same 56 characters the program holds.
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
