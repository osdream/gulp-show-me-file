gulp-show-me-file
=================

Show all files in current stream flow, it's very useful when you debug gulpfile.js

## Information

<table>
<tr>
<td>Package</td><td>gulp-show-me-file</td>
</tr>
<tr>
<td>Description</td>
<td>Show all the files in current gulp stream flow.</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>

## Usage

```js
var showFile = require('gulp-show-me-file');

gulp.task('scripts', function() {
    return gulp.src('./lib/*.js')
        // the following line will show all js files was in ./lib directory in console
        .pipe(showFile('before-concat'))
        .pipe(concat('all.js'))
        // the following line will show file after concating, it will log `[after-concat] /abs/path/to/all.js" in current situation.
        .pipe(showFile('after-concat'))
        .pipe(gulp.dest('./dist/'));
});
```

