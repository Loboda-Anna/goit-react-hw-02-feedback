import { Component } from 'react';


export class Notification extends Component {
  render() {
    if (!this.props.total) {
      return <h2 className="message ">{this.props.message}</h2>;
    }
  }
}
