var page = require('webpage').create();
var system = require('system');
page.viewportSize = {
    width: 1024,
    height: 768
};
page.open(system.args[1], function() {
    console.log(page.content);
    phantom.exit();
});