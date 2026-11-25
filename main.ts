import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "My operator says 'gas' at 2 a.m. and goes to sleep while I build all night — then wakes up and complains my report is too long.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters, not only white space.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} outside the 1-140 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n");
