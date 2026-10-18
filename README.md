# SAYWARD v6.4.13 — Adaptive Level Cards · FINAL PACKAGE

## Included
- index.html: ready-to-upload single-file SAYWARD web app.
- Level L1–L4 on authenticated published MY, SORI, OPIC, Friends Chunk cards; original curriculum sentences are retained.
- When a pattern Level increases, show a verified at-or-below-Level sentence; choose a distinct sentence for duplicate cards if available.
- Supports original/current-Level toggle, variant rotation, and TTS of the currently displayed text.
- When a card has no verified pattern mapping, displays '패턴 L? · 미분류' rather than assigning a false Level.
- Existing per-lesson auto-publish/admin override and playback functions are retained.

## Important
- Supabase card RPCs sayward_lesson_card_sync_v23 and sayward_lesson_card_catalog_v23 must be present (already installed in the user's project).
- This is a packaged final deliverable, NOT a claim that remote GitHub Pages or native Android distribution was updated.
- Only Chunk cards with verifiable published pattern mapping can display numeric Level. Other cards keep their original text.
- If the DB call is rejected or offline, the original card remains visible.
- No service-role key or secret has been added to the HTML.
- No official Session, Attempt, History, or Stable rule changed by this package.


## v6.4.13 카드 상단 레벨 위치 조정
- MY/소리영어/OPIC/FRIENDS Chunk 카드의 **현재 표시된 문장 Level**을 즐겨찾기 버튼 왼쪽에 표시합니다 (L1 회색, L2 파랑, L3 보라, L4 주황).
- DB Level 미분류 문장은 L? 회색으로 표시하며 승급 Level을 추정하지 않습니다.
- 화면이 좁으면 Level+즐겨찾기 한 묶음이 다음 줄로 내려가 겹침을 방지합니다.
- 패턴 숙달도와 문장 난이도를 혼동하지 않고, 원문/현재 Level/다른 문장 전환 시 배지가 해당 문장을 따라갑니다.
- 기존 즐겨찾기, 문장 학습, 듣기, 수업별 공개 여부, Supabase RPC는 변경하지 않습니다.
- 이 파일은 앱 ZIP입니다. 기존 배포된 사이트/휴대폰 앱을 자동 업데이트하지 않습니다.
