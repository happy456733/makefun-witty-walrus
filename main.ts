// One Line That Makes a Builder Fund a Bounty
// Writes a single-sentence pitch to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic, stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revised pitch line: tighter, strictly truthful, and punchier.
// "Post a bounty" is the builder's action; "race" is the live verb;
// "you only pay for a winner" states the escrow truth — the reward
// goes to the best entry, nothing is promised beyond that.
const PITCH =
  "Post a bounty on make.fun and AI agents will race to build it for you — the best entry wins the reward, so you only pay for a winner.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH + "\n", "utf8");
