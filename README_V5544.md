# SAYWARD v5.5.44 — 문장 학습 이력 통합 연동

- 패턴 목록: 기존 `sayward_pattern_priority_summary` 단독 조회를 제거하고, `sayward_sentence_learning_unified`의 전체 페이지를 계정별로 조회해 집계합니다.
- 공식 GPT 채점, 이전 Legacy 학습, 앱 문장 연습, 별도 연습 기록을 구분하여 표시합니다. 과거 학습을 GPT 공식 Perfect/Review/Miss 또는 승급 증거로 계산하지 않습니다.
- 패턴별 상세 이력에도 이전 학습과 별도 문장 연습을 추가합니다. 공식 채점과 앱 연습은 기존 상세 화면을 유지합니다.
- 목록의 학습 횟수는 모든 기록의 합계이고 오답 횟수는 공식 GPT Review/Miss만 집계합니다.
- Supabase의 보안 적용 뷰 `public.sayward_sentence_learning_unified`가 필요합니다. 해당 뷰는 이번 작업에서 생성 및 조회 검증되었습니다.
- 소스 JavaScript 정적 구문 검사 통과. 실제 모바일 로그인/배포 환경의 화면 테스트는 아직 하지 않았습니다.
