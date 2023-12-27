import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const IMAGE_URL =
  'https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initCommentsList = [
  {
    id: uuidv4(),
    name: 'Richard Branson',
    comment:
      'Thanks for being so typically supportive and such a good friend, Elon. Great to be opening up space for all.',
    isLiked: true,
    iconBg: initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)],
    commentedTime: new Date('4-07-2023'),
  },
  {
    id: uuidv4(),
    name: 'Elon Musk',
    comment: 'Will see you there too wish you the best',
    iconBg: initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)],
    isLiked: false,
    commentedTime: new Date('4-06-2023'),
  },
]

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentsList: initCommentsList,
  }

  likeComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachCmt => {
        if (eachCmt.id === id) {
          return {...eachCmt, isLiked: !eachCmt.isLiked}
        }
        return eachCmt
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(eachCmt => eachCmt.id !== id),
    }))
  }

  updateName = event => this.setState({name: event.target.value})

  updateComment = event => this.setState({comment: event.target.value})

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      iconBg:
        initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)],
      commentedTime: new Date(),
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {name, comment, commentsList} = this.state

    return (
      <div className="main-bg-container">
        <div className="app-container">
          <h1 className="app-heading">Comments</h1>
          <div className="top-section-container">
            <img src={IMAGE_URL} alt="comments" className="comments-image" />
            <form className="form-container" onSubmit={this.addComment}>
              <p className="form-text">Say something about 4.0 Technologies</p>
              <input
                className="name-input"
                type="text"
                placeholder="Your Name"
                onChange={this.updateName}
                value={name}
              />
              <br />
              <textarea
                className="comment-input"
                rows="6"
                placeholder="Your Comment"
                onChange={this.updateComment}
                value={comment}
              />
              <br />
              <button type="submit" className="add-comment-button">
                Add Comment
              </button>
            </form>
          </div>
          <hr className="separator" />
          <div className="comments-count-container">
            <p className="count-text">{commentsList.length}</p>
            <p className="comments-text">Comments</p>
          </div>
          <ul className="comments-list">
            {commentsList.map(eachCmt => (
              <CommentItem
                key={eachCmt.id}
                cmtDetails={eachCmt}
                likeComment={this.likeComment}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
