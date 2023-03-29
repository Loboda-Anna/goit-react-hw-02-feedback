import { Component } from 'react';

export class FeedbackBtns extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>{this.renderMarkup()}</div>
      </div>
    );
  }

  renderMarkup = () => {
    const btnsNames = Object.keys(this.state);
    return btnsNames.map(btn => <button key={[btn]}>{btn}</button>);
  };
}
