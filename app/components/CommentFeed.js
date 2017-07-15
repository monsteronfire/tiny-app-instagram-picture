import React from 'react';

class CommentFeed extends React.Component {
  render() {
    return (
      <section className='comment-feed'>
        {this.props.comments.map((item) => (
          <article className='comment-item' key={item.id}>{item.text}</article>
        ))}
      </section>
    )
  }
}

export default CommentFeed;
