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
