import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { getReviews, postReviews } from "../data/api";

const Review = () => {
  const [reviewList, setReviewList] = useState([]); //유저 리뷰 리스트 상태관리
  const [review, setReview] = useState({
    nickName: "",
    comment: "",
  });

  //[API GET] Review 조회 렌더링

  const fetchData = async () => {
    try {
      const userReviews = await getReviews();
      console.log(userReviews);
      setReviewList(userReviews); //상태관리 업데이트
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //코멘트 핸들러
  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  //[API POST] 제출 버튼 핸들러
  const handlePostClick = async (e) => {
    e.preventDefault();
    try {
      const result = await postReviews(review);
      console.log("post성공 :" + result);
      fetchData();
      setReview({ nickName: "", comment: "" }); //버튼 누른 후 입력창 초기화
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="review_area padding_wrap">
      <h3>Leave your message</h3>
      <div className="review_post_area">
        <Form onSubmit={handlePostClick}>
          <Form.Select
            aria-label="Default select example"
            name="nickName"
            value={review.nickName}
            onChange={handleCommentChange}
          >
            <option>Choose Nick name</option>
            <option value="🥷NeonNinja">🥷NeonNinja</option>
            <option value="😻SweetCat">😻SweetCat</option>
            <option value="KnightOfAvalon">KnightOfAvalon</option>
            <option value="🐶SnugglePuff">🐶SnugglePuff</option>
            <option value="SilverSpectre">SilverSpectre</option>
            <option value="SakuraSamurai">SakuraSamurai</option>
            <option value="DragonKitsune">DragonKitsune</option>
            <option value="🌸CherryBlossom">🌸CherryBlossom</option>
            <option value="☀️RisingSun">☀️RisingSun</option>
            <option value="🐉GoldenDragon">🐉GoldenDragon</option>
            <option value="JadeLotus">JadeLotus</option>
            <option value="SugarPlum">SugarPlum</option>
            <option value="JellyBean">JellyBean</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>your Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="comment"
              value={review.comment}
              onChange={handleCommentChange}
            />
            <button type="submit" className="primary_btn">
              Post this comment.
            </button>
          </Form.Group>
        </Form>
      </div>
      <div className="review_list_area">
        {reviewList?.map((review) => {
          return (
            <article>
              <div className="nickname_box">{review.nickName}</div>
              <div className="review_box">{review.comment}</div>
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default Review;
