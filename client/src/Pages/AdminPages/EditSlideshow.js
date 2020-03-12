import React, { Fragment } from "react";
const EditSlideshow = () => {
  return (
    <Fragment>
      <div className="slideshowTutorialContent">
        <div className="whiteSpace" />
        <div>
          Photos are uploaded using a google slideshow. The slideshow we are
          using is{" "}
          <a href="https://docs.google.com/presentation/d/1hvcB5z6bY4rM8_cpBXitlx5tD20Q0-QiSsnbVWx_qRY/edit?usp=sharing">
            HERE
          </a>{" "}
        </div>
        <p>username: storypointNazarene@gmail.com</p>
        <p>password: 2Samuel1234</p>
        <div>
          Once the slideshow is opened up, you can add individual images by
          making a new blank slide by clicking the + sign in the top left, then
          going to Insert -> Image -> and chose your option. You can import from
          your computer, google drive, or google photos.
        </div>
        <div>
          If you want to import an entire album of photos, the album needs to be
          on the same account as storypointNazarene@gmail.com, so after you log
          in go to <a href="https://photos.google.com/">HERE</a> , MAKE SURE YOU
          ARE ON THE CORRECT ACCOUNT, often times it will default to your
          personal photos account! Add all the photos to the photos section,
          then make an album using the tab on the left, then go back to the
          slideshow and do Add-Ons -> Photos to Slides -> Album Selector. Chose
          the album you want to import and you are done. you dont need to save
          it or anything, google slideshows are automatically saved. Note that
          if you add photos to an album that already exists and then do the
          Photos to Slides method, the slideshow will have duplicate photos.
        </div>
      </div>
    </Fragment>
  );
};

export default EditSlideshow;
