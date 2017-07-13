import React from 'react';

class Picture extends React.Component {
  render() {
    return (
      <div className='picture-container'>
        <img src={this.props.image.url} alt={this.props.image.alt}/>
      </div>
    )
  }
}

export default Picture;
