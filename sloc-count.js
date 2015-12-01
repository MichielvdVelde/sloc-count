
/**
 * Takes the contents of a file and generates a statistics object with
 * information about the lines.
 *
 * The 'options' argument is reserved for future use
*/
exports = module.exports = function(contents, options, callback) {
	if(!callback && typeof options === 'function') {
		callback = options;
		options = {};
	}

	var statistics = {
		'total': 0,
		'source': 0,
		'singleLineComments': 0,
		'blockComments': 0,
		'empty': 0
	};

	var lines = contents.split('\r\n');
	var line, blockCommentOpen;
	for(var i = 0; i < lines.length; i++) {
		statistics.total++;

		line = lines[i].trim();
		switch(lineType(line)) {
			case 'empty':
				statistics.empty++;
			break;
			case 'singleLineComment':
				statistics.singleLineComments++;
			break;
			case 'blockCommentOpen':
				blockCommentOpen = true;
			break;
			case 'blockCommentClose':
				if(blockCommentOpen) {
					statistics.blockComments++;
					blockCommentOpen = false;
				}
			break;
			case 'source':
				if(!blockCommentOpen) {
					statistics.source++;
				}
			break;
		}
	}
	if(typeof callback == 'function')
		return callback(null, statistics);
	return statistics;

};

/**
 * Method that determines when kind of line we have
*/
var lineType = function(line) {
	if(line.length === 0) return 'empty';
	if(line.substr(0, 2) == '//') return 'singleLineComment';
	if(line.substr(0, 2) == '/*') return 'blockCommentOpen';
	if(line.substr(line.length - 2) == '*/') return 'blockCommentClose';
	return 'source';
};
