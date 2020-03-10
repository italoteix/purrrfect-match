import React from 'react';
import { Pie } from 'react-chartjs-2';

import { Container, Label } from './styles';

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: props.activities.map(activity => activity.type),
      values: props.activities.map(activity => activity.value),
      datasets: [
        {
          data: props.activities.map(activity => activity.value),
          backgroundColor: ['red', 'blue', 'green'],
          borderWidth: 0
        }
      ]
    };
  }

  render() {
    const { labels, values } = this.state;
    const colors = ['#5452F6', '#00A3FF', '#B4D9FF', '#3876F3'];

    return (
      <Container>
        <div>
          {labels.map((label, idx) => (
            <Label key={label} labelColor={colors[idx]}>
              <div />
              <p>
                <strong>{`${label}: `}</strong>
                {`${values[idx]}%`}
              </p>
            </Label>
          ))}
        </div>
        <div>
          <Pie
            data={{
              labels,
              datasets: [
                { data: values, backgroundColor: colors, borderWidth: 0 }
              ]
            }}
            options={{ legend: { display: false } }}
            height={114}
          />
        </div>
      </Container>
    );
  }
}

export default PieChart;
