var Nightmare = require('nightmare');
var vo = require('vo');


var outputPath = "./screenshot.png";
if (process.env.CIRCLE_ARTIFACTS !== undefined) {
	outputPath = process.env.CIRCLE_ARTIFACTS + "/screenshot.png"
}
console.log('Saving to', outputPath, "...");

vo(run)(function(err, result) {
  if (err) throw err;
});

function *run() {
  var nightmare = Nightmare();

  var title = yield nightmare
    .useragent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36")
    .viewport(7680, 4320)
    .goto('https://www.google.com/maps/@40.7508803,-74.0122352,216a,20y,56h,74.07t/data=!3m1!1e3')
    .wait(20000)
    .screenshot(outputPath)

  yield nightmare.end();
  console.log("...Done");
}
