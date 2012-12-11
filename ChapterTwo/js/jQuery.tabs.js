/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 12/11/12
 * Time: 10:18 AM
 * To change this template use File | Settings | File Templates.
 */
(function ($) {
    $.fn.tabs = function (control) {
        var element = $(this);
        control = $(control);

        element.delegate("li", "click", function () {
            var tabName = $(this).attr("data-table");
            element.trigger("change.tabs", tabName);
        });

        element.bind("change.tabs", function (e, tabName) {
            control.find(">[data-table]").hide()
                .end().find(">[data-table='" + tabName + "']").show();
            window.location.hash = tabName;
        });

        element.trigger("change.tabs", element.find(">[data-table]:first").attr("data-table"));

        return this;
    };
})(jQuery);