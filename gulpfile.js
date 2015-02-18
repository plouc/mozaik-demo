var gulp = require('gulp');
var _    = require('lodash');

// load mozaïk module tasks
_.forOwn(require('mozaik/gulpfile').tasks, function (task) {
    gulp.task(task.name, task.dep, task.fn);
});