## 빌드 방법
1. yarn 으로 패키지 설치
2. .env 파일에 다음을 추가
  - REACT_APP_NAVER_CLIENT_ID=/* 발급받은 ID */
  - REACT_APP_NAVER_SECRET=/* 발급받은 SECRET */
3. yarn start
## 프로젝트 설명
### 프로젝트 개요
- 네이버 Open API(쇼핑 인사이트)를 활용하여 주어진 검색어에 대한 반환 결과를 그래프를 활용하여 시각적으로 표현합니다.
- 작업기간 : 2022.02.23 ~ 2022.02.26
### 기술 스택
- REACT( Functional Component )
- Redux
- UI : Antd UI, styled-components
- CRACO
- ESlint, Prettier
- Language: TypeScript
- 그래프 : recharts
- axios
### 화면 예시
![test](https://user-images.githubusercontent.com/68111046/159412777-f419ff0b-2e6c-4b80-8932-815998d7937c.gif)

### 개선 필요사항
1. Antd를 조금 더 학습하여 화면을 꺠지지 않도록 조정이 필요하다.
2. Redux-persist, Redux-saga를 적용
