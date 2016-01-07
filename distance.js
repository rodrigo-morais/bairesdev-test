function distance(point1, point2) {
	var x = point2.x - point1.x,
		y = point2.y - point1.y,
		x2 = x * x,
		y2 = y * y;

	return Math.sqrt(x2 + y2);
}

function distanceThreePoints(point1, point2, point3) {
	return distance(point1, point2) + distance(point2, point3);
}