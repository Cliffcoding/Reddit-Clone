import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import NavBar from './components/Nav_Bar';
import FilterPosts from './components/Filter_Posts';
import NewPostButton from './components/New_Post_Button'
import NewPost from './components/New_Post';
import Posts from './components/Posts';



class Index extends Component {
  constructor(props) {
    super(props);
    this.toggleNewPost = this.toggleNewPost.bind(this);

    this.state = {
      newPostActive: true,
      posts: [{
        title: 'First Post!',
        body: 'I want to write something very descriptive, but I am just not sure',
        author: 'J-Doggy',
        imageUrl: 'https://static.pexels.com/photos/494917/pexels-photo-494917.jpeg'
      }]
    }
  }
  toggleNewPost() {
    if (this.state.newPostActive == true) {
      this.setState({newPostActive: false})
    } else if (this.state.newPostActive == false){
      this.setState({newPostActive: true})
    }
  }
  addNewPost() {

  }
  render() {
    const newPostActive = this.state.newPostActive;

    return (
      <div>
        <NavBar />
        <NewPostButton toggleNewPost={this.toggleNewPost}/>
        <FilterPosts />
        <NewPost newPostActive={newPostActive}/>
        <Posts posts={this.state.posts}/>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
