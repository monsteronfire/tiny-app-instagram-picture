import React from 'react';
import UserInfo from './UserInfo';
import Picture from './Picture';
import Like from './Like';
import CommentFeed from './CommentFeed';

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
  render() {
    return (
      <div className='post-container'>
        <UserInfo user={user}/>
        <Picture image={image}/>
        <div className='actions'>
          <Like/>
        </div>
        <CommentFeed/>
      </div>
    )
  }
}

export default Post;
