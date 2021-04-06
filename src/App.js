import { Component } from 'react';
import Section from './Components/Section/Section';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Statistics from './Components/Statistics/Statistics';
import Notification from './Components/Notification/Notification';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  increment = (event) => {
    const { name } = event.currentTarget;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const percentage = good ? good / this.countTotalFeedback() : 0;
    return Math.round(percentage * 100);
  };

  render() {

    return (
      <>
        <Section title={"Please leave feedback"}>

          <FeedbackOptions options={this.state} onLeaveFeedback={this.increment} />

        </Section>


        <Section title={"Statistics"}>
          {
            (this.countTotalFeedback() === 0)
              ? (<Notification message="No feedback given" />)
              : (<Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback}
                positivePercentage={this.countPositiveFeedbackPercentage} />)
          }
        </Section>
      </>
    );
  };
};

export default App;