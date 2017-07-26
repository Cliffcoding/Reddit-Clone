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
    this.sortFilter = this.sortFilter.bind(this);
    this.compare = this.compare.bind(this);
    this.sortData = this.sortData.bind(this);
    this.sortByAlpha = this.sortByAlpha.bind(this);
    this.state = {
      term: '',
      sortValue: 'votes',
      newPostActive: false,
      posts: SamplePosts
    }
  }
  
  toggleNewPost() {
    this.state.newPostActive === true ? this.setState({newPostActive: false}) : this.setState({newPostActive: true})
  }
  compare(prop){
    return (a, b) => a[prop] - b[prop]
  }
  addNewPost(post) {
    this.setState({
      posts: this.state.posts.concat(post)
    })
  }
  sortByAlpha() {
    return (a, b) => {
      let nameA = a.title.toUpperCase();
      let nameB = b.title.toUpperCase();
      if (nameA < nameB) { return -1 }
      if (nameA > nameB) { return 1 }
      return 0
    }
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
  }
  sortFilter(sort){
    this.setState({
      sortValue: sort
    })
  }
  sortData(sortValue){
    if (sortValue === 'votes') {
      return this.state.posts.sort(this.compare('rating'))
    } else if (sortValue === 'date') {
     return this.state.posts.sort(this.compare('created_at'))
    }
     return this.state.posts.sort(this.sortByAlpha())
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
        <div className="container">
        <NewPostButton
          toggleNewPost={this.toggleNewPost}/>
        <FilterPosts
          sortFilter={this.sortFilter}
          searchTermChange={this.searchTermChange}
        />
        <NewPost
          toggleNewPost={this.toggleNewPost}
          addNewPost={this.addNewPost}
          newPostActive={newPostActive}/>
          {this.sortData(this.state.sortValue).filter(this.searchFilter(this.state.term)).map((post, i) => {
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
          })
        }
      </div>
      </div>
    );
  }
}


ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
