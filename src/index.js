import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import NavBar from './components/Nav_Bar';
import FilterPosts from './components/Filter_Posts';
import NewPostButton from './components/New_Post_Button'
import NewPost from './components/New_Post';
import Post from './components/Post';
import SamplePosts from './sample-data'



class Index extends Component {
  constructor(props) {
    super(props);
    this.toggleNewPost = this.toggleNewPost.bind(this);
    this.addNewPost = this.addNewPost.bind(this);
    this.searchTermChange = this.searchTermChange.bind(this);
    this.searchFilter =this.searchFilter.bind(this);
    this.receiveRatingFromChild = this.receiveRatingFromChild.bind(this);
    this.receiveCommentFromChild = this.receiveCommentFromChild.bind(this);
    this.state = {
      term: '',
      newPostActive: false,
      posts: SamplePosts
    }
  }
  toggleNewPost() {
    this.state.newPostActive === true ? this.setState({newPostActive: false}) : this.setState({newPostActive: true})
  }

  addNewPost(post) {
    this.setState({
      posts: this.state.posts.concat(post)
    })
  }
  receiveRatingFromChild(rating, index) {
    this.setState({
      posts: this.state.posts.map((post, i) => {
        if (i === index) {
         post.rating = rating
        }
          return post;
      })
    })
  }
  receiveCommentFromChild(comment, index) {
    console.log(comment, index);
    this.setState({
      posts: this.state.posts.map((post, i) => {
        if (i === index) {
         post.comments = post.comments.concat(comment)
        }
          return post;
      })
    })
  }
  searchTermChange(term) {
    this.setState({
      term
    })
    console.log(this.state.term);
  }
  searchFilter(term){
    return (x) => {
      return x.title.toLowerCase().includes(term.toLowerCase())
    }
  }
  render() {
    const newPostActive = this.state.newPostActive;
    return (
      <div>
        <NavBar />
        <NewPostButton
          toggleNewPost={this.toggleNewPost}/>
        <FilterPosts
          searchTermChange={this.searchTermChange}
        />
        <NewPost
          toggleNewPost={this.toggleNewPost}
          addNewPost={this.addNewPost}
          newPostActive={newPostActive}/>
        {this.state.posts.filter(this.searchFilter(this.state.term)).map((post, i) => {
          return(
            <Post
              receiveCommentFromChild={this.receiveCommentFromChild}
              receiveRatingFromChild={this.receiveRatingFromChild}
              rating={post.rating}
              key={i}
              postId={i}
              post={post}
            />
          )
        })}

      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
