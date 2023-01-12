import React, {forwardRef} from "react";
import { Avatar } from "@mui/material";
import {
  Verified,
  ChatBubbleOutline,
  Repeat,
  FavoriteBorder,
  Publish,
} from "@mui/icons-material";
import "../../styles/Feed/Post.css";

const Post = forwardRef(({ displayName, username, verified, text, image, avatar }, ref) => {
  return (
    <div className="post" ref={ref}>
      <Avatar src={avatar} className="post__avatar" />
      <div className="post__body">
        <div className="post__header">
          <h3>
            {displayName}
            <span className="post__iconUsername">
              {verified && <Verified className="post__badge" />}

              {username}
            </span>
          </h3>
          <div className="post__headerDescription">{text}</div>
        </div>
        {
          image ?  <img src={image} alt="kuldeep" className="post__img" /> : null
        }
       
        <div className="post__footer">
          <ChatBubbleOutline className="post__footerIcons" />
          <Repeat className="post__footerIcons" />
          <FavoriteBorder className="post__footerIcons" />
          <Publish className="post__footerIcons" />
        </div>
      </div>
    </div>
  );
});

export default Post;
