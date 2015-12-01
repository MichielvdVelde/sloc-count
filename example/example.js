
var slocCounter = require('../sloc-count');
var contents = require('fs').readFileSync('../sloc-count.js', 'utf8');

slocCounter(contents, function(error, stat) {
	if(error) return console.error(error);
	console.log(stat);
});
