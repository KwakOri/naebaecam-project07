# naebaecam-project07

## 🗂️ 프로젝트 소개

내일배움캠프 React 5기 chapter 05 개인 프로젝트입니다!<br>
프로젝트 메인 테마는 포켓몬 도감 만들기입니다!

## 프로젝트 미리보기

- 업데이트 예정

## 🔖 링크

- 업데이트 예정

## ⏳ 개발 기간

2024.07.01(월) ~ 2024.07.05(금)

## 🐤 개발자 소개

곽재훈

벨로그 주소: <a href="https://velog.io/@jh5414092/posts">velog: https://velog.io/@jh5414092/posts</a>

## 기술 스택
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/react.js-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>


## 📌 주요 기능

- [ ]  App router 기반, typescript 사용, tailwindcss 사용을 베이스로 한 Nextjs 14 버전으로 프로젝트가 구성되어야 합니다.
- [ ]  Layout 에서 Title, description 에 대한 Metadata 를 설정하고, 어플리케이션 전체에 적용될 UI 를 구현합니다.
- [ ]  151번까지의 포켓몬 리스트를 보여주는 페이지를 구현합니다.
    - root 페이지에서 보여줘도 무방합니다.
    - 반드시 클라이언트 컴포넌트로 작성해주세요. (`use client 사용`)
    - 포켓몬 리스트 페이지에서 직접적으로 관련 api 를 호출하는 것이 아닌, nextjs api 폴더 내에서 해당 로직에 대한 api 를 구현해야 합니다. (포켓몬 리스트 페이지 → Nextjs api 호출 → Nextjs 서버가 포켓몬 API 호출)
    - 151개의 포켓몬을 불러오는 API 는 로직 제공해드립니다. (직접 구현하셔도 무방합니다.)
- [ ]  특정 포켓몬의 디테일을 보여주는 페이지를 구현합니다.
    - 다이나믹 페이지로 구성해주셔야 합니다. (힌트 : `/[id]`)
    - 특정 포켓몬 디테일에 대한 정보를 가져오는 로직을 nextjs api handler 를 통해서 구현하도록 합니다. (리스트와 동일)
    - 단, 반드시 서버 컴포넌트로 작성해주세요. (`use client 사용 금지`)
    - 포켓몬 리스트에서 특정 포켓몬을 클릭했을 때 디테일페이지를 보여주고, 디테일 페이지에서 리스트로 돌아 갈 수 있는 로직을 만들어 주시면 더 좋을 것 같습니다.
- [ ]  포켓몬 리스트와 상세페이지에서 항상 포켓몬들의 이미지를 보여주도록 합시다. Nextjs 가 제공하는 `<Image>` 를 이용합니다.
- [ ]  포켓몬 데이터에 대한 타입, 컴포넌트들의 props 에 대한 타입 등 어플리케이션 전체에 적절한 타입이 명시되어야 합니다.

Readme 작성에 참고한 링크

- <a href="https://velog.io/@cotn963/TIL-4-GITHUB-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-README-%EA%BE%B8%EB%AF%B8%EA%B8%B0">차슈님 벨로그</a>

- <a href="https://cocoon1787.tistory.com/689">코딩 공부 일지님 티스토리</a>
