
function GetRandomNInRange(a, b) {
	return Math.floor(Math.random() * (b + 1 - a) + a)+20;
}

module.exports.GetRandomNInRange = GetRandomNInRange;