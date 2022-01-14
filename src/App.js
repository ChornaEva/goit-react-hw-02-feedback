import "./App.css";
import React, { Component } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // метод для оставления филбека по клику
  onLeaveFeedback = (event) => {
    this.setState((prevState) => {
      return {
        [event.target.textContent]: prevState[event.target.textContent] + 1,
      };
    });
  };

  // метод для суммарного подсчёта полож-х отзывов
  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  // метод для подсчёта % полож-х отзывов
  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return Math.trunc((good * 100) / (good + neutral + bad));
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback(this.state) === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state
              )}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

// / создаем методы для отлова клика на кнопку и прибавляем к текущему кол-ву 1

// onGoodClick = () => {
//   this.setState((prevstate) => {
//     return {
//       good: prevstate.good + 1,
//     };
//   });
// };

// onNeutralClick = () => {
//   this.setState((prevstate) => {
//     return {
//       neutral: prevstate.neutral + 1,
//     };
//   });
// };

// onBadClick = () => {
//   this.setState((prevstate) => {
//     return {
//       bad: prevstate.bad + 1,
//     };
//   });
// };

// {/* <div>
//           <button type="button" onClick={this.onGoodClick}>
//             Good
//           </button>
//           <button type="button" onClick={this.onNeutralClick}>
//             Neutral
//           </button>
//           <button type="button" onClick={this.onBadClick}>
//             Bad
//           </button>
//         </div> */}
// {/* <ul>
//           <li>Good: {this.state.good}</li>
//           <li>Neutral: {this.state.neutral}</li>
//           <li>Bad: {this.state.bad}</li>
//           <li>Total: {this.countTotalFeedback(this.state)}</li>
//           <li>
//             Positive feedback:
//             {this.countPositiveFeedbackPercentage(this.state)}%
//           </li>
//         </ul> */}
