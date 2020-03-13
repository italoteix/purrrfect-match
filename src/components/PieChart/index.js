import React from 'react';
import { Pie } from 'react-chartjs-2';

import { Container, Label } from './styles';

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      values: []
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.activities !== prevProps.activities) {
      this._updateData();
    }
  }

  _updateData = () => {
    const { activities } = this.props;

    this.setState({
      labels: activities.map(activity => activity.type),
      values: activities.map(activity => activity.value)
    });
  };

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
        <div className="pie-container">
          <Pie
            data={{
              labels,
              datasets: [
                { data: values, backgroundColor: colors, borderWidth: 0 }
              ]
            }}
            options={{
              legend: { display: false },
              responsive: false,
              aspectRatio: 1
            }}
          />
        </div>
      </Container>
    );
  }
}

export default PieChart;
