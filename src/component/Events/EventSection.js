import React from "react";
import "./EventSection.css";
import img1 from "../../Assets/news1.jpg";
import img2 from "../../Assets/news2.jpg";
import img3 from "../../Assets/news3.jpg";

const EventSection = () => {
  return (
    <>
      <div className="eventSection mt-3">
        <div className="container">
          <div className="event-heading p-5">Events And News</div>
          <div className="row pt-2 px-5 pb-2">
            <div className="col-md-6 pt-2">
              <img className="news" src={img1} />
            </div>
            <div className="col-md-6 pt-2">
              <div className="news-heading">Nexskill visited Kamalia</div>
              <div className="news-location"></div>
              <div className="news-detail pt-3">
                Nexskill aims to encourage youth empowerment by offering its
                services and learning to children. The students of Kamalia
                visited Nexskill where our COO gave a speech to guide and
                encourage students and focused on the importance of youth
                empowerment.
              </div>
              <hr className="news-line" />
            </div>
            <div className="col-md-6 py-5">
              <img className="news" src={img2} />
            </div>
            <div className="col-md-6 py-5">
              <div className="news-heading">Career Counselling</div>
              <div className="news-location"></div>
              <div className="news-detail pt-3">
                A virtual session with Mr. Haroon Akhtar (Chief Happiness Office
                at AUJ GROUP OZI Technology) was held for the students of Forman
                Christian College on “Career Counselling”. This event covered
                all the essentials for building a strong career path.
              </div>
              <hr className="news-line" />
            </div>
            <div className="col-md-6 py-5">
              <img className="news" src={img3} />
            </div>
            <div className="col-md-6 py-5">
              <div className="news-heading">MOU Signed between Nexskill and Superior University</div>
              <div className="news-location">16th of June 2021</div>
              <div className="news-detail pt-3">
                Nexskill signed a Memorandum of
                Understanding (MOU) with the Superior Group to join hands for
                future collaborations and shared youth empowerment goals.
              </div>
              <hr className="news-line" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventSection;
