var page = require('webpage').create();
var system = require('system');
page.viewportSize = {
    width: 1024,
    height: 768
};

page.open(system.args[1], function(status) {
    console.log(page.content);
    phantom.exit();
});


setTimeout(timeEnds, 5000);

function timeEnds() {
    console.log('END');
    phantom.exit(1);
}
