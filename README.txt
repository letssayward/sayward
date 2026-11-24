SAYWARD v7.0.7 – Speaking VOCA selected-DAY continuous playback resume

Fixed: When phone switches to another application, browser suspends speech; returning and pressing '이어서 재생' no longer limits playback to one DAY. The selected DAY list, DAY index and segment cursor stay available across background pause and the next selected DAY continues automatically.

Install: Replace deployed index.html with this file (in the ZIP). Reload the SAYWARD page.
Test: Select DAY 3–5 on Speaking VOCA home → 전체 학습 재생 → switch to another app → return → tap '전체 이어서 재생' → ensure DAY 4 / 5 auto-advance after DAY 3 ends.

Limit: Browsers/Android may suspend sound while in the background; this update restores playback when returning. If the page is destroyed/reloaded during app switching, in-memory queue cannot be restored.

Preserved: version 7.0.6 HTML fixes, v7.0.4 Supabase audio DB mappings, v7.0.5 Speaking VOCA default home, screen wake-lock, other lesson playback.
