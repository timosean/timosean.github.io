---
title: CLASS101 클론코딩 챌린지(1)
date: "January 12, 2022"
path: "/class101-challenge"
---

## 💻CLASS101 프론트엔드 클론코딩 챌린지

여느 때처럼 인스타그램 스토리를 훑어보던 중, 스토리들 사이에 낀 광고 하나를 보게되었다.
무심코 스와이프했다가 "프론트엔드 챌린지" 라고 쓰여있었던 것 같아 얼른 다시 그 광고로 돌아왔다.

마침 이 Todylog를 완성하고 다음으로 무엇을 할지 고민하고 있던 차에 아주 좋은 챌린지 기회가 찾아왔던 것이다!
참가비도 1만원으로 부담 없었고, 이마저도 제출만 한다면 돌려준다니 아주 열정적인 10일을 보낼 기회가 찾아왔다.
(게다가 상위 10% 안에 들면 개발자님들의 코드리뷰와(10만원보단 코드리뷰 받지 않을까싶다) 개발자 풀에 초대해주신다니 열심히 참여할 계기도 충분했다.)

고민할 필요도 없이 바로 신청했고, 그 후기를 아래에 남기겠다!

- Chapter 1. 겪었던 오류들과 해결과정

1. TypeScript × Styled-Components

   이전에도 Styled-Components 를 많이 써왔지만 TypeScript 자체가 처음이기 때문에 props 전달하는 문법이 따로 있다는 것을 몰랐다.
   Styled-Component에게 <ComponentName propsName={propsValue} />와 같이 그냥 props를 전달하였더니 다음과 같은 오류가 발생했다.

   **이 호출과 일치하는 오버로드가 없습니다**

   Styled-Components에게 props를 전달하려면 Styled-Component를 선언할 때 다음과 같이 작성해주어야 했다.

   ```
   const ComponentName = styled.div<{propsName: 해당Type}>`
        style here
   `
   ```

   예를 들면 다음과 같다.

   ```
   const StyledNavbar = styled.div<{isOpened: boolean}>`
        style here
    `
   ```
