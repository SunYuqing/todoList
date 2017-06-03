/**
 * Created by Administrator on 2017/6/1 0001.
 */

//引入gulp 和 stylus依赖包
var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('compile', function() {
    return gulp.src('style/*.styl') //需要编译stylus的路径
        .pipe(stylus()) //编译stylus
        .pipe(gulp.dest('style')) //编译结束后css输出路径
})

//自动执行编译任务
gulp.task('auto', function() {
    gulp.watch('style/*.styl',['compile'])
})

gulp.task('default', ['compile','auto'])