import React, { Component } from 'react';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this)
    this.state = {
      count: 0
    }
  }
  upVote(){
    this.setState((prevState) => {
      console.log(prevState.count);
      count: prevState.count++
    })
  }
  downVote(){
    if (this.state.count === 0) {
      return
    }
    this.setState((prevState) => {
      count: prevState.count--
    })
  }
  render(){
    return(
      <div>
        <a><i onClick={this.upVote} className="glyphicon glyphicon-arrow-up"></i></a>
      <a><i onClick={this.downVote} className="glyphicon glyphicon-arrow-down"></i></a>
      {this.state.count}
      </div>
    )
  }
}
export default Rating
