import { Component } from 'react';

export class FeedbackOptions extends Component {
  static defaultProps = {};

  static propTypes = {};

  renderMarkup = () => {
    const btnsNames = Object.keys(this.props.options);
    return btnsNames.map(label => (
      <button key={label} id={label} onClick={this.props.onLeaveFeedback}>
        {label}
      </button>
    ));
  };
  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>{this.renderMarkup()}</div>
      </div>
    );
  }
}
