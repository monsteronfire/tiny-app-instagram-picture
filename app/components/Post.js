import React from 'react';
import UserInfo from './UserInfo';
import Picture from './Picture';
import Like from './Like';
import CommentFeed from './CommentFeed';
import CommentInput from './CommentInput';

const user = {
  url: 'app/images/profile-picture.jpg',
  name: 'Bob Loblaw',
  location: 'San Francisco'
};

const image = {
  url: 'app/images/instagram-picture.jpg',
  alt: 'Beautiful orange bridge in the fog'
};

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
      comments: [],
      text: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {
    this.setState({like: !(this.state.like)});
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prev) => ({
      comments: prev.comments.concat(newItem),
      text: ''
    }));
  }

  render() {
    const status = this.state.like ? 'love' : null;

    return (
      <div className='post-container'>
        <UserInfo user={user}/>
        <Picture image={image}/>
        <div className='actions'>
          <Like status={status} onClick={this.handleClick}/>
        </div>
        <CommentFeed comments={this.state.comments}/>
        <CommentInput text={this.state.text} onSubmit={this.handleSubmit} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Post;
