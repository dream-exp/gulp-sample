var gulp = require("gulp");
var browser = require("browser-sync");
var ejs = require('gulp-ejs'); 
var fs = require('fs');

gulp.task('server', function () {
  browser({
    notify: false,
    server: {
      baseDir: "./"
    }
  })

  gulp.watch('./ejs/**/*.ejs', ["ejs"]);
  gulp.watch('./ejs/**/*.ejs', browser.reload);
});

gulp.task("ejs", function() {
    var json = JSON.parse(fs.readFileSync("./package.json"));

    gulp.src(
        ["./ejs/**/*.ejs",'!' + "./ejs/**/_*.ejs"]
    )
        .pipe(ejs())
        .pipe(ejs(json, {"ext": ".html"}))
        .pipe(gulp.dest("./"))
});
