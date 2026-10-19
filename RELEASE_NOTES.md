# SAYWARD v6.4.22 — Unified MP3 Playback

**Built from v6.4.21.**

- Learning cards (MY, OPIC, Friends, etc.) remain on the existing per-user six-voice Kokoro MP3 resolver.
- Pattern sentence-building confirmation and direct Listen button now route via `window.speakOne`.
- Word-pattern sentence-building answer feedback and match/quiz mode share the exact same resolver.
- Existing sentence quiz and word/phrase quiz already route via `speakOne` or `speakComplete` and remain covered.
- Speaking paragraphs first probe for an entire-paragraph MP3 by exact text before splitting the passage into sentences; unavailable whole paragraphs fall back to sentence-level MP3 or browser TTS.
- Exact reference English is not rewritten before file hashing; only *pattern cues* expand `~` to `something` for TTS when appropriate.
- MP3 entitlement is unchanged: only active users with `mp3_audio_enabled=true` can access Private Storage. Missing MP3, disabled users, or network errors fall back to TTS.
- No SQL changes, no new storage files, no DB grade/history changes.

## Validation scope
- JavaScript parse validation for embedded scripts.
- Node VM mock playback checks for private MP3 access, studio reference repeat, match cue fallback, exact paragraph matching, and TTS fallback. Full browser startup was not available in this execution environment.
- Actual GitHub Pages deployment and device/signed-URL playback require user validation.
