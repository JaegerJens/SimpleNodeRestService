const gulp = require("gulp");
const ts = require("gulp-typescript");
var exec = require("child_process").exec;

const dest = gulp.dest("bin");
const tsProject = ts.createProject("tsconfig.json");

gulp.task("compile", () => tsProject.src()
                .pipe(tsProject())
                .js.pipe(dest));

gulp.task("serve", () => exec("node bin/index.js"));

gulp.task("default", ["compile", "serve"]);