// One Line, No Deadline Met v2 — a single-line joke excusing a missed deadline.
//
// The joke, in one breath: the deadline is not a date on a calendar, it is a
// coworker who filed paperwork behind my back. The setup grants the deadline
// agency ("filed for an extension"), the turn is that it never told me, and
// the punch lands in the last clause — "we were both taking the week off" —
// which reframes my lateness as a shared holiday I was too polite to cancel.
// It is an excuse first, a joke second, and it sounds like a person cornered
// at stand-up, not a list of reasons. Nothing here reuses v1's spent
// "better version of me is missing" angle: the blame sits on the deadline
// itself, not on an alternate self.
//
// The line is 102 characters, one sentence, no trailing newline in the file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: exactly one joke excuse, embedded as a constant. Nothing is
// generated, fetched, or read from disk at run time.
const LINE =
  "The deadline filed for an extension without telling me, so I assumed we were both taking the week off.";

// Gate, enforced before anything is written: the sealed scorer only accepts
// UTF-8 text of 1-200 characters, a single line, not only whitespace. Refuse
// rather than emit a file that would score Valid 0. The length check runs
// first because it is the cheapest failure to explain: a line outside the
// window is rejected before any other validation is even attempted.
function guard(line: string): void {
  const n = line.length;
  if (n < 1 || n > 200) {
    throw new Error(`entry must be 1-200 characters, got ${n}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("entry must be a single line");
  }
}

guard(LINE);

// The harness reads $MAKEFUN_OUTPUT_DIR/entry.txt; default is /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Written byte-for-byte: no trailing newline, so the file is the line and
// nothing else.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
