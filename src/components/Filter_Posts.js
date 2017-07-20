import React, { Component } from 'react';

class FilterPosts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className="nav nav-pills">
          <li role="presentation" className="active">
            <input type="search" className="form-control input-sm search-form" placeholder="Filter" />
          </li>
          <div className="form-inline">
            <label for="sort">  Sort by </label>
          <select className="form-control" id="sort">
              <option>Some text</option>
              <option>Some text</option>
            </select>
          </div>
        </ul>
      </div>
    );
  }
}

export default FilterPosts;
