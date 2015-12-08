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
    .goto('http://www.nytimes.com')
    .screenshot(outputPath)

  yield nightmare.end();
  console.log("...Done");
}