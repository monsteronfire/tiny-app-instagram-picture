import React from 'react';
import UserInfo from './UserInfo';
import Picture from './Picture';
import Like from './Like';
import CommentFeed from './CommentFeed';

class Post extends React.Component {
  render() {
    return (
      <div className='post-container'>
        <UserInfo/>
        <Picture/>
        <div className='actions'>
          <Like/>
        </div>
        <CommentFeed/>
      </div>
    )
  }
}

export default Post;
