# Stackers

로고 사진

# Ⅰ. 서비스 소개

---

1. 진행 기간

2. 개요
   
   - 한 줄 소개
   
   - 서비스 명

3. 타겟

4. 기획 배경
   
   - 배경
   
   - 목적
   
   - 의의

5. 주요 기능

# Ⅱ. 기술 스택

---

## **아키텍쳐 구조도**

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e2fd30b4-8304-45dc-839f-aef503229be6/%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98_%EA%B5%AC%EC%84%B1%EB%8F%84.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230215T055417Z&X-Amz-Expires=86400&X-Amz-Signature=914753b3fd5cc486fbb882dabfb98cc2133a17d49e2bc3dae2590bc10b2246b6&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25EC%2595%2584%25ED%2582%25A4%25ED%2585%258D%25EC%25B2%2598%2520%25EA%25B5%25AC%25EC%2584%25B1%25EB%258F%2584.png%22&x-id=GetObject)

### Backend

- **IntelliJ IDEA** : v 2022.2.3

- **Java SE Development Kit**: v 17

- **Postman** : v

- **Spring Boot** : v

- **Spring Data** : v

- **Spring Security** : v

- **JWT** : v

- **OAuth** : v

- **JPA** : v

- **MariaDB** : v

- **Redis** : v

- **Swagger** : v

- **ffmpeg** (동영상, 이미지 파일 업로드를 위한 라이브러리)

### Frontend

- **npm** : v 8.19.2

- **Node.js** : v 16.18.0

- **React** : v 18.2.0 (자동으로 최신버전 다운)
  
  - react-media-recorder (비디오 녹화 라이브러리)
  
  - react-dropzone (파일 드래그 앤 드롭 라이브러리)
  
  - react-router-dom (리액트 라우트 라이브러리)
  
  - react-redux (리액트 상태 관리 라이브러리)
  
  - moment (파일 저장 시간 정보 세팅을 위한 라이브러리)

- **VSCode** : v 1.74.3

- **MUI**

### CI/CD

- **AWS EC2**

- **Jenkins**

- **NGINX**

- **Docker**

- **GitLab**





# Ⅲ. 프로젝트 진행

---

### 프로젝트 구조

#### Back

```
backend/
├─ .gradle/
├─ .idea/
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ manifest.json
│  ├─ robots.txt
├─ build/
├─ gadle/
├─ src/
│  ├─ main/
│  │  ├─ java/
│  │  │  ├─ com.ssafy.stackers/
│  │  │  │  ├─ auth/
│  │  │  │  ├─ config/
│  │  │  │  │  ├─jwt/
│  │  │  │  ├─ controller/
│  │  │  │  ├─ exception/
│  │  │  │  ├─ handler/
│  │  │  │  ├─ model/
│  │  │  │  │  ├─dto/
│  │  │  │  ├─ repository/
│  │  │  │  ├─ service/
│  │  │  │  ├─ utils/
│  │  │  │  │  ├─error/
│  │  │  │  │  ├─S3Uploader.java
│  │  │  │  ├─ StackersApplication
│  │  ├─ resources/
│  ├─ test/
│  │  ├─ java/
│  │  │  ├─ com.ssafy.stackers/
│  │  │  │  ├─ StackersApplicationTests.java
├─ .gitignore
├─ build.gradle
├─ gradlew.bat
├─settings.gradle
```

#### Front

```
frontend/
├─ node_modules/
├─ public/
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ manifest.json
│  ├─ robots.txt
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ account/
│  │  ├─ station/
│  ├─ pages/
│  │  ├─ main_room/
│  │  ├─ my_page/
│  │  ├─ profile_edit/
│  │  ├─ record_room/
│  │  ├─ searchview/
│  │  ├─ sign_folder/
│  │  │  ├─ LogIn/
│  │  │  ├─ SignUp/
│  │  ├─ station_room/
│  │  │  ├─ article/
│  │  │  ├─ assets/
│  │  │  ├─ comment/
│  │  │  ├─ stationview/
│  ├─ App.js
│  ├─ App.test.js
│  ├─ index.css
│  ├─ index.js
│  ├─ logo.svg
│  ├─ reportWebVitals.js
│  ├─ router.js
│  ├─ setupProxy.js
│  ├─ setupTests.js
│  ├─ store.js
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ README.md
```

### 협업 툴, 규칙

- ##### Git
  
  Git Branch
  
  ```
  master(main)
  
  develop
  
  feature
  ```
  
  feature 브랜치 작성
  
  `feature/back/login`
  
  `feature/back/settings`
  
  `feature/front/signup`
  
  `feature/front/main-list`
  
  브랜치 이름은 전체 영어 소문자로
  
  merge request 시 브랜치 삭제에 체크 (되어 있음) → 특이사항 생길 시 팀장에게 보고
  
  `git pull origin develop` : 다른 사람 코드 땡겨오기
  
  `git branch [추가할 브랜치명]`
  
  `git checkout [이동할 브랜치명]`
  
  `git add [추가할 파일명]`
  
  `git commit -m "[커밋 메세지]"`
  
  `git push origin [현재 브랜치명]`
  
  MR 요청시 back-end, front-end 별로 MR 요청한 본인을 제외한 다른 팀원이 코드 확인 후 MR 진행

- ##### Notion
  
  **회의록**
  
  - Scrum meeting : 특이사항 있을 경우 작성
  
  - General meeting : 회의 주요 안건, 결과, 피드백 기록
  
  - Weekend meeting : 주말에 회의 시 기록
  
  **기능 명세 및 우선순위**
  
  - 우선순위가 기록되어 있는 요구사항 명세서 표
  
  **화면 설계**
  
  - 화면 설계도
  
  - 와이어프레임
  
  **레퍼런스 정리**
  
  **개발 공부 발자취 및 오류 로깅**
  
  **팀 규칙**
  
  **컨벤션**
  
  **개발 진척도 공유**

- ##### JIRA
  
  - 매주 월~금 동안 할 Task 등록 후 Sprint 시작
  
  - **Epic, Story, Task 단위**
    
    - **Epic**
      
      - 기획, 설계, FE 개발, BE 개발, 배포, TEST, 발표
    
    - **Story**
      
      - 명세서 기능(사용자가 쓰는 기능 단위)을 기준으로 작성
      - 명사형
    
    - **Task**
      
      - Task는 최대한 상세하게 쪼개어서 작성할 것
      
      - 이름은 [ `BE` , `FE` ] 를 앞에 붙여서 명사형으로 작성하고 설명은 선택적으로 동사형으로 작성할 것
        
        ex) [BE] 유저 데이터베이스 추가

- ##### MatterMost
  
  - 

- ##### Discord
  
  - 공지
  
  - 비대면 회의
    
    - 전체 회의
    
    - front-end 회의
    
    - back-end 회의
  
  - 정보 공유
  
  - front-end 정보 공유
  
  - back-end 정보 공유
1. 역할
   
   - 사진, 이름, 역할을 넣은 이미지 또는 pdf 넣기

2. 코딩 컨벤션
   
   - 노션 참고

3. 기능 명세서
   
   - 노션 요구사항 명세서 참고

4. 아키텍처
   
   - 사진 넣기

5. 와이어프레임
   
   - 피그마 참고

6. UI/UX

7. ERD

8. API

9. 배포

# Ⅳ. 프로젝트 결과

--- 

1. 실제 서비스 화면 (시나리오 순서와 같게 gif 로?)
   
   - 회원가입, 로그인
   
   - 메인
   
   - ...

2. 협업
   
   - Git Flow gif
   
   - Jira 번다운 차트 사진
   
   - Notion 스크롤 gif 

# Ⅴ. 소감 및 배운점

---
