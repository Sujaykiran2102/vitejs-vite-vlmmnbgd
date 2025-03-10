import PropTypes from "prop-types";
import LikeButton from "./likebutton";

function PostCard({profileImage, username, content, isLiked, onLikeToggle }) {
    return (
      <div className="post-card">
        <img src={profileImage} alt={username} className="profile-pic" />
        <div>
          <h3>{username}</h3>
          <p>{content}</p>
          <LikeButton isLiked={isLiked} onToggle={onLikeToggle} />
        </div>
      </div>
    );
  }

  PostCard.propTypes = {
    profileImage: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isLiked: PropTypes.bool.isRequired,
    onLikeToggle: PropTypes.func.isRequired,
  };

  export default PostCard;