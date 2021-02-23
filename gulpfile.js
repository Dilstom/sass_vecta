const { src, dest, watch } = require('gulp') // Dependency
const sass = require('gulp-sass'); 
sass.compiler = require('node-sass');

function css() { // Gulp task
	return src('src/*.scss') // Input stream (Source)
	.pipe(sass()) // Pipe
	.pipe(dest('dist/css')) // Output stream (Destination)
}

exports.default = function() {
	watch('src/*.scss', css); // Watch for changes in the directory
	watch('src/modules/*.scss', css); // Watch for changes in the directory
};