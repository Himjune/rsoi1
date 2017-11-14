// division-by-zero-test.js

var vows = require('vows'),
    assert = require('assert');
	
var my_math = require('../lib/my_math');

// Create a Test Suite
vows.describe('Get Random in Interval tests').addBatch({
    'When we ask for num in some interval (ex.: -15..15)': {
        topic: my_math.GetRandomNInRange(-15,15),

        'we get get num in that interval': function (topic) {
            assert.isTrue (-15<=topic && topic <= 15);
        }
    },
    'When interval includes only 1 num (ex.: 5..5)': {
        topic: my_math.GetRandomNInRange(5,5),

        'We always get this num': function (topic) {
            assert.equal (topic, 5);
        }
    }
}).exportTo(module);