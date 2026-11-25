import { writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// Fix Human Sleep: Funniest Patch Note.
// Writes one changelog line (under 160 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node stdlib only; output dir comes from the environment, never a fallback.
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "v2.4.1 \u2014 Fixed sleep: it no longer crashes at 3 a.m. to replay every embarrassing thing you said since 2009.\n";

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");
chmodSync(outPath, 0o644);
