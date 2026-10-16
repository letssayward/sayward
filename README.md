# SAYWARD v5.5.47 · Stable Due Review + Live History

Release date: 2026-10-16 (KST)
Base: SAYWARD_V5_5_46_LIVE_HISTORY_AUDIT.zip (which was rebuilt from the user's v5.5.44 archive)

## Changes
- Connects the **existing** `public.sayward_stable_review_schedule` to the app's mixed sentence-writing and pattern-matching quiz. Only the logged-in user’s schedule is queried through their authenticated JWT; Supabase RLS confines access to user_id = auth.uid().
- Requires a successful schedule read before issuing a new app-practice deck. No guessed due dates, no fallback silently treating errors as zero due patterns.
- Stable patterns whose `next_review_at` is due receive **highest selection priority**. Earliest due date first; each target pattern is unique; if more are due than the requested quiz count, only the earliest are selected.
- If due Stable patterns exceed the chosen Review/New mixing quota, the due Stable patterns take precedence. Voluntary practice of not-yet-due Stable patterns remains possible if no due candidate displaces them.
- Shows a Stable due label/stage during app practice and the number of due Stable items in the quiz composition summary.
- Re-queries learning states, app-practice state, master patterns, and Stable schedule when the user explicitly presses New Questions / Restart. Clears due schedule on account change/logout.
- Retains v5.5.46 live unified study-history filter and v5.5.45 overall playback resume.

## Supabase changes performed
- Confirmed existing RLS policy `sayward_stable_review_read_own` only permits `user_id = auth.uid()` for signed-in users.
- Granted *SELECT only* on `public.sayward_stable_review_schedule` to the `authenticated` role, leaving anon without SELECT. Verified these permissions after the grant.
- No history, user pattern states, schedules, sessions, or grading records were modified.
- Existing official planner `sayward_plan_candidates_v2` already prioritizes due Stable patterns as priority 1, and `sayward_stable_review_due` already exists; neither function was changed.
- Existing stable review trigger implements 7,14,21,30,40,60-day stages; it was not changed.

## Verification
- JS syntax: all 84 inline scripts passed `node --check`.
- Unit test: due-first precedence even when Review quota is 0%; earliest-due selection; not-yet-due handling; account-specific schedule read filter; fail-closed on missing schedule.
- ZIP CRC verified.
- Live Supabase read-only check at testing time: 21 schedules exist, 0 currently due. Thus a real due-event end-to-end test is not yet possible without fabricating or changing legitimate learner data.

## Explicit limits
- In-browser app login and Android speech/playback could not be exercised in the restricted headless environment; the attempted Chromium smoke test timed out.
- The app practice quiz **is not official GPT grading**; only verified official issued attempts and grading can advance the Stable review stage. This release does not make app self-ratings official.
- The code package is not automatically deployed to the live SAYWARD site. Deploy this ZIP's `index.html` using the existing deployment process, then validate on the actual mobile browser.
- The monolithic legacy HTML/CSS structure has not undergone a complete refactor.
- Existing unrelated Supabase security advisory warnings were noted but left untouched; this release did not introduce a new SECURITY DEFINER RPC or loosen RLS.
- Removed legacy v5.3.286/288/289/292 asynchronous assignments that overwrote the displayed home and menu build badges after page initialization, replacing them in the original code paths with v5.5.47.
