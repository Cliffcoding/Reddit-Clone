import React, { Component } from 'react';

class FilterPosts extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.state = {
      term: '',
      value: 'date'
     };
  }
  onInputChange(term) {
    this.setState({term})
    this.props.searchTermChange(term)
  }
  handleSort(e){
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div>
        <ul className="nav nav-pills">
          <li role="presentation" className="active">
            <input onChange={event => this.onInputChange(event.target.value)} type="search" className="form-control input-sm search-form" placeholder="Filter" />
          </li>

          <div className="form-inline">
            <label htmlFor="sort">  Sort by </label>
            <select value={this.state.value} onChange={this.handleSort} className="form-control" id="sort">
              <option value="votes">Votes</option>
              <option value="date">Date</option>
              <option value="title">Title</option>
            </select>
          </div>
        </ul>
      </div>
    );
  }
}

export default FilterPosts;
