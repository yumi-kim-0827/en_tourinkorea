import { useState, useEffect } from "react";

const UseMediaQuery = (query) => {
  // useState를 사용하여 matches라는 상태를 선언하고, 초기값을 window.matchMedia(query).matches로 설정합니다.
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    // mediaQueryList 객체를 생성하여, 주어진 쿼리에 대한 미디어 쿼리 리스트를 만듭니다.
    const mediaQueryList = window.matchMedia(query);

    // 리스너 함수를 정의합니다. 이 함수는 이벤트가 발생할 때 matches 상태를 업데이트합니다.
    const listener = (event) => setMatches(event.matches);

    // mediaQueryList에 리스너를 추가합니다.
    mediaQueryList.addListener(listener);

    // 컴포넌트가 언마운트될 때 리스너를 제거합니다.
    return () => mediaQueryList.removeListener(listener);
  }, [query]);

  // matches 상태를 반환합니다.
  return matches;
};

export default UseMediaQuery;
