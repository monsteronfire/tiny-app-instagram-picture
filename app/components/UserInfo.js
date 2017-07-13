import React from 'react';

class UserInfo extends React.Component {
  render() {
    return (
      <div className='user-info-container'>
        <img src={this.props.user.url}/>
        <h4>{this.props.user.name}</h4>
      </div>
    )
  }
}

export default UserInfo;
