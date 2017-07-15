import React from 'react';

class CommentInput extends React.Component {
  render() {
    return (
      <form className='comment-input' onSubmit={this.props.onSubmit}>
        <textarea value={this.props.text} onChange={this.props.onChange}></textarea>
        <button type='submit'>Post</button>
      </form>
    )
  }
}

export default CommentInput;
