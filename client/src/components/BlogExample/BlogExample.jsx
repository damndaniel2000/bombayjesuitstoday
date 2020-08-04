import React from "react";

import "./BlogExample.css";
import ShareButtons from "./ShareButton";

export default function BlogExample() {
  return (
    <>
      <div className="blog-container">
        <span className="blog-title">Title of the Blog</span>
        <br />
        <span className="blog-author">
          <i>By Your_Name</i>
        </span>
        <div
          className="blog-img"
          style={{
            backgroundImage:
              "url(https://picjumbo.com/wp-content/uploads/DSC09038-2210x1473.jpg)",
          }}
        >
          <h3
            style={{
              position: "absolute",
              top: "10%",
              left: "40%",
              backgroundColor: "rgb(255,255,255,0.7)",
              padding: "5px 10px",
              borderRadius: "10px",
            }}
          >
            The photo you choose
          </h3>
        </div>
        <p className="blog-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
          euismod nisi porta lorem mollis. Id donec ultrices tincidunt arcu non
          sodales neque sodales. Volutpat lacus laoreet non curabitur gravida
          arcu ac tortor. Commodo ullamcorper a lacus vestibulum sed arcu. Ac
          odio tempor orci dapibus ultrices. Proin fermentum leo vel orci porta
          non pulvinar. Scelerisque eleifend donec pretium vulputate sapien nec
          sagittis aliquam. Mollis nunc sed id semper risus. Vel eros donec ac
          odio tempor. Non quam lacus suspendisse faucibus interdum posuere
          lorem ipsum. Gravida dictum fusce ut placerat orci nulla pellentesque
          dignissim. Aliquam faucibus purus in massa tempor nec. Orci sagittis
          eu volutpat odio facilisis mauris sit amet. Quis hendrerit dolor magna
          eget. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra
          justo. Ut sem nulla pharetra diam sit. Pretium lectus quam id leo.
          Amet luctus venenatis lectus magna. Eleifend mi in nulla posuere.
          <br />
          <br />
          Placerat orci nulla pellentesque dignissim enim sit amet venenatis
          urna. Sit amet facilisis magna etiam. Vestibulum mattis ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa. Elementum nibh
          tellus molestie nunc non blandit massa. Cursus mattis molestie a
          iaculis at erat pellentesque adipiscing. Vivamus arcu felis bibendum
          ut tristique et. Eu mi bibendum neque egestas congue quisque egestas.
          Tellus integer feugiat scelerisque varius. Laoreet suspendisse
          interdum consectetur libero id faucibus. Augue eget arcu dictum varius
          duis at. Magna ac placerat vestibulum lectus mauris ultrices eros in
          cursus. Egestas congue quisque egestas diam in arcu cursus. Tristique
          senectus et netus et malesuada fames ac turpis. Vel orci porta non
          pulvinar neque. Eu turpis egestas pretium aenean pharetra magna ac. In
          nulla posuere sollicitudin aliquam ultrices sagittis orci.
          <br />
          <br />
          Ultricies tristique nulla aliquet enim tortor at auctor. Dictum at
          tempor commodo ullamcorper a lacus vestibulum sed arcu. Tristique
          magna sit amet purus gravida quis blandit. Pharetra magna ac placerat
          vestibulum lectus mauris ultrices. Vitae congue mauris rhoncus aenean
          vel. Laoreet suspendisse interdum consectetur libero id faucibus nisl
          tincidunt eget. Scelerisque viverra mauris in aliquam sem fringilla ut
          morbi. Suspendisse sed nisi lacus sed viverra. In dictum non
          consectetur a erat nam at. Mi in nulla posuere sollicitudin aliquam.
          Leo a diam sollicitudin tempor id eu. At ultrices mi tempus imperdiet
          nulla. Mattis vulputate enim nulla aliquet porttitor lacus luctus
          accumsan. Sed felis eget velit aliquet sagittis id consectetur. Risus
          commodo viverra maecenas accumsan. Tellus cras adipiscing enim eu
          turpis. Maecenas accumsan lacus vel facilisis.
        </p>
      </div>
      <div>
        <p className="blogs-share">
          <b>Share</b>
        </p>
        <ShareButtons />
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
