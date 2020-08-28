import React, { useState } from "react";
import { Modal, Button } from "antd";

import "./MassModal.css";

export default function MassModal(props) {
  const [modal, setModal] = useState(props.visible);

  const detectDevice = (link) => {
    if (/android/i.test(navigator.userAgent))
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
        <div className="mass">
          <a
            href={detectDevice(
              "www.youtube.com/channel/UCOXKCQy87-gq3kywgvOyRSQ/videos"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p> 1. Holy Family Church, Chakala</p>
            <span>
              Weekdays - 7 am
              <br />
              Sunday - 7:30 am & 11 am(Youth)
            </span>
          </a>
        </div>
        <hr />
        <div className="mass">
          <a
            href={detectDevice("www.youtube.com/c/StPetersChurchBandra/videos")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p> 2. St. Peter's Church, Bandra</p>

            <span>
              Weekdays - 8:30 am & 7:00 pm <br />
              Saturday - 8:30 am & 6:45 pm <br />
              Sunday - 10:00 am, 11:00 am(Children's) & 6:00 pm
            </span>
          </a>
        </div>
        <hr />
        <div className="mass">
          <a
            href={detectDevice(
              "www.youtube.com/channel/UC_kLgjgChGQW0I83-_aelJg/videos"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p> 3. St. Michael's Church, Manickpur </p>
          </a>
        </div>
        <hr />
        <div className="mass">
          <a
            href={detectDevice(
              "www.youtube.com/channel/UCqEOkFa9L8vF2kFj5_4Zgnw/videos"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p> 4. St. Anne's Church, Mazagaon (Weekly) </p>
          </a>
        </div>
        <hr />
        <div className="mass">
          <a
            href={detectDevice(
              "www.youtube.com/channel/UCKvmSLoLls_Ub7GLyigiNIg/videos"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p> 5. Shrine of The Infant Jesus, Nashik (Weekly)</p>
          </a>
        </div>
      </div>
    </Modal>
  );
}
