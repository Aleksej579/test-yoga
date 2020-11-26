var gulp = require("gulp");
var sass = require("gulp-sass");

// Define tasks after requiring dependencies

function style() {
    // Where should gulp look for the sass files?
    // My .sass files are stored in the styles folder
    // (If you want to use scss files, simply look for *.scss files instead)
    return (
        gulp
            .src("sass/*.sass")
            // Use sass with the files found, and log any errors
            .pipe(sass())
            .on("error", sass.logError)
            // What is the destination for the compiled file?
            .pipe(gulp.dest("./dest"))
    );
}
function watch() {
    // gulp.watch takes in the location of the files to watch for changes
    // and the name of the function we want to run on change
    gulp.watch('sass/*.sass', style)
}

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.style = style;
exports.watch = watch
