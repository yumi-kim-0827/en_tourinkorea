import React, { useEffect } from "react";

const Modal = ({ thisInfo, setModal }) => {
  const upData =
    thisInfo.modifiedtime.slice(0, 4) +
    "-" +
    thisInfo.modifiedtime.slice(4, 6) +
    "-" +
    thisInfo.modifiedtime.slice(6, 8);
  const handleCopy = () => {
    navigator.clipboard.writeText(thisInfo.addr1).then(() => {
      alert("Address copied to clipboard!");
    });
  };

  useEffect(() => {
    // 모달이 열릴 때 body에 no-scroll 클래스를 추가
    document.body.classList.add("no-scroll");

    // 모달이 닫힐 때 body에서 no-scroll 클래스를 제거
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <div className="modal_area">
      <div
        className="modal_bg"
        onClick={() => {
          setModal(false);
        }}
      ></div>
      <div className="modal_card">
        <div className="modal_close">
          {" "}
          <button
            className="primary_btn"
            onClick={() => {
              setModal(false);
            }}
          >
            닫기
          </button>
        </div>
        <div className="modal_content">
          <div className="category">Address : </div>
          <div className="content">
            {" "}
            {thisInfo.addr1}{" "}
            <button className="secondary_btn" onClick={handleCopy}>
              Address copy
            </button>
          </div>
        </div>
        <div className="modal_content">
          <div className="category">Info Title : </div>
          <div className="content">{thisInfo.title}</div>
        </div>
        <div className="modal_content">
          <div className="category">Upload date : </div>
          <div className="content">{upData}</div>
        </div>
        <div className="modal_content">
          <div className="category">Tel: </div>
          <div className="content">{thisInfo.tel}</div>
        </div>
        <img src={thisInfo.firstimage} alt="information of Korea trip" />
      </div>
    </div>
  );
};

export default Modal;
