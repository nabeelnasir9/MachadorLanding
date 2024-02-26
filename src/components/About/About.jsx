import React from "react";
import "./Abouts.css";

export default function About() {
  return (
    <div className="AboutDetailsWrapper">
      <div className="AboutDetailsContainer">
        <div className="LeftAboutDetails">
          <h1 className="LeftAboutDetailsHeading">
            Integrate effortlessly across multiple platforms
          </h1>
          <p className="LeftAboutDetailsDescription">
            Meet your network where they are and build familiarity with
            infinitely more people, on a hyper-personalized level. Whether you
            want your clone embedded on your own website, integrated with our
            API, in Slack, LinkTree, Instagram, TikTok, email, SMS or somewhere
            else, your Delphi clone can be used anywhere to engage with your
            fans.
          </p>
        </div>

        <div className="atomContainer">
          <span className="nucleus">
            Explore <span>Our Tools,</span> That We Use
          </span>
          <div className="orbit orbit1" />
          <div className="orbit orbit2" />
          <img
            src="./1.png"
            alt="electron-type1"
            className="electron electronType1"
          />
          <img
            src="./glob.png"
            alt="electron-type2"
            className="electron electronType2"
          />
          <img
            src="./2.png"
            alt="electron-type3"
            className="electron electronType3"
          />
          <img
            src="./glob.png"
            alt="electron-type4"
            className="electron electronType4"
          />
          <img
            src="./3.png"
            alt="electron-type5"
            className="electron electronType5"
          />
          <img
            src="./glob.png"
            alt="electron-type6"
            className="electron electronType6"
          />
          <img
            src="./6.png"
            alt="electron-type7"
            className="electron electronType7"
          />
          <img
            src="./glob.png"
            alt="electron-type8"
            className="electron electronType8"
          />
          <img src="./4.png" className="electron electronType9" />
          <img
            src="./glob.png"
            alt="electron-type10"
            className="electron electronType10"
          />
          <img
            src="./5.png"
            alt="electron-type11"
            className="electron electronType11"
          />
          <img
            src="./glob.png"
            alt="electron-type12"
            className="electron electronType12"
          />
        </div>
      </div>
    </div>
  );
}
