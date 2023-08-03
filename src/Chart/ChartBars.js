import React from "react";
import "./ChartBars.css";

const ChartBar = (props) => {
  let barFill ;
  if (props.maxValue > 0) {
    barFill = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  console.log(barFill);
  return (
    <div className="chart-bar">
      <div className="chart-bar_inner">
        <div className="chart-bar_fill" style={{ height: barFill }}></div>
      </div>
      <div className="chart-bar_label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
