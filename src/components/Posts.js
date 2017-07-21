import React, { Component } from 'react'

import AddComment from './Add_Comment';

class Posts extends Component {
  constructor(props) {
    super(props);

    
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">

          <div className="well">
            <div className="media-left">
              <img className="media-object" />
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                Some Text
                |
                <a><i className="glyphicon glyphicon-arrow-up"></i></a>
              <a><i className="glyphicon glyphicon-arrow-down"></i></a>
                10
              </h4>
              <div className="text-right">
                Some Author
              </div>
              <p>
                Some text
              </p>
              <div>
                Some time ago
                |
                <i className="glyphicon glyphicon-comment"></i>
                <a>
                  Some comments
                </a>
              </div>
              <AddComment />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts
