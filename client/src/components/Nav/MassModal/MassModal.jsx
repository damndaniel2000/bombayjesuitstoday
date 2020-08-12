import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";

import "./MassModal.css";

export default function MassModal(props) {
  const [modal, setModal] = useState(props.visible);

  const detectDevice = (link) => {
    if (window.screen.width < 800)
      return `intent://${link}#Intent;scheme=vnd.youtube;package=com.google.android.youtube;S.browser_fallback_url=market://details?id=com.google.android.youtube;end;`;
    else return `https://${link}`;
  };

  return (
    <Modal
      title="Choose from Masses at :"
      centered
      visible={modal}
      closable={false}
      footer={[
        <Button
          key="back"
          onClick={() => {
            setModal(false);
            props.modalToggler();
          }}
        >
          Close
        </Button>,
      ]}
    >
      <div className="mass-modal">
        <a
          href={detectDevice(
            "www.youtube.com/channel/UCOXKCQy87-gq3kywgvOyRSQ/videos"
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p> 1. Holy Family Church, Chakala</p>
        </a>
        <hr />
        <a
          href={detectDevice("www.youtube.com/c/StPetersChurchBandra/videos")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p> 2. St. Peter's Church, Bandra</p>
        </a>
        <hr />
        <a
          href={detectDevice(
            "https://www.youtube.com/channel/UCqEOkFa9L8vF2kFj5_4Zgnw/videos"
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p> 3. St. Michael's Church, Manickpur </p>
        </a>
        <hr />
        <a
          href={detectDevice(
            "	www.youtube.com/channel/UCKvmSLoLls_Ub7GLyigiNIg/videos"
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p> 4. St. Anne's Church, Mazagaon (Weekly) </p>
        </a>
        <hr />
        <a
          href={detectDevice(
            "	www.youtube.com/channel/UCKvmSLoLls_Ub7GLyigiNIg/videos"
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p> 5. Shrine of The Infant Jesus, Nashik (Weekly)</p>
        </a>
      </div>
    </Modal>
  );
}
