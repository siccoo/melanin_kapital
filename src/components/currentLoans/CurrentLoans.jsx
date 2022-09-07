import Paper from "@mui/material/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui";

import "./currentloans.css";

const data = [
  { argument: 1, value: 10 },
  { argument: 2, value: 20 },
  { argument: 3, value: 30 },
];

export default function CurrentLoans() {
  return (
    <div className="currentLoansWrapper">
      <p>Current Loans</p>
      <span>Current Private equity</span>
      <div >
        <Paper>
          <Chart data={data}>
            <ArgumentAxis />
            <ValueAxis />

            <LineSeries valueField="value" argumentField="argument" />
          </Chart>
        </Paper>
      </div>
    </div>
  );
}
