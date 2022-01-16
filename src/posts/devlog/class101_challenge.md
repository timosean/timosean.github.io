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

### 🛠 개발 과정에서 고민했던 것들

#### (1) TypeScript × Styled-Components

**[설치]**  
JavaScript × React로 Styled-Components를 설치할 때와 똑같이 설치해주었는데 자꾸 오류가 났다.  
찾아보니 TypeScript로 Styled-Components를 설치할 때는 다음과 같이 설치해야 한다고 한다.

```
yarn add styled-components @types/styled-components
```

**[props 전달]**  
이전에도 Styled-Components 를 많이 써왔지만 TypeScript 자체가 처음이기 때문에 props 전달하는 문법이 따로 있다는 것을 몰랐다.
Styled-Component에게 <ComponentName propsName={propsValue} />와 같이 그냥 props를 전달하였더니 다음과 같은 오류가 발생했다.

> **이 호출과 일치하는 오버로드가 없습니다**

Styled-Components에게 props를 전달하려면 Styled-Component를 선언할 때 다음과 같이 작성해주어야 했다.
(단일 props일 경우에 아래와 같이 작성한다. 전달할 props가 많으면 interface를 작성해야 한다고 한다.)

```
const ComponentName = styled.div <{ propsName: 해당Type } >`
  style here
`
```

예를 들면 다음과 같다.

```
const StyledNavbar = styled.div <{ isOpened: boolean } >`
  style here
 `
```

<br/>

#### (2) 테두리를 없앴는데 테두리가 생긴다..

CLASS101 사이트의 검색창을 누르면 다음과 같이 검색창 테두리에 아무런 변화가 없다.  
<img alt="CLASS101 검색창" src="https://raw.githubusercontent.com/timosean/timosean.github.io/0fdb210c89106f7cd1498ce35e19235bdd9d11ee/postimages/prob2.png"/>

하지만 분명 `border: none;`을 주었는데도 불구하고 검색창을 클릭하면 검은 테두리가 활성화되었다.

이는 input 태그의 focus 상태에서의 스타일링에서 아웃라인을 없애주면 해결이 된다.
나는 styled-components를 사용하였기 때문에 컴포넌트 내부에서 다음과 같이 스타일링 해주었다.

```
const StyledInput = styled.input <{ isOpened: boolean } >`

  many codes here...

  &:focus {
    outline: none;
  }
`
```

<br/>

#### (3) flexbox 속의 개별 요소 하나를 스타일링하기

CLASS101 사이트 상단 내비게이션 바에 '1월 가입혜택'을 보면 빨간 뱃지가 우상단에 달려있다.

<p align="center">
<img alt="1월 가입혜택 이미지" src="https://raw.githubusercontent.com/timosean/timosean.github.io/0fdb210c89106f7cd1498ce35e19235bdd9d11ee/postimages/prob3.png">
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
<img alt="dropdown_img" src="https://raw.githubusercontent.com/timosean/timosean.github.io/0fdb210c89106f7cd1498ce35e19235bdd9d11ee/postimages/prob4.png">
</p>

이를 구현하기 위해서, 드롭다운 리스트에 필요한 정보를 다음과 같이 객체 배열로 만들었다.

```javascript
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

```javascript
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

> **Object is possibly 'undefined'**

이것은 타입스크립트를 사용해서 발생한 문제로, 타입스크립트가 값이 undefined 일 수도 있다고 판단한 요소 뒤에 옵셔널 체이닝 연산자 `?.`를 추가하면 정상적으로 출력되는 것을 확인할 수 있다.  
위 코드에서 `CategoryMenus.find((menu) => menu.name === categoryName)?.submenus.map ~~`  
이렇게 고쳐주었다.

<br/>

#### (5) hover도 좋지만 MouseEvent를 적극 활용하자

이 Todylog를 개발하면서 마우스 관련 이벤트는 css `:hover`만으로 해결되는 경우가 다였어서 `:hover`밖에 생각이 안났었는데  
마우스를 올리거나 뗐을 때 등등 마우스 관련 수많은 event들이 있다는 것을 생각해냈다😂 (너무 당연한건데... 더 열심히 해야겠음)  
`onMouseEnter`와 `onMouseLeave` 이벤트가 일어날 때 isMenuOpened라는 state의 상태를 바꿔주는 식으로 구현했다.  
아래는 예시코드이다.

```javascript
const [isMenuOpened, setMenuOpened] = useState(false);

<Button onMouseEnter={() => setMenuOpened(true)} onMouseLeave={() => setMenuOpened(false)}>
```

위 (4)번의 그림에서 보듯이 '전체 카테고리'에 마우스를 올리면 드롭다운 리스트가 나타나고, 이 리스트에서 마우스를 바깥으로 옮기면 다시 리스트가 사라진다.
처음에는 단순하게 '전체 카테고리' 버튼에 `onMouseEnter`와 `onMouseLeave`를 둘 다 걸어주었는데, 이렇게 했더니 (너무 당연하지만)
드롭다운 리스트가 나타나고, 사용자가 드롭다운 메뉴에 마우스를 올리려고 하는 순간 마우스가 '전체 카테고리' 버튼을 벗어나게 되면서 드롭다운 리스트가 사라져버렸다.
(약 올리는 것도 아니고🤣)

이런 문제를 개선하기 위해서 '전체 카테고리' 버튼에는 `onMouseLeave` 이벤트를 걸어주지 않고, 드롭다운 리스트에 `onMouseLeave` 이벤트를 걸어주었다.

<br/>

#### (6) position: relative / absolute 활용하기

위 (4)번의 그림처럼 전체 카테고리 드롭다운의 메뉴에 마우스를 올리면 해당 메뉴의 세부메뉴 리스트가 옆에 등장한다.  
이걸 구현하는 데에 있어서 처음에는 다음과 같이 구현했었다.

```javascript
<MainDropDownList onMouseEnter={() => setMenuOpened(true)} onMouseLeave={() => setMenuOpened(false)}>
  <SubMenu onMouseEnter={() => setSubmenuOpened(true)}>
<MainDropDownList />

<SubMenuList onMouseLeave={() => setSubmenuOpened(false)}/>
```

여기에서 문제는, MainDropDownList에서 마우스가 떠나면 서브메뉴 리스트도 화면에서 사라져야 하는데, MainDropDownList만 화면에서 사라지고,
서브메뉴 리스트는 화면에 남아 둥둥 떠있게 되었다.  
MainDropDownList에서 마우스가 떠날 때 서브메뉴 리스트도 없어지게 만드려면 서브메뉴 리스트를 MainDropDownList의 자식으로 넣어야되겠다는
생각이 들었다.

마침 MainDropDownList의 position 속성도 `position: relative;` 였어서, 서브메뉴 리스트의 포지션을 `position: absolute;`를 주고,
부모인 MainDropDownList에 상대적으로 `top`속성과 `left`속성을 주어 위치를 조절하면 되겠다는 생각이 들었고, 이렇게해서 해결할 수 있게 되었다.

<br/>

#### (7) document.getElementById 활용하기

아래의 그림처럼 전체 카테고리 드롭다운에서 한 카테고리에 마우스를 올린 후 해당 세부메뉴 리스트로 마우스를 옮기게 되면, 전체 카테고리 드롭다운에서 선택된 카테고리의 글자가 진해지면서 오른편에 화살표가 나타나게 된다.

<p align="center"> 
<img alt="dropdown_img" src="https://raw.githubusercontent.com/timosean/timosean.github.io/484ba5500915f93798a38dba3e083e521a3e5eac/postimages/prob7.png">
</p>

그래서 생각한 로직은, 일단 각 카테고리의 아이콘에 id를 해당 카테고리 이름으로 주고, 세부메뉴 리스트에 `onMouseEnter` 시에 `document.getElementById`로 해당
아이콘을 선택한 다음, `style.visibility="visible"`을 주는 것이다.  
(물론, 아이콘의 스타일을 정의할 때 `visibility`는 `hidden`으로 주었다.)  
그리고, 당연히 세부메뉴 리스트에 `onMouseLeave` 시에는 다시 `style.visibility="hidden"`을 주어야 다른 카테고리를 선택했을 때에 그 카테고리의 화살표만
남아있게 된다.

마찬가지로, 카테고리 이름을 감싸는 컴포넌트에도 id를 주는데, 아이콘의 id와 공통된 단어가 들어가게 해줌으로써, 함수 하나에서 템플릿 리터럴을 이용하여
해결할 수 있게 했다. (다음의 코드 참고)

```
//아이콘 visibility를 조절하는 함수
const makeIconAppear = (name: string) => {
  document.getElementById(name).style.visibility = "visible"
  document.getElementById(`link-${name}`).style.fontWeight = "bold"
}
const makeIconDisappear = (name: string) => {
  document.getElementById(name).style.visibility = "hidden"
  document.getElementById(`link-${name}`).style.fontWeight = "normal"
}

//해당 컴포넌트 코드
<DropdownSection>
  <SectionTitle element="h2">크리에이티브</SectionTitle>
  {CategoryMenus.slice(0, 9).map(menu => (
    <div
      onMouseEnter={() => {
        setCategoryName(`${menu.name}`)
        setSubmenuHover(true)
      }}
      key={menu.id}
    >
      <SectionItem className="sectionItem">
        <SectionLink href={menu.to} id={`link-${menu.name}`}>
          {menu.name}
        </SectionLink>
        <RightIcon id={menu.name}>
          <ChevronRightIcon size={12} />
        </RightIcon>
      </SectionItem>
    </div>
  ))}
</DropdownSection>
```

<br/>

#### (8) class 활용하기, TypeScript에서 e.target 사용하기

아래의 그림처럼, Bottom Navigation에서 클릭한(선택한) 부분만 색상이 변하고 나머지는 다 원래의 검정색으로 복구시키는 기능을
구현해야했다. 무척이나 구현해보고 싶었지만 아이디어도 떠오르지 않았고 시도해 본 적도 없는 기능이어서 고민을 많이했다.

<p align="center"> 
<img alt="bottomnav_img" src="https://raw.githubusercontent.com/timosean/timosean.github.io/02e467c66274a12eafa99ad5f3cd7ef2f6d5815a/postimages/prob8.png">
</p>

그러다가, 클릭된 버튼을 event.target으로 가져와서, 그 버튼에 'isActive'라는 클래스 이름을 부여해주는 식으로 접근해보았다.
물론 해당 버튼의 styled-components의 스타일에는 다음과 같이 isActive 클래스에 글자색을 바꿔주는 식으로 스타일링했다.

```javascript
const StyledButton = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 0%;
  cursor: pointer;
  text-decoration: none;
  color: rgb(26, 26, 26);

  &.isActive {
    color: rgb(255, 61, 0);
  }
`
```

우선, 클릭된 버튼을 event.target 으로 가져와서 클래스이름을 추가로 부여해주는 함수 코드는 다음과 같이 작성하였다.

```javascript
const addClassName = (e: React.MouseEvent<HTMLElement>): void => {
  e.target.classList.add("isActive")
}
```

이렇게 했는데, 타입스크립트에서 다음과 같은 에러가 발생했다.

> **'EventTarget' 형식에 'classList' 속성이 없습니다**

열심히 서칭해본 결과, TypeScript에서는 다음과 같이 `as`를 사용해서 타입캐스팅을 해주면 오류가 해결된다는 글을 보았다.

```javascript
  const addClassName = (e: React.MouseEvent<HTMLElement>) : void => {
    const target = e.target as HTMLSpanElement;
    const {classList} = target;
  }
```

그렇게 해서 e.target의 classList를 뽑아내는 것까지 성공하고, 그 이후에 add와 remove 메서드도 사용할 수 있게 되었다.
해당 컴포넌트와 함수 코드는 다음과 같다.

```javascript
//해당 버튼 컴포넌트 구조
const StyledButton = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 0%;
  cursor: pointer;
  text-decoration: none;
  color: rgb(26, 26, 26);

  &.isActive {
    color: rgb(255, 61, 0);
  }
`;

//StyledButton의 자식요소이므로, 버튼의 color 속성을 물려받도록 color: inherit 설정
const ContentName = styled.div`
  font-size: 9px;
  font-weight: 600;
  color: inherit;
  line-height: 12px;
  letter-spacing: normal;
  margin: 0px;
`;

//StyledButton의 자식요소이므로, 버튼의 color 속성을 물려받도록 color: inherit 설정
const IconArea = styled.span`
  color: inherit;
  font-size: 22px;
`;

//구현 코드
<StyledButton
  onClick={(e) => {
    setOpened(false);
    addClassName(e);
  }}
>
  <IconArea className="classBtn">
    <AiOutlinePlaySquare />
  </IconArea>
  <div className="spacingBox"> </div>
  <ContentName className="classBtn">클래스</ContentName>
</StyledButton>

//클래스 리스트 조작을 위한 함수
const addClassName = (e: React.MouseEvent<HTMLElement>): void => {
  //일단 지금 오렌지색으로 변해있는 것의 isActive 클래스를 지우고
  const removeTarget = document.querySelector(".isActive");
  removeTarget?.classList.remove("isActive");

  //현재 선택된 버튼에 isActive 클래스를 추가해 오렌지색으로 바꾼다.
  const target = e.target as HTMLSpanElement;
  const { classList } = target;
  classList.add("isActive");
};
```

<br/>

#### (9) 포인터 이벤트의 대상이 되고 싶지 않다면? pointer-events: none;

위 (8)번의 문제를 해결하고 나니 문제가 하나 더 발생했다. 위 코드에서처럼 가장 바깥쪽 span(즉, StyledButton 컴포넌트)에 onClick 이벤트를
준 것을 볼 수 있다. 이렇게 해당 영역을 클릭하면 StyledButton의 color 속성이 바뀌고 그 안의 아이콘과 글자의 color는 inherit이므로 저절로 바뀌도록
해놓은 것이다.  
하지만, 버튼 안의 아이콘과 텍스트를 클릭하면 색이 변하지 않고, StyledButton의 아이콘과 텍스트를 제외한 나머지 영역을 클릭해야 아이콘과 텍스트의 색이
바뀌는 문제가 발생했다. **사용자는 분명 아이콘을 클릭할텐데 말이다!**

<p align="center"> 
<img alt="bottomnav_img" src="https://raw.githubusercontent.com/timosean/timosean.github.io/0fdb210c89106f7cd1498ce35e19235bdd9d11ee/postimages/prob10.png">
</p>

그래서 아이콘과 텍스트가 클릭되어도 무시하고 StyledButton이 클릭되도록 하는 방법을 검색해본 결과, 예상 외로 상당히 간단하게 CSS로 해결할 수 있는
부분이었다. 아이콘과 텍스트에 `pointer-events: none;`을 주면 아무리 그 위를 클릭해도 무시되고, 대신 부모요소가 클릭된다.

```javascript
//pointer-events: none 추가

const ContentName = styled.div`
  font-size: 9px;
  font-weight: 600;
  color: inherit;
  line-height: 12px;
  letter-spacing: normal;
  margin: 0px;
  pointer-events: none;
`

const IconArea = styled.span`
  color: inherit;
  font-size: 22px;
  pointer-events: none;
`
```

<br/>

#### (10) Carousel 구현하기 (feat. translate3d, useEffect)

Carousel의 이전/다음 button에서 어떻게 disabled를 조건부로 바로바로 설정하고 해제시켜 줄 수 있을까 생각해보았다.  
일단, useState로 카운터를 생성한 다음, '다음'버튼을 누르면 카운트를 1 올리고, '이전'버튼을 누르면 카운트를 1 내리는식으로 카운터를 생성하였다.  
그리고, 각 button의 disabled 속성은 boolean 값을 가지므로, boolean 값을 반환하는 식을 값으로 주었다.

```javascript
  const [tdCount, setTdCount] = useState(0);

  //특가 캐로슬에서 이전버튼 클릭 시
  const onLeftBtnClick = () => {
    setTdCount(tdCount - 1);
  };

  //특가 캐로슬에서 다음버튼 클릭 시
  const onRightBtnClick = () => {
    setTdCount(tdCount + 1);
  };


 <CarouselButton
id="prevBtn"
onClick={onLeftBtnClick}
disabled={tdCount === 0}>
```

그런데, 문제가 생겼다. 일단 Carousel을 다 만들었는데, useState를 통한 상태 변경이 즉각적으로 이루어지지 않아, Carousel이 즉각적으로 슬라이딩 되지 않았다.

```javascript
  const [tdCount, setTdCount] = useState(0);

  //특가 캐로슬에서 이전버튼 클릭 시
  const onLeftBtnClick = () => {
    setTdCount(tdCount - 1);
    const wrapper = document.querySelector(".swiper-wrapper") as HTMLDivElement;
    wrapper.style.transform = `translate3d(${-300 * tdCount + 600}px, 0, 0)`;
  };

  //특가 캐로슬에서 다음버튼 클릭 시
  const onRightBtnClick = () => {
    setTdCount(tdCount + 1);
    const wrapper = document.querySelector(".swiper-wrapper") as HTMLDivElement;
    wrapper.style.transform = `translate3d(${-300 * tdCount}px, 0, 0)`;
  };
```

그래서 다음과 같이, `useEffect`를 통해 해결하였고, `translate3d`의 계산식도 다음과 같이 하나로 통일해주었다.

```javascript
  const [tdCount, setTdCount] = useState(0);

//특가 캐로슬에서 이전버튼 클릭 시
const onLeftBtnClick = () => {
  setTdCount((num) => num - 1);
};

//특가 캐로슬에서 다음버튼 클릭 시
const onRightBtnClick = () => {
  setTdCount((num) => num + 1);
};

useEffect(() => {
  const wrapper = document.querySelector(".swiper-wrapper") as HTMLDivElement;
  wrapper.style.transform = `translate3d(${-300 * tdCount}px, 0, 0)`;
}, [tdCount]);
```

<br/>

#### (11) overflow는 주고, 스크롤바는 숨기기

모바일뷰로 봤을 때, Carousel에서 overflow는 주고, 스크롤바는 숨기고 싶었다.  
그러기 위해서, 다음과 같이 `webkit scrollbar`를 통해 스타일링 해주었다.

```javascript
const SwiperContainer = styled.div`
  margin: 0px auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0px;
  z-index: 1;
  box-sizing: border-box;

  @media only screen and (max-width: 1023px) {
    padding: 0px 24px;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`
```
