'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var WebpackVisualStudioReporter = module.exports = function() { };

WebpackVisualStudioReporter.prototype.apply = function(compiler) {
    compiler.plugin('done', stats => {
		if (stats.compilation.errors) {
                var output = "";

                stats.compilation.errors.forEach(error => {
                    var err = error.toString();

                    if (error.name == "Error") {
                        try {
                            output += err.match(/(\/.*?\.\S*)/)[0].split(":")[0].substr(1).replace(/\//g, "\\");
                            output += ": line " + err.match(/(\/.*?\.\S*)/)[0].split(":")[1];
                            output += ", col " + err.match(/(\/.*?\.\S*)/)[0].split(":")[2];
                            output += ", " + error.message.split(/( {4}.*\d)[:]/)[2].trim().replace(/(\r\n|\r|\n)/g, "");
                            output += " (" + error.message.match(/( {4}.*\d)[:]/)[1].trim() + ")\n";
                        } catch (ex) {
                            output += ".\\webpack.config.js: line 0, col 0, " + error.message + "\n";
                        }
                    } else {
                        output += ".\\webpack.config.js: line 0, col 0, " + error.message + "\n";
                    }
                });

                console.log(output);
            }
	});
};
