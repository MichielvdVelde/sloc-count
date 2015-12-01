# sloc-count

This module is a very, **very** simple way to count the number of source lines as well as single line and block comments.

This module could probably use some sophistication.

# Install

```
npm install sloc-count
```

# Usage

```js
var slocCounter = require('sloc-count');

// Read a file from disk
var contents = require('fs').readFileSync('some-file.js', 'utf8');

// Now put them through the counter
slocCounter(contents, function(err, stats) {
	/*
	Stats contains something similar to this:
	{
		total: 61,
		source: 49,
		singleLineComments: 1,
		blockComments: 1,
		empty: 8
	}
	*/
});
```
# Changelog

* 0.0.1 - 0.0.2 - 1 December 2015
  * (0.0.2) Omitting a callback now returns the result directly
  * (0.0.1) Initial publish

## License

Copyright 2015 Michiel van der Velde.

This software is licensed under [the MIT License](LICENSE).
