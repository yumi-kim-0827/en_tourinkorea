import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { getArts } from ".././data/api";
import Paginate from "./paginate";
import Modal from "./Modal";
import useMediaQuery from "../hooks/UseMediaQuery";
import { useInView } from "react-intersection-observer";

function Art() {
  const [currentPage, setCurrentPage] = useState(1); //지역선택 상태관리
  const [regionNumb, setRegionNumb] = useState(1); //지역선택 상태관리
  const [arts, setArts] = useState([]); //문화 리스트 상태관리
  const [totalList, setTotalList] = useState(0); //전체 페이지
  const [modal, setModal] = useState(false); //모달 상태관리
  const [thisInfo, setThisInfo] = useState({}); //사용자가 선택한 정보
  const [ref, inView] = useInView({ threshold: 0.5 }); //Inview 상태관리, 감지요소가 50%보일 경우 감지
  const isMobile = useMediaQuery("(max-width: 767px)");

  const fetchData = async () => {
    try {
      const datas = await getArts({ regionNumb, currentPage });
      const lists = datas.items.item; // 리스트
      const totalLists = datas.totalCount; // 총 리스트 갯수
      setArts((prevData) => (isMobile ? [...prevData, ...lists] : lists)); //디바이스에 따라 다르게 업로드
      setTotalList(totalLists);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [regionNumb, currentPage]);

  //지역 핸들링 함수
  const handleRegionChange = (e) => {
    setRegionNumb(e.target.value);
    setCurrentPage(1); //각 지역별 리스트 페이지네이션 초기화
    if (isMobile) {
      setCurrentPage(1);
      setArts([]); //모바일일 때 초기화
    }
  };

  //inView .. 화면에 타겟이 잡히는 경우 실행할 로직
  useEffect(() => {
    if (isMobile) {
      setTimeout(() => {
        if (inView && currentPage < Math.ceil(totalList / 16)) {
          setCurrentPage((prev) => prev + 1);
          console.log("타겟안에 들어왔다.");
        }
      }, 1500);
    }
  }, [inView]);

  return (
    <div className="festival_area">
      <div className="sub_title">Choose location in South Korea</div>
      <div className="location_slc">
        <Form.Select
          aria-label="Default select example"
          onChange={handleRegionChange}
        >
          <option selected disabled hidden>
            Select location
          </option>
          <option value="1" selected>
            Seoul
          </option>
          <option value="2">Incheon</option>
          <option value="3">Daejeon</option>
          <option value="4">Daegu</option>
          <option value="5">Gwangju</option>
          <option value="6">Busan</option>
          <option value="7">Ulsan</option>
          <option value="8">Sejong-si</option>
          <option value="31">Gyeonggi-do</option>
          <option value="32">Gangwon-do</option>
          <option value="33">Chungcheongbuk-do</option>
          <option value="34">Chungcheongnam-do</option>
          <option value="35">Gyeongsangbuk-do</option>
          <option value="36">Gyeongsangnam-do</option>
          <option value="37">Jeonbuk-do</option>
          <option value="38">Jeollanam-do</option>
          <option value="39">Jeju-do</option>
        </Form.Select>
      </div>
      <div className="sub_title">Result here</div>
      <ul>
        {arts?.length > 0 ? (
          arts.map((list) => {
            return (
              <li key={list.contentid}>
                <Card style={{ width: "18rem" }}>
                  <div className="card_img_wrap">
                    <Card.Img variant="top" src={list.firstimage} />
                  </div>
                  <Card.Body>
                    <Card.Title>{list.title}</Card.Title>
                    <Card.Text>
                      <span>
                        Date : {list.eventstartdate} ~ {list.eventenddate}
                      </span>
                      <span>address : {list.addr1}</span>
                    </Card.Text>
                    <Button
                      className="secondary_btn"
                      onClick={() => {
                        setThisInfo(list);
                        setModal(true);
                      }}
                    >
                      Detail Info
                    </Button>
                  </Card.Body>
                </Card>
              </li>
            );
          })
        ) : (
          <li className="search_result_none">Oooops! sorry...No result!</li>
        )}
      </ul>
      {!isMobile ? null : (
        <div ref={ref} style={{ width: "100%", height: 30 }} />
      )}
      {totalList > 0 && !isMobile && (
        <Paginate
          totalList={totalList}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {modal ? (
        <Modal thisInfo={thisInfo} modal={modal} setModal={setModal} />
      ) : null}
    </div>
  );
}
export default Art;
