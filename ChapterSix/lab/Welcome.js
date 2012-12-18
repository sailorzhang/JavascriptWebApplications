/**
 * Created with JetBrains WebStorm.
 * User: Sailor
 * Date: 12-12-18
 * Time: 下午9:33
 * To change this template use File | Settings | File Templates.
 */
define(["Hello","jquery"], function (hello,$) {
    return{
        Welcome:function (name) {
            return $("body").html()+ hello.SayHello(name) + " Welcome " + name;
        }
    };
});