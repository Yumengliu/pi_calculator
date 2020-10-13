function calculatePi(data, totalNumPoints) {
    var numPointsInCircle = 0;
    var dataPoints = []
    for (var i = 0; i < totalNumPoints; i ++) {
        const x = data[i][0];
        const y = data[i][1];
        const distance = Math.sqrt(x * x + y * y);
        var color = "red";
        if (distance <= 1.0) {
            numPointsInCircle ++;
            color = "green";
        }
        if (i >= 5000) {
            continue;
        }
        dataPoints.push({
            x: x,
            y: y,
            color: color,
        })
    }
    return [(numPointsInCircle / totalNumPoints) * 4.0, dataPoints];
};

export default calculatePi;