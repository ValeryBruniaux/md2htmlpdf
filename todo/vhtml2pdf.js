var page = require('webpage').create();
var args = require('system').args;
var fs = require('fs');

function getFileUrl(str) {
  var pathName = fs.absolute(str).replace(/\\/g, '/');
  // Windows drive letter must be prefixed with a slash
  if (pathName[0] !== "/") {
    pathName = "/" + pathName;
  }
  return encodeURI("file://" + pathName);
};

page.paperSize = {
    format : 'A4',
    orientation : 'portrait',
    margin : {
        top : '1cm',
        left : '1cm',
        bottom : '1cm',
        right : '1cm'
    }
};

page.open(getFileUrl(args[1]), function(){
    page.render(args[2]);
    phantom.exit();
});

