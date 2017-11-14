
function GetRandomNInRange(a, b) {
	return Math.floor(Math.random() * (b + 1 - a) + a);
}

module.exports.GetRandomNInRange = GetRandomNInRange;