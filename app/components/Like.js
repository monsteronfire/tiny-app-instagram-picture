import React from 'react';

class Like extends React.Component {
  render() {
    return (
      <div className='like'>
        <button className={this.props.status} onClick={this.props.onClick}>♥</button>
      </div>
    )
  }
}

export default Like;
