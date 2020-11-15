import React from "react";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { makeStyles } from "@material-ui/core";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

import "./VideoCards.css";

const useStyle = makeStyles((theme) => ({
  icons: {
    fontSize: 35,
    cursor: "pointer",
  },
}));

const ShareButtons = ({ videoUrl, detectDevice }) => {
  const classes = useStyle();

  return (
    <div className="share-buttons">
      <div title="Share on Facebook">
        <FacebookShareButton url={videoUrl}>
          <FacebookIcon className={classes.icons} />
        </FacebookShareButton>
      </div>
      <div title="Share on Whatsapp">
        <WhatsappShareButton url={videoUrl}>
          <WhatsAppIcon className={classes.icons} />
        </WhatsappShareButton>
      </div>
      <div title="Open in Youtube">
        <OpenInNewIcon
          className={classes.icons}
          onClick={() => detectDevice(videoUrl)}
        />
      </div>
    </div>
  );
};

export default ShareButtons;
