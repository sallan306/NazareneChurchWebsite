import React, { Fragment } from "react";
const EditSermons = () => {
  return (
    <Fragment>
      <div className="slideshowTutorialContent">
        <div className="whiteSpace" />
        <p>The sermons are on the Soundcloud account, which is <a href="https://soundcloud.com/">HERE</a></p>
        <p>username: dan@storypoint.info</p>
        <p>password: 2Samuel1234</p>
        <p>Once logged in, head over to the upload section, and drag and drop the audio file onto the web page.</p>
        <p>When titling the podcast, please follow the naming conventions I have already started so that every audio file is in the proper order</p>
        <p>Format: YYYY/MM/DD NAME OF THE SERMON</p>
        <p>This naming convention is so that the sermons will automatically play from the newest one first</p>
        <p>Once you upload the sermon, make sure you add it to the playlist "Storypoint Sermons" so it shows up on the website</p>
      </div>
    </Fragment>
  );
};

export default EditSermons;
