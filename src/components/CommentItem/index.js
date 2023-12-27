import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {cmtDetails, likeComment, deleteComment} = props
  const {name, comment, isLiked, id, iconBg, commentedTime} = cmtDetails
  const likeText = isLiked ? 'Liked' : 'Like'
  const likedImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLikeButton = () => {
    likeComment(id)
  }

  const onClickDeleteButton = () => {
    deleteComment(id)
  }

  const buttonClassName = isLiked ? 'like-button liked-text' : 'like-button'
  return (
    <li className="comment-item">
      <div className="icon-name-container">
        <div className={`icon ${iconBg}`}>{name[0]}</div>
        <div className="name-comment-container">
          <div className="name-time-container">
            <p className="name">{name}</p>
            <span className="comment-post-time">
              {formatDistanceToNow(commentedTime)}
            </span>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <button
          type="button"
          className={buttonClassName}
          onClick={onClickLikeButton}
        >
          <img src={likedImageUrl} alt="like" className="like-image" />
          {likeText}
        </button>
        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={onClickDeleteButton}
        >
          <img
            className="delete-icon"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
      <hr className="separator" />
    </li>
  )
}

export default CommentItem
