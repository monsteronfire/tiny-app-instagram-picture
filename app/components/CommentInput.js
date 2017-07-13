import React from 'react';

class CommentInput extends React.Component {
  render() {
    return (
      <form className='comment-input'>
        <textarea></textarea>
        <button>Post</button>
      </form>
    )
  }
}

export default CommentInput;
