import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Post = ({ name, profilepic, desc, img }) => {
  return (
    <div className="post">
      <div className="post-container">
        <div className="post-user">
          <div className="post-userInfo">
            <img className=" one" src={profilepic} alt="" />
            <div className="post-details">
              <span className="post-name">{name}</span>

              <span className="post-date">Now</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="post-content">
          <p>{desc}</p>
          <img className="post-image" src={img} alt="" />
        </div>
        <div className="post-info">
          <div className="post-item1">
            <ThumbUpIcon />
          </div>
          <div className="post-item1">
            <ThumbDownIcon />
          </div>
          <div className="post-item1">
            <ShareOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
