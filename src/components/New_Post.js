import React, { Component } from 'react';


class NavBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.addPost = this.addPost.bind(this);

    this.state = {
      newPostActive: true,
      title: '',
      body: '',
      author: '',
      imageUrl: ''
    }
  }
  addPost(e) {
    e.preventDefault();
    this.props.addNewPost(this.state);
    this.setState({
      title: '',
      body: '',
      author: '',
      imageUrl: ''
    })
  }
  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);
  }

  render() {
    const {title, body, author, imageUrl} = this.state;
    if (this.props.newPostActive == true) {
      return (
        <div className="row">
          <div className="col-md-8">

            <form onSubmit={this.addPost}>
              <div>
                <label htmlFor="title">Title</label>
              <input onChange={this.handleChange} value={title} id="title" className="form-control" />
              </div>
              <div>
                <label htmlFor="body">Body</label>
              <textarea onChange={this.handleChange} value={body} id="body" className="form-control"></textarea>
              </div>
              <div>
                <label htmlFor="author">Author</label>
              <input onChange={this.handleChange} value={author} id="author" className="form-control" />
              </div>
              <div>
                <label htmlFor="image-url">Image URL</label>
              <input onChange={this.handleChange} value={imageUrl} id="imageUrl" className="form-control" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Create Post
                </button>
              </div>
            </form>

          </div>
        </div>
      );
    } else {
      return null;
    }

  }
}
export default NavBar
