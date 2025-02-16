# 카드 검색 리스트 UI 구현

### 데이터 정보

1. [user-card](https://github.com/somin2352/react-hw/blob/main/src/data/card/card.ts)

### 컴포넌트 구성

1. [search-params](https://github.com/somin2352/react-hw/blob/main/src/utils/search-params.ts)

- `getQueryParam()`: query 값을 가져오는 함수
- `setQueryParam()`: query 값을 세팅하는 함수
- `deleteQueryParam()`: query 값을 삭제하는 함수
- `history.pushState()`를 통해 이전 url 값을 기억

2. [tags](https://github.com/somin2352/react-hw/blob/main/src/components/card/tags.tsx)

- tags 배열의 각각의 tag를 props로 전달받아 렌더링

3. [card](https://github.com/somin2352/react-hw/blob/main/src/components/card/card.tsx)

- 사용자 데이터를 props.item으로 전달받아 렌더링
- `map()`을 사용하여 props.item.tags를 `<Tag />` 컴포넌트로 렌더링

4. [search-form](https://github.com/somin2352/react-hw/blob/main/src/components/search-form/search-form.tsx)

- `decodeURIComponent()`를 통해 브라우저의 query 값을 디코딩
- `convertQueryString()` 함수를 만들어 query값을 가진 배열을 문자로 변환
- props로 전달받은 query 상태값 통해 파생된 상태를 생성
- query 상태값이 존재할 경우, `setQueryParam()`을 통해 브라우저의 query값을 설정
- `setQueryString`을 통해 현재 브라우저의 query값을 상태 관리
- `handleQuery()` 함수를 만들어 검색 입력창의 값을 브라우저의 query값으로 설정

5. [searched-list](https://github.com/somin2352/react-hw/blob/main/src/components/searched-list/searched-list.tsx)

- props.list의 name과 tags 값에서 query의 값과 일치하는 값들을 찾아 `filteredList`라는 새로운 배열로 저장
- `isEmpty`를 통해 `filteredList`에 값이 존재하는지 파악하여 존해할 경우 `<Card />` 컴포넌트를 렌더링

### 페이지 구성

1. [card-search-list](https://github.com/somin2352/react-hw/blob/main/src/pages/card-search-list/card-search-list.tsx)

- `userList`를 통해 사용자 데이터를 상태 관리
- `query`, `setQuery`를 통해 query값을 상태 관리
- `useEffect()`를 사용하여 현재 브라우저의 query값을 세팅(최초 1회 실행)
- `useList`와 `query`값을 하위 컴포넌트에 전달

---

### 결과

![Image](https://github.com/user-attachments/assets/a0667ef2-f428-410d-912b-925c66202514)

---

### 회고

1. 과제를 통해 배운 점  
   과제를 통해 강의에서 했던 내용을 다시 복습할 수 있었고 코드를 다시 작성해보면서 헷갈렸던 부분을 정리할 수 있었다. 특히, `getQueryParam()`, `setQueryParam()`, `deleteQueryParam()`에 대해서 정확히 정리하고 이해할 수 있는 경험이 되었던 것 같다.

2. 느낀 점/어려운 점  
   브라우저 query값을 설정하는 것에 아직 조금 어려움을 느껴 강의 때 했던 코드를 많이 참고했다는 점에서 아쉬움을 느꼈다. 그렇지만 스스로 직접 코드를 작성해보면서 아직 부족한 부분이 무엇이고 어느 부분을 더 복습하고 채워야할 지 알게 되어서 좋았다.

---
