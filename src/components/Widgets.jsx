import React from "react";
import { Search } from "@mui/icons-material";
import "../styles/Widgets.css";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__inputContainer">
        <Search className="widgets__searchIcon"/>
        <input type="text" placeholder="Search Twitter" className="widgets__input"/>
      </div>
      <div className="widgets__widgetsContainer">
        <h2>What's happening?</h2>
        <TwitterTimelineEmbed
        className='widgets__twitterTimeline'
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          options={{ text: "reactjs is awesome.", via: "@kuldeepbadhan78" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
