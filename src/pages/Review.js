import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { getReviews, postReviews } from "../data/api";

const Review = () => {
  const [reviewList, setReviewList] = useState([]); //유저 리뷰 리스트 상태관리
  const [review, setReview] = useState("");

  //[API GET] Review 조회 렌더링

  const fetchData = async () => {
    try {
      const responses = await getReviews();
      const data = responses.results;
      setReviewList(data); //상태관리 업데이트
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //코멘트 핸들러
  const handleCommentChange = (e) => {
    setReview(e.target.value);
  };

  //[API POST] 제출 버튼 핸들러
  const handlePostClick = async (e) => {
    e.preventDefault();
    try {
      const result = await postReviews(review);
      console.log("post성공 :" + result);
      fetchData();
      setReview(""); //버튼 누른 후 입력창 초기화
    } catch (error) {
      console.log(error);
    }
    setReview(""); //버튼 누른 후 입력창 초기화
  };

  return (
    <main className="review_area padding_wrap">
      <h3>Leave your message</h3>
      <div className="review_post_area">
        <Form onSubmit={handlePostClick}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>your Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="comment"
              value={review}
              onChange={handleCommentChange}
            />
            <button type="submit" className="primary_btn">
              Post this comment.
            </button>
          </Form.Group>
        </Form>
      </div>
      <div className="review_list_area">
        {reviewList?.map((review, i) => {
          return (
            <article key={i}>
              <div className="nickname_box">anonymous</div>
              <div className="review_box">{review.content}</div>
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default Review;
