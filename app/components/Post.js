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
      comments: ['hey', 'hi', 'hello']
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({like: !(this.state.like)});
    console.log(this.state.like);
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
        <CommentInput/>
      </div>
    )
  }
}

export default Post;
