import PropTypes from "prop-types";

function LikeButton( {isLiked, onToggle} ) {
    return (
      <button 
        onClick={onToggle} 
        style={{ color: isLiked ? 'red' : 'black', cursor: 'pointer' }}
      >
        {isLiked ? '❤️' : '🤍'} Like
      </button>
    );
  }

  LikeButton.propTypes = {
    isLiked: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
  };

  export default LikeButton;