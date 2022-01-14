import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // создаем методы для отлова клика на кнопку и прибавляем к текущему кол-ву 1

  onGoodClick = () => {
    this.setState((prevstate) => {
      return {
        good: prevstate.good + 1,
      };
    });
  };

  onNeutralClick = () => {
    this.setState((prevstate) => {
      return {
        neutral: prevstate.neutral + 1,
      };
    });
  };

  onBadClick = () => {
    this.setState((prevstate) => {
      return {
        bad: prevstate.bad + 1,
      };
    });
  };

  // создаю метод для суммарного подсчёта полож-х отзывов
  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  // создаю метод для подсчёта % полож-х отзывов
  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return Math.trunc((good * 100) / (good + neutral + bad));
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          {/* передаем метод, который вызывается при клике */}
          <button type="button" onClick={this.onGoodClick}>
            Good
          </button>
          <button type="button" onClick={this.onNeutralClick}>
            Neutral
          </button>
          <button type="button" onClick={this.onBadClick}>
            Bad
          </button>
        </div>
        <h1>Statistics</h1>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback(this.state)}</li>
          <li>
            Positive feedback:{" "}
            {this.countPositiveFeedbackPercentage(this.state)}%
          </li>
        </ul>
      </div>
    );
  }
}

export default App;

// onLeaveFeedback = (option) => {
//   // console.log("ckick on me");
//   // console.log(event.target);
//   // console.log(option);

//   this.setState((prevState) => {
//     // console.log(prevState);
//     return {
//       [option.target.textContent]: prevState[option.target.textContent] + 1,
//     };
//   });
// };

// {Object.keys(this.state).map(key => (
//   <button
//     key={key}
//     type="button"
//     onClick={() => this.handleClick(key)}
//   >
//     {key}
//   </button>
// ))}
