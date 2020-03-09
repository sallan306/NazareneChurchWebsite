import React, { Fragment } from "react";
const PictureUpload = () => {

  return (
    <Fragment>
      <div className="whiteSpace" />
  <div>Photos are uploaded using a google slideshow. The slideshow we are using is (insert link here) and is registered to (insert google email here) and can only be modified with this login information. Once the slideshow is opened up, you can add individual images by going to Insert -> Image -> and chose your option. You can import from your computer, google drive, or google photos.</div>
      <div>If you want to import an entire album of photos, make the album in the google photos of (insert google email here), then go back to the slideshow and do Add-Ons -> Photos to Slides -> Album Selector. Chose the album you want to import and you are done. you dont need to save it or anything, google slideshows are automatically saved.</div>
    </Fragment>
  );
};

export default PictureUpload;
