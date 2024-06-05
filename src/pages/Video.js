import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import YouTube from "react-youtube";
import { getYoutube1 } from "../data/api";

function Videos() {
  const [familyVd, setFamilyVd] = useState([]);
  const [friendVd, setFriendVd] = useState([]);

  const fetchFMvideo = async () => {
    try {
      const datas = await getYoutube1();
      setFamilyVd(datas.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFMvideo();
  }, []);

  return (
    <main>
      <div className="big_title">
        <h2>Recent Videos about Travel South-Korea</h2>
      </div>
      <div className="padding_wrap">
        <ul className="video_list">
          {familyVd?.map((video, i) => {
            return (
              <li className="video_wrap" key={i}>
                <YouTube
                  videoId={`${video.id.videoId}`}
                  opts={{
                    width: "560",
                    height: "315",
                    playerVars: {
                      autoplay: 0,
                      rel: 0,
                      modestbranding: 1,
                    },
                  }}
                  onEnd={(e) => {
                    e.target.stopVideo(0);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
export default Videos;
