# DDobok(또복)

> 주짓수 도복 큐레이팅을 위한 웹사이트인 DDobok(또복)의 프론트엔드 코드 저장소입니다.

![전체 데모](https://user-images.githubusercontent.com/79842380/215327372-cb503153-8156-4b2a-9dd0-713d2e610d2b.gif)

## 팀원 소개

<table>
  <tbody >
    <tr >
      <td align="center"><a href="https://github.com/SeokyoungYou"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/79842380?v=4" width="100px; height="100px" alt=""/><br /><sub><b>SeokyoungYou</b></a><ul><li>프론트엔드 개발</li></sub><br /></td>
      <td align="center"><a href="https://github.com/eakyoungyu"><img style="margin-top: 20px;" src="https://avatars.githubusercontent.com/u/39245582?v=4" width="100px;" alt=""/><br /><sub><b>EakyoungYou</b></sub></a><ul><li>백엔드 개발</li><br /></td>
    </tr>
  </tbody>
</table>

- [백엔드 코드 저장소](https://github.com/eakyoungyu/DDobok-backend)

## 프로젝트 살펴보기

### 1. 실행 방법

```
npm install
npm start
```

### 2. 배포 링크 및 최종 구현 데모

[배포 웹사이트 링크](https://seokyoungyou.github.io/DDobok-frontend/)

### 3. 프로젝트 구조

```
📦src
 ┣ 📂__test__ // Unit test
 ┣ 📂api
 ┣ 📂class
 ┣ 📂components
 ┃ ┣ 📂Filters // 도복 필터링
 ┃ ┣ 📂Gi
 ┃ ┣ 📂deviceWrapper // Desktop, Mobile 구분용 컨테이너
 ┣ 📂constants
 ┣ 📂routes
 ┣ 📂store
 ┣ 📂styles
 ┣ 📂type
 ┗ 📂utlis
```

### 4. 사용 라이브러리/패키지

<div style="float: left;">
  <img src="https://img.shields.io/badge/React-3776AB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
  <img src="https://img.shields.io/badge/Recoil-3776AB?style=for-the-badge&logo=Recoil&logoColor=white">
   <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/Husky-808080?style=for-the-badge&logo=Husky&logoColor=white">
   <img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=GitHubActions&logoColor=white">
      <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=Jest&logoColor=white">
</div>

- 데스크톱/모바일 인지: [`react-device-detect`](https://www.npmjs.com/package/react-device-detect)

### 5. Git 사용 방법

- [Git Branch Strategy & Commit Message Convention](https://github.com/SeokyoungYou/DDobok-frontend/wiki/1.-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B0%9C%EC%9A%94#git-%ED%99%9C%EC%9A%A9-%EB%B0%A9%EB%B2%95)

## 구현 기능 목록

1. [모바일/데스크톱 기기를 감지하는 적응형(Adaptive) Website 구현](https://github.com/SeokyoungYou/DDobok-frontend/wiki/2.-%EA%B5%AC%ED%98%84-%EA%B8%B0%EB%8A%A5-%EB%AA%A9%EB%A1%9D#1-%EB%AA%A8%EB%B0%94%EC%9D%BC%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%86%B1-%EA%B8%B0%EA%B8%B0%EB%A5%BC-%EA%B0%90%EC%A7%80%ED%95%98%EB%8A%94-%EC%A0%81%EC%9D%91%ED%98%95adaptive-website-%EA%B5%AC%ED%98%84)
2. [가격/색깔에 따라 도복을 필터링하는 로직을 Recoil atom & selector 로 구현](https://github.com/SeokyoungYou/DDobok-frontend/wiki/2.-%EA%B5%AC%ED%98%84-%EA%B8%B0%EB%8A%A5-%EB%AA%A9%EB%A1%9D#2-%EA%B0%80%EA%B2%A9%EC%83%89%EA%B9%94%EC%97%90-%EB%94%B0%EB%9D%BC-%EB%8F%84%EB%B3%B5%EC%9D%84-%ED%95%84%ED%84%B0%EB%A7%81%ED%95%98%EB%8A%94-%EB%A1%9C%EC%A7%81%EC%9D%84-recoil-atom--selector-%EB%A1%9C-%EA%B5%AC%ED%98%84)

## 프로젝트 주안점

### 1. Cache API를 사용하여 프론트엔드 단에서 자체적으로 HTTP 캐싱을 구현하였습니다.

- 해결한 문제: 사용자가 색상/가격 필터를 변경할 때마다 발생하는 GET 요청을 캐싱하여, 마지막 응답이 발생한 시점 1 일 이내에는 캐싱 데이터를 사용하도록 구현하였습니다.

- 서버에서 보내는 응답 헤더를 수정하기 어려운 경우를 산정하여 브라우저 저장소인 Cache API를 사용하였습니다.

![반복 요청](https://user-images.githubusercontent.com/79842380/215330931-66adf95d-4c5a-4281-8517-d1c19556a1d3.gif)

> [ 블로그 글: [Cache API] 프론트엔드의 자체적인 HTTP caching 구현 및 만료 일자 지정하기 (feat. 서버의 response headers를 변경할 수 없을 때)](https://velog.io/@skyu_dev/Cache-API-서버-응답response의-파일을-캐싱하여-불필요한-요청을-줄여보자)


### 2. CI/CD를 적용하여 코드 안전성을 높이고 및 자동 배포로 개발에 집중하는 환경을 만들었습니다.

#### CI: **Husky**를 사용하여 `commit` 이전에 `test` 스크립트를 실행하도록 하였습니다.
- 현재는 **Jest**로 구현한 query를 조합하는 유닛 테스트를 실행합니다.

<img width="895" alt="image" src="https://user-images.githubusercontent.com/79842380/215330725-4e58481b-00ea-4d3d-8db2-feb17798c90c.png">

#### CD: **GitHub Actions**를 활용하여 `main` 브랜치에서 `push` 이벤트가 발생하면 `gh-pages`를 사용하여 자동 배포합니다.

![image](https://user-images.githubusercontent.com/79842380/215330774-2eb1a603-147a-4db7-a9bb-cc038a59b482.png)


## 개선 필요 사항

1. [Scroll viewport 화면에서 `loading="lazy"` 적용 필요성 확인](https://github.com/SeokyoungYou/DDobok-frontend/wiki/4.-%EC%B6%94%EA%B0%80-%EA%B0%9C%EC%84%A0-%EB%B0%8F-%EB%B3%B4%EC%99%84-%EC%98%88%EC%A0%95-%EB%A6%AC%EC%8A%A4%ED%8A%B8#1-scroll-viewport-%ED%99%94%EB%A9%B4%EC%97%90%EC%84%9C-loadinglazy-%EC%A0%81%EC%9A%A9-%ED%95%84%EC%9A%94%EC%84%B1-%ED%99%95%EC%9D%B8)
