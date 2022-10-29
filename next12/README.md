- [ ] getLayout 에 대해서 알아보기
  - `_app`에서 페이지별 다른 Layout을 적용할 때 조건문을 사용
- [ ] 이미지 최적화 뜯어보기
- [ ] shallow routing

  - 상태는 유지하고 URL만 바꾸고 싶을 경우. 사용자가 어떤 동작을 했고 그 기록을 쿼리로 남기고 싶을 때, 새로고침을 해도 유지된다. (무한스크롤 탐색)
  - 즉 데이터 패치가 일어나지 않게 함
  - `router.push(url, as, { shallow: true })`: 로컬 state 유지 / data fetching x
