module.exports = function(n) {
    var points = []
    for (var i = 0; i < n; i ++) {
        var x = Math.random();
        var y = Math.random();
        points.push([x, y]);
    }
    return points;
}