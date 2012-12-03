/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 12/3/12
 * Time: 9:48 AM
 * To change this template use File | Settings | File Templates.
 */
function assert(value,msg){
    if(!value){
        throw(msg||value+" does not equal true");
    }else{
        console.log("It is true.");
    }
}

function assertEqual(value1,value2,msg)
{
    if(value1!=value2){
        throw(msg||value+" does not equal true");
    }else{
        console.log("value1 and value2 are equal.");
    }
}