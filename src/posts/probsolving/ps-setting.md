---
title: PS를 위한 VS Code 세팅
date: "January 24, 2022"
path: "/vscode-setting"
---

## ⚙Visual Studio Code(C++) 알고리즘 풀이 환경 세팅하기

원래는 Visual Studio를 사용해서 알고리즘 문제풀이를 해왔는데, 새 노트북을 사고 노트북에 설치할 것들을 좀 최소화하기로 마음먹었다. 원래 웹개발을 하던 Visual Studio Code에서
여러가지 작업들을 통합해서 하기로 했다. 그런데 Visual Studio Code에서는 백준 알고리즘 문제풀이를 하기에는 불편한 점들이 몇 개 있었다.

1. 코드를 수정할 때마다 매번 컴파일 해줘야 한다.
1. 문제에서 제공하는 테스트케이스 등의 입력을 매번 복붙해야한다.
1. 컴파일과 실행을 **동시에** 할 수 없다.

이러한 불편한 점들을 확장프로그램과 유용한 함수, VS Code의 설정을 활용하여 해결할 수 있었다.

<hr/>

#### 1. Code Runner - Jun Han

이 확장프로그램을 사용하면 C++ 뿐만 아니라 다양한 언어들을 클릭 한 번에 VS Code 내에서 바로 실행시켜 볼 수 있다!  
아래 그림의 재생모양 버튼을 누르면 바로 실행시켜 결과를 볼 수 있다.

<p align="center">
<img alt="1월 가입혜택 이미지" src="https://github.com/timosean/timosean.github.io/blob/master/postimages/vscode1.png?raw=true">
</p>

<br />

#### 2. freopen함수와 input.txt 활용

백준과 유사한 환경을 만들기 위해 입력값을 txt 파일에 미리 넣어두고 파일을 실행하도록 만들어보자.  
폴더 내에 `input.txt` 파일을 만들고(이름은 꼭 `input.txt`아니어도 상관없음) `main` 함수의 첫 줄에  
`freopen("input.txt", "r", stdin);` 코드를 추가한다.  
위 코드는 `input.txt`에 있는 값을 `stdin`으로 읽어오는 코드이다.  
**이제, 백준에서 입력부분을 복사해 input.txt에 붙여넣고 code runner로 실행시키면 된다!**

<br />

#### 3. Code Snippet (사용자 코드조각) 사용하기

Snippet은 '작은 조각'을 뜻한다. 따라서, Code Snippet은 '코드 조각'인데, **재사용이 가능한** 소스코드라고 보면 된다. 따라서, 사용자가 **자주 사용하는 코드에 대한 반복 타이핑을 회피**할 수 있게 도와준다. 지정한 단축어를 입력하면 내가 지정해둔 '코드의 뼈대'가 자동으로 입력된다. 쉽게 말해서, 자동 완성을 할 수 있게 해준다!  
<br />
Code Snippet을 만들기 위해서, **[VS Code 오른쪽 하단의 톱니바퀴 아이콘 (기본설정)] - [사용자 코드 조각] - [(C++을 사용하므로)cpp.json]** 으로 들어간다.  
이후, 아래와 같이 코드를 넣어준다. (단축어는 본인 마음)

```javascript
"algorithm-init": {
    "prefix": "algorithm-init",
    "body": [
        "#include <iostream>",
        "",
        "using namespace std;",
        "",
        "int main()",
        "{",
        "  freopen(\"input.txt\", \"r\", stdin);",
        "",
        "  return 0;",
        "}"
    ],
    "description": "alogorithm init snippet"
}
```

<br />

이제, cpp 파일에서 `algorithm-init`이라는 단축어를 통해서 아래 이미지와 같이 코드 조각을 생성해 낼 수 있다.
