var _event = require("../../lib/event");

module.exports = {
    doSimple: function (success, fail, args, env) {
        try {
            success(_event.trigger("simpleCallback", 'GREAT SUCCESS'));
        } catch (e) {
            fail(-1, e);
        }
    }
};