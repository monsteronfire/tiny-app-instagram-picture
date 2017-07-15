import React from 'react';

class CommentFeed extends React.Component {
  render() {
    return (
      <section className='comment-feed'>
        {this.props.comments.map((item) => (
          <article className='comment-item' key={item.id}>
            <p>Anonymouse user says:</p>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
    )
  }
}

export default CommentFeed;
