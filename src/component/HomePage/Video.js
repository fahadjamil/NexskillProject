import React from "react";
import './Video.css';
import ReactPlayer from "react-player";
import CircleBtn from "../../Assets/Circle Button.svg";

const Video=()=>{
    return(
        <>
        <div className="main-body-2 container-fluid d-flex flex-column align-items-center justify-content-center">
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <ReactPlayer
                  className="video"
                  url="https://www.youtube.com/watch?v=v21DE66wP6A"
                />
              </div>
            </div>
          </div>

          <div className="main-body-2-sub pb-2">Course Spotlight</div>
          <div className="main-body-2-sub1 pb-3">
            Lorem ispsum dolor sit amet, consetetur sadpipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut.
          </div>
          <div
            className=" mt-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <img src={CircleBtn} alt="img-five" />
          </div>
        </div>
        </>
    )
};
export default Video;