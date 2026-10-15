# SAYWARD v5.5.43 — 통합 DB 동적 콘텐츠 운영

## 목적
이번 버전부터 수업 번호/제목/카드 수/학습 콘텐츠를 DB 원본에서 받아 화면에 생성합니다. 정적 화면 내용과 운영 콘텐츠를 분리하며 앱을 새로 배포해야 하는 시점은 기능/스키마/디자인이 바뀌었을 때입니다.

## 구현
1. MY: Supabase `sayward_my_lessons` / `sayward_my_lesson_items`로 카드 제목, 수업 목록, 4개 학습 탭 구성. 과거 고정 MY 수업 제목/빈 카드 목록 제거. DB 수업 17과 같은 신규 번호도 앱 수정 없이 생성.
2. SORI / OPIC / Friends: 세 개의 과거 독립 파일 로더를 제거하고 `sayward-db-course-catalog-v5543` 단일 읽기 엔진으로 통일. DB `sayward_course_lessons`, `sayward_course_items`로 공개 수업 번호·제목·권한·카드 수·본문을 읽어 화면 생성. 본문은 수업 진입 시 로드, 선택 반복은 준비 완료 후 시작.
3. 문장 말하기/퀴즈: MY/OPIC/SORI/Friends 공통 DB 수업 목록을 각자의 수업 선택 콤보에 연동. Friends 문장 말하기 추가. 이전/다음 수업은 정렬된 DB 수업 목록을 따라 이동. 공식 Master 예문을 인증 후 실전 문장 출제 원본으로 사용하도록 교체.
4. DAY 단어 학습/퀴즈: 기존 DB 단어 원본과 개인 오답/즐겨찾기 기록 유지. DB에 연속적인 OPIC DAY 추가 시 범위와 수업 카드 개수를 갱신. TOEFL 원래 56일의 번호와 연결된 기존 학습 키는 고정하여 과거 통계 충돌 방지.
5. 모든 DB 요청은 현재 로그인 JWT 및 RLS, 관리자/학습자 ON/OFF 설정을 사용. 콘텐츠가 아직 준비되지 않은 동안 빈 DB를 공식 학습 완료로 간주하지 않음.

## 검증
- Chromium, isolated DB mock: OPIC/SORI/Friends 수업 6 자동 발견 + 카드 생성, 선택 수업 콘텐츠 로딩, 로그아웃 목록 비움.
- Chromium, full-app mock: 기존 목록에 없는 MY 17, OPIC/SORI/Friends 6 생성; 브라우저 JavaScript 오류 0건.
- Chromium, quiz mock: 4개 수업 소스 + Friends 수업 선택 + DB Master 문장 출제/기록 key 연결.
- 전체 앱 JavaScript 문법 검사: 83개 inline scripts 오류 0건.
- ZIP 파일 무결성 검사.

## 주의
- 실제 삼성 모바일 content:// 환경의 사용자 로그인 및 모든 학습 영역 끝단까지 통합 시험한 것은 아닙니다. 최초 로그인 후 MY·SORI·OPIC·Friends 새 수업 및 DAY 퀴즈를 점검하세요.
- 기존 DAY는 TOEFL 56일 / OPIC 13일의 ID 체계를 가집니다. 신규 OPIC DAY 추가는 지원하나 TOEFL DAY 번호 체계 자체를 바꾸는 작업은 기존 통계 키 마이그레이션이 필요합니다.
- DB 미출제·미승인 또는 정책 OFF인 항목은 앱이 임의로 보여주지 않습니다.
- 이번 파일은 DB 데이터 및 공식 채점/승급/History를 변경하지 않습니다.
