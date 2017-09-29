# webpack-visual-studio-reporter
Errors reporter for web pack. Reports errors to Visual Studio "Error List" view. Strictly relies on "Task Runner Explorer" error reporting structure.

Usage:

var WebpackVisualStudioReporter = require('webpack-visual-studio-reporter');

...

plugins: [
	new WebpackVisualStudioReporter(),
]
