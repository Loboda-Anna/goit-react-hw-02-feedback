import { Component } from 'react';
import './FeedbackOptions.css';

export class FeedbackOptions extends Component {
  static defaultProps = {};

  static propTypes = {};

  renderMarkup = () => {
    const btnsNames = Object.keys(this.props.options);
    return btnsNames.map(label => (
      <button
        key={label}
        id={label}
        onClick={this.props.onLeaveFeedback}
        className="btns"
      >
        {label}
      </button>
    ));
  };
  render() {
    return <div>{this.renderMarkup()}</div>;
  }
}
