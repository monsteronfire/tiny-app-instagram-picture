import React from 'react';

class UserInfo extends React.Component {
  render() {
    return (
      <div className='user-info-container'>
        <img src={this.props.user.url}/>
        <div className='user-info'>
          <h4>{this.props.user.name}</h4>
          <p>{this.props.user.location}</p>
        </div>
      </div>
    )
  }
}

export default UserInfo;
