import React from "react";

import "./FollowHim.css";

import ImgCarousel from "./Carousel";

const FollowMe = () => {
  return (
    <div>
      <div className="followhim-hero-img"></div>

      <section className="followhim-section">
        <div className="followhim-section-text">
          <h1 className="followhim-questions"> Who Are We ? </h1>
          <p className="followhim-content">
            The Jesuits are a religious order of priests and brothers serving in
            the Catholic Church. Founded by St Ignatius and his companions in
            the 1540 they have spread across the globe. They desire to serve
            Christ under the banner of the cross. Doing more (MAGIS) for the
            greater glory of God is their motto in life.
          </p>
        </div>
        <ImgCarousel
          images={[
            "https://res.cloudinary.com/dij0e4dwn/image/upload/v1597405398/Follow%20Him/8C1A0963_w6cxgo.jpg",
            "https://res.cloudinary.com/dij0e4dwn/image/upload/v1597405350/Follow%20Him/David_Mao_akn7by.jpg",
            "https://res.cloudinary.com/dij0e4dwn/image/upload/v1597405360/Follow%20Him/DSCN2983_otqc4b.jpg",
            "https://res.cloudinary.com/dij0e4dwn/image/upload/v1597405332/Follow%20Him/IMG_20170707_125231_-_Copy_vtz8ap.jpg",
          ]}
        />
      </section>

      <section className="followhim-section">
        <div className="followhim-section-text">
          <h1 className="followhim-questions"> What Do We Do? </h1>
          <p className="followhim-content">
            Jesuits by heart are companions of Jesus. By profession they are
            engineers, farmers, retreat directors, teachers, doctors, poets,
            lawyers, social workers, writers, administrators, professors,
            pastors, scientists, artists and many more….
            <br /> The Bombay Province Jesuits work with all people without any
            barrier of any type. Every human is a child of God. The thrust of
            their work is spiritual nourishment of the faithful, upliftment of
            the marginalized, social justice activities, inter-religious
            dialogue, accompanying youth and other ministries.
          </p>
        </div>
        <ImgCarousel
          images={[
            "https://res.cloudinary.com/dij0e4dwn/image/upload/v1597405306/Follow%20Him/IMG_20170716_092948460_t88s13.jpg",
            "https://res.cloudinary.com/dij0e4dwn/image/upload/v1597405295/Follow%20Him/Manickpur_Youth_event_Aug_2018_xnmsjw.jpg",
            "https://res.cloudinary.com/dij0e4dwn/image/upload/v1597405310/Follow%20Him/Philip_Terrasa_-_July_2018_bztwak.jpg",
            "https://res.cloudinary.com/dij0e4dwn/image/upload/v1597405326/Follow%20Him/IMG_20171122_123617_dmtvuf.jpg",
          ]}
        />
      </section>

      <section className="followhim-section">
        <div className="followhim-section-text">
          <h1 className="followhim-questions">Am I Called?</h1>
          <div className="followhim-content">
            Do you relate to any of these points?
            <ul>
              <li> A feeling of doing something for Christ. </li>
              <li>
                {" "}
                Something pulling you to do something different from what you
                are doing in your present life.{" "}
              </li>
              <li>
                Thoughts and feelings of being close to Jesus, in prayer and
                life.
              </li>
              <li>
                The desire to do something for the poor, marginalized and down
                trodden the way Jesus served them.
              </li>
              <li>Searching for a deeper Christ centered meaning in life </li>
              <li> Just the idea of becoming a priest or a brother.</li>
              <li>
                A sense that you are pushing away the idea of becoming a
                religious as it gently taps you.
              </li>
            </ul>
          </div>
        </div>
        <ImgCarousel
          images={[
            "https://res.cloudinary.com/dij0e4dwn/image/upload/v1597405285/Follow%20Him/41_-_1_July_uuanth.jpg",
            "https://res.cloudinary.com/dij0e4dwn/image/upload/v1597405285/Follow%20Him/35_-_9_July_yrv92t.jpg",
            "https://res.cloudinary.com/dij0e4dwn/image/upload/v1597405284/Follow%20Him/17_16_July_ph9vox.jpg",
            "https://res.cloudinary.com/dij0e4dwn/image/upload/v1597405284/Follow%20Him/Bombay_Jesuits_yjbc84.jpg",
          ]}
        />
        <div className="followhim-section-text">
          <br />
          <br />
          <p style={{ textAlign: "center" }} className="followhim-content">
            If you could relate to any of those points or your mind is filled
            with doubt and you are confused about your path in life, <br />
            <b>Contact Us</b>. <br /> We promise to guide you in the right way.
            <img
              className="contact-barcode"
              src={window.location.origin + "/images/contact-barcode.png"}
              alt="Contact"
            />
            Scan the above barcode to save the contact directly to your phone
            <br />
            OR
            <br /> Contact the number given below:
            <br />
            <b>Fr. Ivan D'souza SJ</b>
            <br />
            <i className="fa fa-phone" /> +91 70211 69675
          </p>
        </div>
      </section>

      <div className="followhim-slogan"> All For The Greater Glory Of God </div>
      <iframe
        className="ignatian-march"
        frameBorder="0"
        src="https://www.youtube.com/embed/E9EQOB6QNQw"
        title="Ignatian March"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default FollowMe;
