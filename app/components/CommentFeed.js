import React from 'react';

class CommentFeed extends React.Component {
  render() {
    return (
      <section className='comment-feed'>
        {this.props.comments.map(function (comment) {
          return (
            <article key={comment.id}>{comment}</article>
          )
        })}
      </section>
    )
  }
}

export default CommentFeed;
