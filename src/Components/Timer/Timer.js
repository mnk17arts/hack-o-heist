import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }
  componentDidMount() {
    var currDate = new Date();
    var finalDate = new Date(
      "Sat Oct 16 2021 12:00:00 GMT+0530 (India Standard Time)"
    );
    if (+finalDate - +currDate > 0) {
      setInterval(() => {
        var t = new Date();
        var diff = +finalDate - +t;
        var daydiff = parseInt(diff / (24 * 60 * 60 * 1000));
        var hourDiff = parseInt((diff / (24 * 60 * 60 * 1000) - daydiff) * 24);
        var minDiff = parseInt(
          ((diff / (24 * 60 * 60 * 1000) - daydiff) * 24 - hourDiff) * 60
        );
        var secDiff = parseInt(
          (((diff / (24 * 60 * 60 * 1000) - daydiff) * 24 - hourDiff) * 60 -
            minDiff) *
            60
        );
        this.setState({
          days: daydiff,
          hours: hourDiff,
          min: minDiff,
          sec: secDiff,
        });
      }, 1000);
    }
  }
  render() {
    return (
      <div className="timer_cont">
        <div className="timer_inner_cont block1">
          <span>Days</span>
          <span>{this.state.days}</span>
        </div>
        <div className="timer_inner_cont block2">
          <span>Hours</span>
          <span>{this.state.hours}</span>
        </div>
        <div className="timer_inner_cont block3">
          <span>Mins</span>
          <span>{this.state.min}</span>
        </div>
        <div className="timer_inner_cont block4">
          <span>Sec</span>
          <span>{this.state.sec}</span>
        </div>
      </div>
    );
  }
}

export default Timer;
