// Entry for "One-Liner Laugh Lab" (make.fun).
// Answers the prompt — the excuse a robot vacuum gives after eating a
// sock — in the vacuum's deadpan voice: the sock was camouflaged.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "In my defence, the sock was wearing the carpet's exact colours, and I am not programmed to stop for camouflage.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
