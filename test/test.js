
var expect = require('expect.js');
var slocCounter = require('../sloc-count');

var testfile = require('fs').readFileSync('test/testfile.js', 'utf8');

describe('sloc-count', function() {

	describe('file stats', function() {
		var slocStats = slocCounter(testfile);
		it('should return an array with the correct values', function() {
			expect(slocStats.total).to.be(11);
			expect(slocStats.empty).to.be(5);
			expect(slocStats.source).to.be(2);
			expect(slocStats.singleLineComments).to.be(1);
			expect(slocStats.blockComments).to.be(1);
		});
	});
});
