SAYWARD v6.4.45 / Android 기존 화면 그대로 재표시 기능
========================================================
문제: 일반 홈화면 바로가기(웹 주소 링크)는 Chrome 새 탭/새 탐색으로 시작할 수 있습니다.
개선: 정식 설치형 PWA(standalone) + launch_handler.focus-existing

[GitHub Pages 배포]
ZIP에 포함된 아래 5개 파일을 현재 SAYWARD 사이트의 index.html과 같은 폴더에 모두 올리세요.
  index.html
  sayward.webmanifest
  sayward-sw.js
  sayward-icon-192.png
  sayward-icon-512.png
관리 파일은 기존과 동일하게 index.html 하나이며, 4개는 설치 기능 보조 파일입니다.
업로드 위치를 임의로 변경하면 manifest/scope가 맞지 않습니다.

[갤럭시 Chrome 재설치]
1. GitHub Pages 사이트에서 v6.4.45 버전 표시 확인
2. 홈 화면의 이전 SAYWARD 바로가기 아이콘 삭제 (링크만 삭제. 학습 데이터 삭제 아님)
3. Chrome 웹사이트를 열고 '⋮' > '앱 설치' 또는 '홈 화면에 추가'에서 설치형 앱 설치
4. 설치 후 SAYWARD를 홈 화면 아이콘으로 실행, 학습 화면으로 이동
5. 홈 버튼 → 다시 설치된 SAYWARD 아이콘 클릭
   기존 인스턴스가 살아 있으면 기존 학습 화면을 다시 보여주는 것이 목표입니다.

[유의사항]
- 이 기능은 사용 중인 Android/Chrome/WebAPK 환경에서 실제로 테스트해야 합니다.
- 기존 '주소 바로가기'는 코드 변경만으로 설치형 PWA로 변환되지 않습니다.
- Chrome에서 열린 기존 브라우저 탭과 설치된 PWA는 실행 인스턴스가 다를 수 있습니다.
- 안드로이드가 프로세스를 종료했다면 페이지는 새로 실행됩니다.
- 설치형 PWA가 되어도 안드로이드의 백그라운드 마이크 제한이 없어지는 것은 아닙니다.
- 이 PWA Service Worker는 네트워크 요청만 하며 오프라인 캐시를 사용하지 않습니다.
- Supabase DB, 녹음, 학습, MP3 기능의 앱 로직은 변경하지 않았습니다.

[삭제·되돌리기]
문제가 있다면 홈 화면 PWA를 제거하고 기존 v6.4.44 index.html을 올리면 됩니다.
