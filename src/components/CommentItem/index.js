// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClassName = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedTime = formatDistanceToNow(date)

  const onLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  const onDelete = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li>
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div className="username-time">
          <p className="username">{name}</p>
          <p className="time">{postedTime} ago</p>
        </div>
      </div>
      <p className="comment"> {comment}</p>
      <div className="buttons-container">
        <div className="like-button">
          <img src={likeImageUrl} alt="like" className="like-img" />
          <button className={likeTextClassName} type="button" onClick={onLike}>
            Like
          </button>
        </div>
        <button
          className="button"
          type="button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
