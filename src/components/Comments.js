import React, { Component } from 'react';
class Comments extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <div>

          <div className="row">
            <div className="col-md-offset-1">
                <div>
                  <hr />
                  <p>
                    {this.props.comment.date.toLocaleTimeString()}
                  </p>
                  <p>
                    {this.props.comment.name}
                  </p>
                </div>

            </div>
          </div>
        </div>
      )
    }
}
export default Comments;
