import React, { Component } from 'react'

import AddComment from './Add_Comment';
import Rating from './Ratings'

class Posts extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="row">
      {this.props.posts.map((post, i) => {
        return(
          <div key={i} className="col-md-12">
            <div className="well">
              <div className="media-left">
                <img src={post.imageUrl} className="media-object img-responsive" alt="Responsive"/>
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                  {post.title}
                  <Rating />
                </h4>
                <div className="text-right">
                  {post.author}
                </div>
                <p>
                  {post.body}
                </p>
                <div>

                  <i className="glyphicon glyphicon-comment"></i>
                  <a>
                    Some comments
                  </a>
                </div>
                <AddComment />
              </div>
            </div>
          </div>
        )})}
      </div>
    );
  }
}

export default Posts
