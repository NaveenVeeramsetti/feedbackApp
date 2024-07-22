// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  onClickHappyButton = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderThankyouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-screen-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thankyou">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  renderQuestionScreen = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="question-container">
        <h1 className="question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(eachEmoji => (
            <li className="list-item" key={eachEmoji.id}>
              <button
                className="button"
                type="button"
                onClick={this.onClickHappyButton}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                />
              </button>
              <br />
              <span className="emoji-name">{eachEmoji.name}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          {isFeedbackSelected
            ? this.renderThankyouScreen()
            : this.renderQuestionScreen()}
        </div>
      </div>
    )
  }
}

export default Feedback
