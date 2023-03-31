import { Component } from 'react';
import './Statistics.css'

export class Statistics extends Component {
  static defaultProps = {
    positivePercentage: 0,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    if (total) {
      return (
        <ul className='statistics__items'>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{total}</li>
          <li>Positive feedback:{positivePercentage}%</li>
        </ul>
      );
    }
  }
}
