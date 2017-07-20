import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import NavBar from './components/Nav_Bar';
import FilterPosts from './components/Filter_Posts';
import NewPostButton from './components/New_Post_Button'
import NewPost from './components/New_Post';



class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBar />
        <NewPostButton />
        <FilterPosts />
        <NewPost />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
