import React from 'react';
import {
    HorizontalGridLines,
    VerticalGridLines,
    XAxis,
    XYPlot,
    YAxis,
    MarkSeries,
    ArcSeries
} from 'react-vis'

const quarterCycleData = [
    {
        angle0: 0,
        angle: Math.PI / 2,
        radius0: 0,
        radius: 2,
        color: "green",
        opacity: 0.2,
    }
]

class Visualization extends React.Component {

    render() {
        return (
        <XYPlot width={400} height={400} xDomain={[0,1]} yDomain={[0,1]}>
            <XAxis/>
            <YAxis/>
            <HorizontalGridLines />
            <VerticalGridLines />
            <ArcSeries colorType="literal" data={quarterCycleData} radiusDomain={[0, 1]} />
            <MarkSeries colorType="literal" data={this.props.data} size="2" />
        </XYPlot>
        );
    }
}

export default Visualization;



