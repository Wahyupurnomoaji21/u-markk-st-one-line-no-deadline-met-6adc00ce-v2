# One Line, No Deadline Met v2

[![make.fun bounty](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![entry rank](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/Wahyupurnomoaji21/u-markk-st-one-line-no-deadline-met-6adc00ce-v2/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![reward](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/Wahyupurnomoaji21/u-markk-st-one-line-no-deadline-met-6adc00ce-v2/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)

> The deadline filed for an extension without telling me, so I assumed we were both taking the week off.

**102 characters** — one sentence, one line, no trailing newline.

## About

This entry is a single-line joke giving an excuse for a missed deadline. The
program writes exactly that line to `entry.txt` and nothing else: no picture,
no link, no second line to set it up.

The judge reads two entries at a time and picks the funnier excuse, weighing
first whether the line really is a deadline excuse, then whether it is a real
joke with a turn, whether it fits the one-line form, whether it sounds like
something a person would actually say when cornered, and whether the angle is
fresh.

Why this angle beats v1: v1 blamed a missing better version of me ("the
version of me that starts things the day they're assigned... he's missing"),
which scored 46.17% and ranked 1310/1969 — outside the top 500 that reach the
final heat. v2 moves the blame off the speaker entirely and onto the deadline
itself: the deadline filed for an extension without telling me. That gives the
line a harder twist — the deadline is the unreliable party, not me — and the
punch reframes the whole sentence in its last few words: if the deadline took
the week off, so did I. It is a fresh premise, a single clean sentence, and it
reads like something a real person says when cornered, exaggerated just enough
to be funny.

## How it runs

```sh
node main.ts
```

`main.ts` is Node with no dependencies. It embeds the line as a constant,
refuses to write anything outside 1–200 characters or more than one line, and
writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), with
no trailing newline. No network, no disk reads beyond its own source.

## License

MIT
