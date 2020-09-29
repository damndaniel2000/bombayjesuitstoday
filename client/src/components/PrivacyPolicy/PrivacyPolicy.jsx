import React from "react";

import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <>
      <p className="privacy-policy-title"> Our Privacy Policy </p>
      <div className="privacy-policy">
        <p>
          As Bombay Jesuits Today is a website for the church by the church, we
          aren't into collecting your information secretly and using it for our
          own profit or benefits. Below is our policy and what we do with the
          data we collect.
        </p>
        <p>
          If you have additional questions or want to know more about how our
          website works, feel free to reach out to us.
        </p>
        <b> Consent </b>
        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
        <b>Information We Collect</b>
        <p>
          If you are one of our Jesuit brethren, we may ask you to give out your
          name and a photo of yourself. This is so that we can mention you in
          our list of Contributors.
        </p>
        <b>Cookies </b>
        <p>
          Like most websites today, we collect "cookies". These cookies are used
          to enhance your experience on our website and also helps us to tailor
          our website according to your needs.
        </p>
        <p>
          Currently, cookies are only used to periodically ask you about
          enabling notifications so that you can always be up to date with our
          content.
        </p>
        <p>
          For more information on cookies, please read{" "}
          <a
            href="https://www.cookieconsent.com/what-are-cookies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            "What Are Cookies?"
          </a>
        </p>
        <p>
          You can always choose to disable cookies through your individual
          browser options. You can know about the process to disable cookies on
          your browser's official webpage or through their forums
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
