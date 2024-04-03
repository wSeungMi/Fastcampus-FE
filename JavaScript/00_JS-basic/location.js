// Location

// 현재 페이지 정보를 변환하거나 제어함
// .href: 전체 url 주소
// .protocol: 프로토콜
// .hostname: 도메인명
// .pathname: 도메인 이후 경로
// .host: 포트 번호를 포함한 도메인명
// .port: 포트 번호
// .hash: 해시 정보(페이지의 ID)

// .assign(주소): 해당 '주소'로 페이지 이동
// .replace(주소): 해당 '주소'로 페이지 이동, 현재 페이지 히스토리를 제거
// .reload(강력): 페이지 새로고침, `true` 인수는 '강력' 새로고침

// console.log(location);

// History

// 브라우저 히스토리(세션 기록) 정보를 반환하거나 제어함

// .length: 등록된 히스토리 개수
// .scrollRestoration: 히스토리 탐색시 스크롤 위치 복원 여부 확인 및 지정
// .state: 현재 히스토리에 등록된 데이터(상태)

// .back(): 뒤로 가기
// .forward(): 앞으로 가기
// .go(위치): 현재 페이지 기준 특정 히스토리 '위치'로 이동

// .pushState(상태, 제목, 주소): 히스토리에 상태 및 주소를 추가
// .replaceState(상태, 제목, 주소): 현재 히스토리의 상태 및 주소를 교체
// > 모든 브라우저(Safaril 제외)는 '제목' 옵션을 무시한다.

console.log(history);
