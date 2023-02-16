# 🪐Stackers - 숏폼 합주 영상 SNS🪐

<img title="" src="./readme_img/Stackers_logo.png" alt="" data-align="center" width="379">

# Ⅰ. 서비스 소개

---

### 진행 기간

: 2023/01/09 ~ 2023/02/17 (39일)


<br/>
### 개요

- **한줄 소개** : 숏폼을 활용한 합주 소셜 네트워크 서비스

- **서비스 명** : Stackers


<br/>
### 타겟층

- 음악에 관심있는 사람들

- 숏폼 SNS를 즐기고 싶은 사람들

- 시공간의 제약과 높은 진입장벽으로 인해 합주가 어려운 사람들

- 다양한 악기들의 정보나 영상을 접하고 싶은 사람들

- 간단한 포트폴리오를 작성하고 싶은 뮤지션들


<br/>
### 기획 배경

- #### 배경
  
  춤추고, 연주하고, 노래를 부르며 사람들은 음악을 다양한 방식으로 즐기고 표현한
  
  다. 음악은 인류의 만국 공통어라고 했던가, 어디서나 쉽게 접할 수 있고 깊은 사전지식이 
  
  없어도 즐길 수 있다. 우리는 많은 사람들이 음악에 흥미를 보이고 취미로 삼고있음에도 
  
  막상 그것을 표현할 수 있는 창구가 별로 없다는 생각이 들었다.
  
  음악은 혼자서도 즐길 수 있는 예술이지만, 예술이란 것은 결국 누군가 함께 해주지 않는
  
  다면 큰 의미를 갖지 못하기도 한다. 사람들이 함께 음악을 하고싶어해도 바쁜 현대 사회
  
  에 시간과 공간을 누군가와 공유하는 것은 큰 리스크로 다가오게된다. 이를 극복하기 위
  
  한 프로그램은 존재했다.
  
  - 공간의 제약을 극복한 싱크룸
    
    ![](./readme_img/싱크룸.png)
  
  - 시간의 제약을 극복한 자뮬러스

    ![](./readme_img/자뮬러스.png)
    
  하지만 결국 상당한 시간과 공간을 공유해야 하기도 하고, 사용하기 위해 장비가 
    
  필요하는 등의 전문성을 요구해 진입장벽이 높다는 단점이 존재했다. 또한 일정 수준
    
  이상의 실력을 가지고 있지 않으면 사람들을 모으기 어려운 것은 당연지사다.
    
  우리는 이런 **시공간의 제약을 극복**하고 **다양한 사람들이 쉽게 접근**할 수 있는 음악 
    
  서비스를 제공하고 싶었다.

- #### 목적
  
  `Stackers` 서비스를 통해,
  
  - 다양한 사람들이 **다양한 노래/악기**를 가지고 **쉽게 음악에 접근**
  
  - **웹캠을 사용**해 **손쉽게** 음악을 표현하고 즐길 수 있게 함
  
  - 음악을 즐기는 사람들의 **만남의 장소**를 제공함
  
  - 짧은 연습만으로도 **자유롭게 합주 참가**
  
  - 뮤지션들의 **자기PR**
  
  - 일반인들과 뮤지션의 합주 가능


<br/>
### 주요 기능

- #### 스택 Stack
  
  : 영상을 쌓는 과정

- #### 스테이션 Station
  
  : Stack으로 인해 제작된 영상

- #### 스태커 Stacker
  
  : 영상을 쌓는 사람들

- #### 메인 룸
  
  - 이미 완성된 스테이션과 미완성된 스테이션을 볼 수 있어요
  
  - 인기있는 스테이션 순위를 볼 수 있어요
  
  - 현재 팔로잉하는 스태커의 스테이션을 볼 수 있어요

- #### 레코드 룸
  
  - 첫 스택으로 스테이션을 시작할 수 있어요
  
  - 마음에 드는 다른 스태커의 스테이션에 자신의 연주 쌓을 수 있어요
  
  - 녹화한 스테이션을 업로드 전에 필요한 정보를 기입할 수 있어요

- #### 스테이션 룸
  
  - 스테이션과 스테이션 설명, 이 스테이션에 참여한 사람들을 볼 수 있어요
  
  - 스테이션에 나의 반응을 좋아요와 댓글로 표현해보아요
  
  - 스태커의 스테이션들이 마음에 든다면 스태커를 팔로우할 수 있어요

- #### 스태커 룸
  
  - 알리고 싶은 나의 정보, 연주 악기, 소속그룹을 보여줄 수 있어요
  
  - 멋진 연주 사진을 추가하여 나만의 프로필을 만들어 보세요
  
  - 내가 쌓은 공개/비공개 스테이션을 모아 볼 수 있어요
  
  - 스태커가 쌓은 공개 스테이션을 모아 볼 수 있어요

- #### 검색
  
  - 스테이션 설명, 스테이션 곡 정보, 스태커 아이디, 닉네임으로 검색할 수 있어요
  
  - 쌓고 싶은 스테이션을 검색하고 스택을 쌓아보세요!



<br/><br/>
# Ⅱ. 기술 스택

---

### **아키텍쳐 구조도**

![](./readme_img/아키텍쳐.png)


<br/>
### Backend

- **IntelliJ IDEA** : v 2022.2.3

- **Java SE Development Kit**: v 17

- **Postman** : v10.9.4

- **Spring Boot** : v3.0.2

- **Spring Security** : v3.0.2

- **JWT** : v0.11.5

- **JPA** : v3.0.2

- **MariaDB** : v10.10.2

- **Redis** : v7.0.8

- **S3** : v2.2.6

- **Swagger** : v2.0.2

- **ffmpeg** (동영상, 이미지 파일 업로드를 위한 라이브러리) : v0.7.0


<br/>
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


<br/>
### CI/CD

- **AWS EC2**

- **AWS S3**

- **NGINX**

- **Docker**

- **GitLab**


<br/>
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


<br/>
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


<br/>
### 협업 툴, 규칙

- #### Git
  
  Git Branch
  
  ```
  master(main)
  
  develop
  
  feature
  ```
  
  feature 브랜치 작성
  
  - 전체 영어 소문자로
  
  - 예시)
    
    - `feature/back/login`
    
    - `feature/back/settings`
    
    - `feature/front/signup`
    
    - `feature/front/main-list`
  
  MR 요청시 back-end, front-end 별로 MR 요청한 본인을 제외한 다른 팀원이 코드 확인 후 MR 진행

- #### Notion
  
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

- #### JIRA
  
  - 매주 월~금요일에 진행할 Task 등록 후 Sprint 시작
  
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

- #### MatterMost
  
  - 공지
  
  - 변동사항
  
  - 정보 공유
  
  - Gitlab 연동 알림

- #### Discord
  
  - 공지
  
  - 비대면 회의
    
    - 전체 회의
    
    - front-end 회의
    
    - back-end 회의
  
  - 정보 공유
  
  - front-end 정보 공유
  
  - back-end 정보 공유


<br/>
### 역할

![](./readme_img/팀역할.png)


<br/>
### 기능 명세서

![](./readme_img/기능명세서1.png)

![](./readme_img/기능명세서2.png)

![](./readme_img/기능명세서3.png)


<br/>
### 와이어프레임

- #### 초기 화면 설계도
  
  ![](./readme_img/화면 설계도.png)

- #### 와이어프레임
  
  ![](./readme_img/와이어프레임.png)


<br/>
### ERD

![](./readme_img/Stackers_ERD.png)


<br/>
### 배포

- 배포퀸 님 작성해주세요..



<br/><br/>
# Ⅳ. 프로젝트 결과

---

### 실제 서비스 화면 (시나리오 순서와 같게 gif 로?)

- 회원가입

- 로그인

- 메인

- 검색(상세조회로 이동, 참여하기 버튼 클릭)

- 상세조회(팔로우, 팔로잉, 댓글 달기, 마이페이지 이동)

- 마이페이지(프로필 편집, 팔로잉, 팔로우 리스트 확인, 공개/비공개 영상)


<br/>
### 협업

- #### Git Flow
  
  ![](./readme_img/GitFlow.gif)

- #### Jira 번다운 차트 사진
  
  - 마지막날에...

- #### Notion
  
  ![](./readme_img/notion.gif)



<br/><br/>
# Ⅴ. 소감 및 배운점

---

#### 정여진

#### 임세은

#### 안수빈

#### 이창민

#### 최보영

#### 백지원
