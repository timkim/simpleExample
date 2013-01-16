var _self = {},
    _ID = require("./manifest.json").namespace,
    win = null,
    fail = null;


function handleCallback(result) {
    if (result) {
        if(win){
           win(result);
        }
    } else {
        if(fail){
           fail(result);
        }
    }
    win = null;
    fail = null;
}
  
_self.getMemory = function (theWin, theFail) {
    win = theWin;
    fail = theFail;
    
    window.webworks.event.add(_ID, "simpleCallback", handleCallback);
    return window.webworks.execSync(_ID, "doSimple", null);
};

module.exports = _self;