import React, { useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import "./Scrollar.css";

const Scrollar = () => {
  const buttonR = useRef();
  const buttonL = useRef();
  const box = useRef();

  const scrolRight = () => {
    box.current.scrollLeft -= 450;
  };
  const scrolLeft = () => {
    box.current.scrollLeft += 450;
  };
  return (
    <>
      <div className="container-fluid testimonial-card-section">
        <div className="card-section">
          <div className="scroll-menu " ref={box}>
            <div className="scroll-card mx-2">
              <div className="student-img1"></div>
              <h1 className="card-heading">Saima Tariq</h1>
              <p className="card-heading-detail">UI/UX</p>

              <p className="card-paragraph">
                I completed the Graphic Designing course from <br />
                Nexskill, the instructor was very experienced and <br />I have
                learned a lot through assignments and live
                <br /> projects.
              </p>
            </div>
            <div className="scroll-card mx-2">
              <div className="student-img2"></div>
              <h1 className="card-heading">Umer Mehmood</h1>
              <p className="card-heading-detail">Full Stack Developer</p>

              <p className="card-paragraph">
                My experience at Nexskill was really good,<br /> I learned a lot in a
                short time. The staff is very<br /> professional.
              </p>
            </div>
            <div className="scroll-card mx-2">
              <div className="student-img3"></div>
              <h1 className="card-heading">Arooba Rehman</h1>
              <p className="card-heading-detail">DMM</p>

              <p className="card-paragraph">
                Nexskill is a great place to learn new<br /> skills and build your
                career. I completed the<br /> Graphic designing from there, and I will
                surely<br /> recommend it to others.
              </p>
            </div>
            <div className="scroll-card mx-2">
              <div className="student-img4"></div>
              <h1 className="card-heading">Asad Zafar</h1>
              <p className="card-heading-detail">Graphic Designing</p>

              <p className="card-paragraph">
                Nexskill provided me a great environment for <br />learning. The
                faculty and staff is very <br />experienced and professional.
              </p>
            </div>
            <div className="scroll-card mx-2">
              <div className="student-img5"></div>
              <h1 className="card-heading">M Farooq</h1>
              <p className="card-heading-detail">Graphic Designing</p>

              <p className="card-paragraph">
                After completing the course at Nexskill,<br /> I would strongly
                recommend this place<br /> to others.
              </p>
            </div>
            <div className="scroll-card mx-2">
              <div className="student-img6"></div>
              <h1 className="card-heading">Talha mehmood</h1>
              <p className="card-heading-detail">Graphic Designing</p>

              <p className="card-paragraph">
                Nexskill is one of the best places in<br /> Lahore for training and
                learning. My overall<br /> experience there was really good!
              </p>
            </div>
          </div>
          <button
            className="btn arrow-left"
            ref={buttonL}
            onClick={scrolRight}
            id=""
            type="button"
          >
            <AiOutlineLeft size="40" />
          </button>
          <button
            className="btn arrow-right"
            ref={buttonR}
            onClick={scrolLeft}
            type="button"
          >
            <AiOutlineRight size="40" />
          </button>
        </div>
      </div>
    </>
  );
};
export default Scrollar;
