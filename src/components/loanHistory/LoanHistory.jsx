import * as React from "react";
import Paper from "@mui/material/Paper";
import { Chart, BarSeries } from "@devexpress/dx-react-chart-material-ui";
import "./loanhistory.css";

const data = [
  
  { month: "May", population: 6.93 },
  { month: "June", population: 6.93 },
  { month: "July", population: 6.93 },
  { month: "August", population: 6.93 },
  { month: "Jan", population: 2.525 },
  { month: "Feb", population: 3.018 },
  { month: "March", population: 3.682 },
  { month: "April", population: 4.44 },
  { month: "September", population: 6.93 },
  { month: "October", population: 6.93 },
  { month: "November", population: 6.93 },
  { month: "December", population: 6.93 },
  
];

export default class LoanHistory extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    return (
      <div className="loanHistoryWrapper">
        LoanHistory
        <Paper>
          <Chart data={chartData}>
            <BarSeries valueField="population" argumentField="month" />
          </Chart>
        </Paper>
      </div>
    );
  }
}
