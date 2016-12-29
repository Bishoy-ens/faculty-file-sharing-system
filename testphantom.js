// var gulp = require('gulp');
// var mochaPhantomJS = require('gulp-mocha-phantomjs');
 
gulp.task('test', function () {
    return gulp
    .src('test/runner.html')
    .pipe(mochaPhantomJS());
});

// it('world', function (done) {
//     create(function (ph) {
//         ph.createPage(function (page) {
//             page.open("http://www.google.com", function (status) {
//                 console.log("opened google? ", status);
//                 page.evaluate(function () { return document.title; }, function (result) {
//                     console.log('Page title is ' + result);
//                     ph.exit();
//                     expect(result).to.equal("Google");
//                     done();
//                 });
//             });
//         });
//     });

// });