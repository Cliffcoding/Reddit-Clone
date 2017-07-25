import React, { Component } from 'react';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this)
  }
  upVote(){
    let rating = this.props.rating +1;
    this.props.receiveRatingFromChild(rating, this.props.postId)
  }
  downVote(){
    let rating = this.props.rating - 1;

    if (this.props.rating === 0) {
      return
    }
    this.props.receiveRatingFromChild(rating, this.props.postId)
  }
  render(){
    return(
      <div>
        <a><i onClick={this.upVote} className="glyphicon glyphicon-arrow-up"></i></a>
      <a><i onClick={this.downVote} className="glyphicon glyphicon-arrow-down"></i></a>
      {this.props.rating}
      </div>
    )
  }
}
export default Rating
