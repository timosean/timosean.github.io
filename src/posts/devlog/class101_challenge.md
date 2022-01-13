---
title: 클론코딩 챌린지
date: "January 12, 2022"
path: "/class101-challenge"
---

## 💻CLASS101 프론트엔드 클론코딩 챌린지

여느 때처럼 인스타그램 스토리를 훑어보던 중, 스토리들 사이에 낀 광고 하나를 보게되었다.<br/>
무심코 스와이프했다가 "프론트엔드 챌린지" 라고 쓰여있었던 것 같아 얼른 다시 그 광고로 돌아왔다.<br/>
<br/>
마침 이 Todylog를 완성하고 다음으로 무엇을 할지 고민하고 있던 차에 아주 좋은 챌린지 기회가 찾아왔던 것이다!
참가비도 1만원으로 부담 없었고, 이마저도 제출만 한다면 돌려준다니 아주 열정적인 10일을 보낼 기회가 찾아왔다.<br/>
(게다가 상위 10% 안에 들면 개발자님들의 코드리뷰와(10만원보단 코드리뷰 받지 않을까싶다) 개발자 풀에 초대해주신다니 열심히 참여할 계기도 충분했다.)<br/>
<br/>
고민할 필요도 없이 바로 신청했고, 그 후기를 아래에 남기겠다 :-)

<hr/>

### [1] 개발 과정에서 고민했던 것들

#### (1) TypeScript × Styled-Components

이전에도 Styled-Components 를 많이 써왔지만 TypeScript 자체가 처음이기 때문에 props 전달하는 문법이 따로 있다는 것을 몰랐다.
Styled-Component에게 <ComponentName propsName={propsValue} />와 같이 그냥 props를 전달하였더니 다음과 같은 오류가 발생했다.

> **이 호출과 일치하는 오버로드가 없습니다**

Styled-Components에게 props를 전달하려면 Styled-Component를 선언할 때 다음과 같이 작성해주어야 했다.
(단일 props일 경우에 아래와 같이 작성한다. 전달할 props가 많으면 interface를 작성해야 한다고 한다.)

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

<br/>

#### (2) 테두리를 없앴는데 테두리가 생긴다..

CLASS101 사이트의 검색창을 누르면 다음과 같이 검색창 테두리에 아무런 변화가 없다.  
<img alt="CLASS101 검색창" src="https://raw.githubusercontent.com/timosean/timosean.github.io/3d1ffb5759c858594b32918a05040e3926010eeb/postimage/prob2.png"/>

하지만 분명 `border: none;`을 주었는데도 불구하고 검색창을 클릭하면 검은 테두리가 활성화되었다.

이는 input 태그의 focus 상태에서의 스타일링에서 아웃라인을 없애주면 해결이 된다.
나는 styled-components를 사용하였기 때문에 컴포넌트 내부에서 다음과 같이 스타일링 해주었다.

```
const StyledInput = styled.input<{ isOpened: boolean }>`

  many codes here...

  &:focus {
    outline: none;
  }
`;
```

<br/>

#### (3) flexbox 속의 개별 요소 하나를 스타일링하기

CLASS101 사이트 상단 내비게이션 바에 '1월 가입혜택'을 보면 빨간 뱃지가 우상단에 달려있다.

<p align="center">
<img alt="1월 가입혜택 이미지" src="https://raw.githubusercontent.com/timosean/timosean.github.io/master/postimage/prob3.png">
</p>

하지만 내가 빨간 뱃지를 만들고 배치했을 때에는 계속 전체 높이의 중간에만 위치되었다.  
아마 flexbox의 `align-items: center;` 속성 때문인 것 같았다.  
그렇게 flexbox의 개별 아이템을 따로 포지셔닝 할 수 있는 방법을 찾다가 다음과 같은 속성을 발견했다.  
바로 `align-self` 속성이다.  
<br/>

`align-self` 속성의 기본값은 `auto`로, `align-items`의 값을 그대로 물려받는다.  
따라서, 특정 아이템의 정렬을 따로 정하고 싶다면, `align-self: flex-start;`와 같이 따로 명시해주어야 한다.
이렇게 해서 빨간 뱃지를 위의 그림처럼 맨 위로 올릴 수 있게 되었다.

마찬가지로, `justify-self` 속성도 있다.

<br/>

#### (4) TypeScript 에러: Undefined 일 수도 있습니다..?

'전체 카테고리' 메뉴를 hover 했을 때 나오는 드롭다운 리스트에서의 각각의 메뉴를 hover 했을 때,  
해당 메뉴의 세부 메뉴 리스트가 옆에 등장해야 한다. (아래 그림과 같다.)

<p align="center"> 
<img alt="dropdown_img" src="https://raw.githubusercontent.com/timosean/timosean.github.io/master/postimage/prob4.png">
</p>

이를 구현하기 위해서, 드롭다운 리스트에 필요한 정보를 다음과 같이 객체 배열로 만들었다.

```
const CategoryMenus = [
  {
    id: 1,
    name: "디지털 드로잉",
    to: "https://class101.net/search?category=604f1c9756c3676f1ed0030e",
    submenus: [
      {
        id: 11,
        name: "일러스트",
        to: "https://class101.net/search?category=613070fa5b76158cac88344a",
      },
      {
        id: 12,
        name: "컨셉아트",
        to: "https://class101.net/search?category=6114891dfe1ca7f7b31b4a23",
      },
      {
        id: 13,
        name: "캐릭터 드로잉",
        to: "https://class101.net/search?category=613070fa5b76158cac88344b",
      },
      {
        id: 14,
        name: "인물 드로잉",
        to: "https://class101.net/search?category=613070fa5b76158cac88344c",
      },
      {
        id: 15,
        name: "굿즈 · 이모티콘",
        to: "https://class101.net/search?category=613070fa5b76158cac88344d",
      },
      {
        id: 16,
        name: "웹툰",
        to: "https://class101.net/search?category=613070fa5b76158cac88344e",
      },
      {
        id: 17,
        name: "캘리그라피",
        to: "https://class101.net/search?category=613070fa5b76158cac88344f",
      },
      {
        id: 18,
        name: "더 새로운 디지털 드로잉",
        to: "https://class101.net/search?category=613070fa5b76158cac883450",
      },
    ],
  },
  {
    id: 2,
    name: "드로잉",
    to: "https://class101.net/search?category=604f1c9756c3676f1ed00304",
    submenus: [
      {
        id: 20,
        name: "펜 · 연필",
        to: "https://class101.net/search?category=604f1c9756c3676f1ed00305",
      },
      {
        id: 21,
        name: "마카",
        to: "https://class101.net/search?category=604f1c9756c3676f1ed00306",
      },
      {
        id: 22,
        name: "색연필",
        to: "https://class101.net/search?category=604f1c9756c3676f1ed00307",
      },
      {
        id: 23,
        name: "수채화",
        to: "https://class101.net/search?category=604f1c9756c3676f1ed00308",
      },
      {
        id: 24,
        name: "오일파스텔",
        to: "https://class101.net/search?category=604f1c9756c3676f1ed00309",
      },
      {
        id: 25,
        name: "과슈 · 아크릴화",
        to: "https://class101.net/search?category=604f1c9756c3676f1ed0030a",
      },
      {
        id: 26,
        name: "유화",
        to: "https://class101.net/search?category=604f1c9756c3676f1ed0030b",
      },
      {
        id: 27,
        name: "동양화",
        to: "https://class101.net/search?category=604f1c9756c3676f1ed0030c",
      },
      {
        id: 28,
        name: "캘리그라피",
        to: "https://class101.net/search?category=604f1c9756c3676f1ed00312",
      },
      {
        id: 29,
        name: "더 새로운 드로잉",
        to: "https://class101.net/search?category=604f1c9756c3676f1ed0030d",
      },
    ],
  },

  ...And more objects...
```

Array.map을 이용하여 '전체 카테고리'를 hover했을 때 나타나는 드롭다운 리스트를 만들고,  
여기에서 hover한 메뉴 이름을 useState로 저장해놓고, 위의 객체 배열에서 name이 state에 저장되어 있는 이름과 같은 객체를 찾아서 submenus를 다시 map 해주는 식으로 구현했다.  
어차피 state에 저장되어있는 이름과 name값이 같은 객체는 한 개 뿐이므로, Array.find 메소드 (주어진 판별 함수를 만족하는 첫 번째 요소를 반환) 를 사용하여 다음과 같이 구현하려고 했다.

```
const [categoryName, setCategoryName] = useState("");

//전체 카테고리 드롭다운 리스트
//여기에서 hover한 메뉴의 이름이 onMouseEnter 이벤트를 통해 categoryName에 저장된다.
     ...code...

//우측에 나타나는 서브메뉴 리스트
<DropdownSection>
     <SectionTitle element="h2">{categoryName}</SectionTitle>
          {CategoryMenus.find(
               (menu) => menu.name === categoryName
               ).submenus.map((submenu) => (
               <AdditionalSectionItem
                    key={submenu.id}
                    to={submenu.to}
                    className="sectionItem"
               >
                    {submenu.name}
                  </AdditionalSectionItem>
          ))}
</DropdownSection>
```

그러나 다음과 같은 에러가 발생했다.

> Object is possibly 'undefined'

이것은 타입스크립트를 사용해서 발생한 문제로, 타입스크립트가 값이 undefined 일 수도 있다고 판단한 요소 뒤에 옵셔널 체이닝 연산자 `?.`를 추가하면 정상적으로 출력되는 것을 확인할 수 있다.  
위 코드에서 `CategoryMenus.find((menu) => menu.name === categoryName)?.submenus.map ~~`  
이렇게 고쳐주었다.
