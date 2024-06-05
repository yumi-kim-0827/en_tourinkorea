# 💡Information website for foreign tourists

영어권 외국 관광객을 위한 한국 관광정보 조회 사이트입니다.
YOUTUBE API를 활용하여 여행 관련 유투브 영상 조회과
코멘트 남기기 기능을 추가하였습니다.

# 🖥️View web site

https://yumi-kim-0827.github.io/en_tourinkorea

<!--프로젝트 대문 이미지-->

![스크린샷 2024-05-29 172517](https://github.com/yumi-kim-0827/simpletodo/assets/116349476/4a354f3a-5851-4879-89cd-6e297135ca4d)

<!--목차-->

# Table of Contents

- [[1] About the Project](#1-about-the-project)
  - [Features](#features)
  - [Technologies](#technologies)
- [[2] Getting Started](#2-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [[3] Usage](#3-usage)
- [[4] Contribution](#4-contribution)
- [[5] Acknowledgement](#5-acknowledgement)
- [[6] Contact](#6-contact)
- [[7] License](#7-license)

# [1] About the Project

한국에 놀러오는 외국인을 위해 좀 더 심플하며 직관적인 관광정보 조회 웹사이트를 만들고 싶어 진행하게 되었습니다.

## Features

- 반응형
- 싱글 페이지 어플리케이션인 React 기반 프로젝트
- Helmet 메타 테이터 최적화
- Youtube API search list 활용

## Technologies

- React js
- scss
- javascript
- Axios
- react-helmet-async
- react-router-dom

# [2] Getting Started

## Prerequisites

- npm

```bash
npm install npm@latest -g
```

## Installation

1. Repository 클론

```bash
git clone https://github.com/your-username/project-repository
```

2. NPM packages 설치

```bash
npm install
```

# [3] Usage

- react-helmet-async을 활용하여 SPA에서 SEO 최적화를 위한 메타 데이터를 개선하였습니다.

```java

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta property="og:site_name" content="Tour in South Korea" />
        <meta
          property="og:title"
          content="Explore Korea: Your Ultimate Travel Destination"
        />
        <meta
          property="og:url"
          content="https://yumi-kim-0827.github.io/en_tourinkorea/"
        />
        <meta
          property="og:description"
          content="Discover the wonders of Korea with our comprehensive travel guide. From vibrant cities to serene landscapes, experience the best of Korean culture, cuisine, and attractions."
        />
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        .
       .
       .
      </Routes>
    </div>
  );
}

```

- PC 페이지네이션과 모바일 무한 스크롤을 같은 Paginate 컴포넌트를 활용하여 구현하였습니다.
- useMemo 훅을 활용해 불필요하게 렌더링되는 부분을 수정하였습니다.

```java
import { useState, useEffect, memo } from "react";

function Paginate({ totalList, currentPage, setCurrentPage }) {
  console.log("페이지네이션 호출!");
  const recordPerPage = 16; //한 페이지에 12개씩 보여주기
  const totalPage = Math.ceil(totalList / recordPerPage); //전체 페이지 수
  const totalPageArray = [...new Array(totalPage + 1).keys()].slice(1); //총 페이지 배열
  const [showPages, setShowPages] = useState([]); //보여줄 페이지 배열
  const [startIdx, setStartIdx] = useState(0); //시작페이지
  const [endIdx, setEndIdx] = useState(5); //끝페이지

  //페이지 번호 계산 함수
  const getPageNumber = () => {
    const currentArr = totalPageArray.slice(startIdx, endIdx);
    setShowPages(currentArr);
  };

  useEffect(() => {
    getPageNumber();
  }, [startIdx, endIdx, totalList]);

  if (totalList <= 16) {
    //총 갯수가 16개 이하일 때 페이지네이션 안보이게
    return null;
  }

  return (
    <div className="pagination_area">
      <button
        disabled={currentPage === 1 ? true : false}
        onClick={() => {
          setCurrentPage(currentPage - 1);
          if (currentPage % 5 == 1) {
            setStartIdx(startIdx - 5);
            setEndIdx(startIdx);
          } //1, 6, 11..
        }}
      >
        prev
      </button>
      <ul className="pagination">
        {showPages.map((pageNm) => {
          return (
            <li
              key={pageNm}
              onClick={() => {
                setCurrentPage(pageNm);
              }}
              style={{ fontWeight: pageNm === currentPage ? "bold" : "normal" }}
            >
              {pageNm}
            </li>
          );
        })}
      </ul>
      <button
        disabled={currentPage === totalPage ? true : false}
        onClick={() => {
          setCurrentPage(currentPage + 1);
          if (currentPage % 5 == 0) {
            setStartIdx(endIdx);
            setEndIdx(endIdx + 5);
          }
        }}
      >
        next
      </button>
    </div>
  );
}
const memoizedPaginate = memo(Paginate);
export default memoizedPaginate;

```

# [4] Contribution

버그 수정에 🐞, 아이디어 제공에 💡, 새로운 기능 구현에 ✨를 사용할 수 있습니다.\*

- (예시) 🐞 [YUMEEKIM](https://github.com/yumi-kim-0827): 메인페이지 버그 수정

# [5] Acknowledgement

- design https://www.behance.net/gallery/197368319/Salesforce-CRM-AI-Scheduler-UX-UI-Design?tracking_source=search_projects&l=5

# [6] Contact

- 📧 yumee0827@naver.com
- 📋 [https://github.com/yumi-kim-0827](https://github.com/yumi-kim-0827)

# [7] License

MIT 라이센스

<!--Url for Badges-->

[license-shield]: https://img.shields.io/github/license/dev-ujin/readme-template?labelColor=D8D8D8&color=04B4AE
[repository-size-shield]: https://img.shields.io/github/repo-size/dev-ujin/readme-template?labelColor=D8D8D8&color=BE81F7
[issue-closed-shield]: https://img.shields.io/github/issues-closed/dev-ujin/readme-template?labelColor=D8D8D8&color=FE9A2E

<!--Url for Buttons-->

[readme-eng-shield]: https://img.shields.io/badge/-readme%20in%20english-2E2E2E?style=for-the-badge
[view-demo-shield]: https://img.shields.io/badge/-%F0%9F%98%8E%20view%20demo-F3F781?style=for-the-badge
[view-demo-url]: https://dev-ujin.github.io
[report-bug-shield]: https://img.shields.io/badge/-%F0%9F%90%9E%20report%20bug-F5A9A9?style=for-the-badge
[report-bug-url]: https://github.com/dev-ujin/readme-template/issues
[request-feature-shield]: https://img.shields.io/badge/-%E2%9C%A8%20request%20feature-A9D0F5?style=for-the-badge
[request-feature-url]: https://github.com/dev-ujin/readme-template/issues

<!--URLS-->

[license-url]: LICENSE.md
[contribution-url]: CONTRIBUTION.md
[readme-eng-url]: ../README.md
