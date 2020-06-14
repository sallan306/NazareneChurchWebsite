import React, { Fragment } from "react";
const EditSlideshow = () => {
  return (
    <Fragment>
      <div className="slideshowTutorialContent">
        <h1>Slideshow Editor</h1>
        <div>
          Photos are uploaded using a google slideshow. The slideshow we are
          using is{" "}
          <button
            onClick={() => {
              window.open(
                "https://docs.google.com/presentation/d/1hvcB5z6bY4rM8_cpBXitlx5tD20Q0-QiSsnbVWx_qRY/edit?usp=sharing",
                "_blank"
              );
            }}
          >
            HERE
          </button>
          <ul style={{textAlign: "left"}}>
            <li>
              make a new blank slide by clicking the + sign in the top left
            </li>
            <li>
              Insert -> Image -> upload from computer (or wherever you have the
              image)
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default EditSlideshow;
