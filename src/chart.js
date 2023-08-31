import React, { Component } from "react";

import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";

class Chart extends Component {
  state = {
    data: [
      {
        date: "2121-06-12",
        value: 10.34023945554,
      },

      {
        date: "2121-06-15",
        value: -10.3545554,
      },
      {
        date: "2121-06-15",
        value: -40.352764023945554,
      },
      {
        date: "2121-06-15",
        value: 1.3554222,
      },
      {
        date: "2121-06-15",
        value: -10.3527645525554,
      },
      {
        date: "2121-06-15",
        value: -10.35276225554,
      },
      {
        date: "2121-06-15",
        value: 0.352764023945554,
      },
    ],
  };
  render() {
    return (
      <ResponsiveContainer width="100%" height={80}>
        <AreaChart data={this.state.data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2451b7" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#2451b7" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />

          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default Chart;
