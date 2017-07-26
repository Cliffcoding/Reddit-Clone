import React, { Component } from 'react';

class AddComment extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.addComment = this.addComment.bind(this)
    this.state={
      comments:[{
        name: '',
        date: Date.now()
      }]

    }
  }
  addComment(e){
    e.preventDefault();
    this.props.receiveCommentFromChild(this.state.comments, this.props.postId)
    this.setState({
      comments: {
        name: ''
      }
    })
  }
  handleChange(e){
    this.setState({
      comments: {
      [e.target.id]: e.target.value,
      date: Date.now()
    }
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-offset-1">
          <hr />
          <form onSubmit={this.addComment} className="form-inline">
            <div className="form-group">
              <input type="text" onChange={this.handleChange} value={this.state.comments.name} id="name" className="form-control" />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddComment;
