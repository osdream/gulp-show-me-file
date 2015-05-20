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
        .pipe(showFile('before-concat')) // show all js files in console
        .pipe(concat('all.js'))
        .pipe(showFile('after-concat')) // show file after concating, it will log `[after-concat] /abs/path/to/all.js" in current situation.
        .pipe(gulp.dest('./dist/'));
});
```

