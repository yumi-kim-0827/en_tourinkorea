import axios from "axios";
const SERVICE_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_OPEN;

// [API GET] FESTIVAL 조회
export const getFestival = async ({ regionNumb, currentPage }) => {
  try {
    const responses = await axios.get(
      `https://apis.data.go.kr/B551011/EngService1/areaBasedSyncList1?serviceKey=${SERVICE_KEY}&numOfRows=16&pageNo=${currentPage}&MobileOS=ETC&MobileApp=AppTest&_type=json&showflag=1&listYN=Y&arrange=Q&contentTypeId=85&areaCode=${regionNumb}`
    );
    let datas = responses.data.response.body;
    return datas;
  } catch (error) {
    console.log(error);
  }
};

// [API GET] Tour 조회
export const getTour = async ({ regionNumb, currentPage }) => {
  try {
    const responses = await axios.get(
      `https://apis.data.go.kr/B551011/EngService1/areaBasedSyncList1?serviceKey=${SERVICE_KEY}&numOfRows=16&pageNo=${currentPage}&MobileOS=ETC&MobileApp=AppTest&_type=json&showflag=1&listYN=Y&arrange=Q&contentTypeId=76&areaCode=${regionNumb}`
    );
    let datas = responses.data.response.body;
    return datas;
  } catch (error) {
    console.log(error);
  }
};
// [API GET] ART 조회
export const getArts = async ({ regionNumb, currentPage }) => {
  try {
    const responses = await axios.get(
      `https://apis.data.go.kr/B551011/EngService1/areaBasedSyncList1?serviceKey=${SERVICE_KEY}&numOfRows=16&pageNo=${currentPage}&MobileOS=ETC&MobileApp=AppTest&_type=json&showflag=1&listYN=Y&arrange=Q&contentTypeId=78&areaCode=${regionNumb}`
    );
    let datas = responses.data.response.body;
    return datas;
  } catch (error) {
    console.log(error);
  }
};
// [API GET] FOOD 조회
export const getFood = async ({ regionNumb, currentPage }) => {
  try {
    const responses = await axios.get(
      `https://apis.data.go.kr/B551011/EngService1/areaBasedSyncList1?serviceKey=${SERVICE_KEY}&numOfRows=16&pageNo=${currentPage}&MobileOS=ETC&MobileApp=AppTest&_type=json&showflag=1&listYN=Y&arrange=Q&contentTypeId=82&areaCode=${regionNumb}`
    );
    let datas = responses.data.response.body;
    return datas;
  } catch (error) {
    console.log(error);
  }
};
// [API GET] Review 조회
export const getReviews = async () => {
  try {
    const responses = await axios.get(`https://${API_URL}`);
    const datas = responses.data;
    return datas;
  } catch (error) {
    console.log(error);
  }
};
// [API POST] Review 전송
export const postReviews = async (review) => {
  try {
    const responses = await axios.post(`https://${API_URL}`, {
      subjectId: 0,
      content: review,
      like: 12,
      dislike: 12,
      team: "string",
      answer: {
        content: "string",
        isRejected: true,
      },
    });
    console.log(responses);
    return responses;
  } catch (error) {
    console.log(error);
  }
};
