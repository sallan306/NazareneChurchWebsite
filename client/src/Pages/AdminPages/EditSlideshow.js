import React, { Fragment } from "react";
const EditSlideshow = () => {
  return (
    <Fragment>
      <div className="slideshowTutorialContent">
        <div className="whiteSpace" />
        <div>
          Photos are uploaded using a google slideshow. The slideshow we are
          using is{" "}
          <button
                onClick={() => {window.open("https://docs.google.com/presentation/d/1hvcB5z6bY4rM8_cpBXitlx5tD20Q0-QiSsnbVWx_qRY/edit?usp=sharing","_blank")}}>
                  HERE
              </button>
        </div>
        <div>
          Once the slideshow is opened up, you can add individual images by
          making a new blank slide by clicking the + sign in the top left, then
          going to Insert -> Image -> and chose your option. You can import from
          your computer, google drive, or google photos.
        </div>
      </div>
    </Fragment>
  );
};

export default EditSlideshow;
