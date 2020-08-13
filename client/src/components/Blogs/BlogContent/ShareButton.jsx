import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const ShareButtons = (props) => {
  return (
    <>
      <div className="blogs-share-buttons-container">
        <div className="blogs-share-buttons">
          <FacebookShareButton url={props.link}>
            <FacebookIcon size={35} round />
          </FacebookShareButton>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <WhatsappShareButton url={props.link}>
            <WhatsappIcon size={35} round />
          </WhatsappShareButton>
        </div>
      </div>
    </>
  );
};

export default ShareButtons;
