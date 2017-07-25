import React, { Component } from 'react';

import Rating from './Ratings';
import Comments from './Comments';
import AddComment from './Add_Comment';

class Post extends Component {
  constructor(props) {
    super(props);
    this.addNewComment = this.addNewComment.bind(this);
    this.toggleComments = this.toggleComments.bind(this);
    this.state={
      comments: this.props.post.comments,
      commentsShowing: false
    }
  }
  addNewComment(newComment) {
    this.setState({
        comments: this.state.comments.concat(newComment)
    })
  }
  toggleComments() {
    this.state.commentsShowing === true ? this.setState({ commentsShowing: false }) : this.setState({ commentsShowing: true})
  }
  render() {
    return (
      <div className="row">
          <div  className="col-md-12">
            <div className="well">
              <div className="media-left">
                <img width="200px" height="200px" src={this.props.post.imageUrl} className="media-object" alt="Responsive"/>
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                  {this.props.post.title}
                  <Rating
                    receiveRatingFromChild={this.props.receiveRatingFromChild}
                    rating={this.props.rating}
                    postId={this.props.postId}
                  />
                </h4>
                <div className="text-right">
                  {this.props.post.author}
                </div>
                <p>
                  {this.props.post.body}
                </p>

                    <i className="glyphicon glyphicon-comment"></i>
                    <a onClick={ this.toggleComments }>
                      Comments
                    </a>
                  {this.state.commentsShowing === true &&
                  <div>
                    {this.props.post.comments.map((comment, i) => {
                      return(
                        <Comments
                          key={i}
                          commentId={i}
                          comments={this.state.comments}
                          comment={comment}
                        />
                      )
                    })}

                  <div>
                    <AddComment
                      postId={this.props.postId}
                      receiveCommentFromChild={this.props.receiveCommentFromChild}/>
                  </div>
                    </div>
                }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post
