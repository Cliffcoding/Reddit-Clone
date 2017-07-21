import React, { Component } from 'react';

class NewPostButton extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pull-right">
        <p><a onClick={this.props.toggleNewPost} className="btn btn-info">New Post</a></p>
      </div>
    );
  }
}
export default NewPostButton;
