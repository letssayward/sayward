# SAYWARD v5.5.25 · Safe Playback Preload

Base: v5.5.24 ALL_CONTENT_FIX. All previous database-only authentication, learning policies and UI are retained.

## Fixes
- Overall Repeat (DAY / MY / SORI / OPIC / FRIENDS) now **awaits the actual selected DB lesson content before constructing/starting the per-course playlist**. This fixes false “selected OPIC lesson has no content” alerts immediately after logging in.
- Single-course `▶ 전체 시작` also awaits actual DB content hydration.
- Uses existing authenticated per-course loaders and the existing Supabase RLS path; no test/sample data is inserted into published content and no learning history is changed.
- Shows a temporary "DB 콘텐츠 준비 중 · X/Y" status while fetching selected lessons. Stop/reselection cancels outdated starts.
- DB/network failure is reported as a loading error, not silently skipped or interpreted as empty content.
- User-specific admin OFF items remain excluded. An entire disabled selection does not cause an endless overall-repeat cycle.
- Limits concurrent per-course requests to three to avoid flooding an Android browser.

## Validation
- 79 inline scripts syntax-checked in Node.
- 6 isolated async coordinator cases passed (delayed content, dedupe, bounded concurrency, permission deny, error and loading-state cleanup).
- Full Android + real authenticated Supabase UI playback was not independently verified. Please test by logging in and directly pressing the top '전체 학습 반복' without first opening any lesson.

No database schema or content changes.
