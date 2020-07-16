import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import "./VideoCards.css";

const ShareButtons = (props) => {
  return (
    <div className="share-buttons">
      <FacebookShareButton url={props.videoUrl}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton url={props.videoUrl}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <EmailShareButton url={props.videoUrl}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;
