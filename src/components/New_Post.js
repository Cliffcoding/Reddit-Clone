import React, { Component } from 'react';


class NavBar extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="row">
        <div className="col-md-8">

          <form>
            <div>
              <label for="title">Title</label>
            <input id="title" className="form-control" />
            </div>
            <div>
              <label for="body">Body</label>
            <textarea id="body" className="form-control"></textarea>
            </div>
            <div>
              <label for="author">Author</label>
            <input id="author" className="form-control" />
            </div>
            <div>
              <label for="image-url">Image URL</label>
            <input id="image-url" className="form-control" />
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
  }
}
export default NavBar
