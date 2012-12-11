/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 12/11/12
 * Time: 5:52 PM
 * To change this template use File | Settings | File Templates.
 */

(function ($) {
    var o = $({});
    $.subscribe = function () {
        o.bind.apply(o, arguments);
    };

    $.unsubscribe=function(){
        o.unbind.apply(o,arguments);
    };

    $.publish=function(){
        o.trigger.apply(o, arguments);
    };
})(jQuery);
