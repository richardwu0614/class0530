//function showMsg(msg1,msg2){
//    alert(msg1+" HELLO 好好玩"+msg2);
//}
var showMsg=function(msg1,msg2){
    var msgAll=msg1+" HELLO 好好玩"+msg2;
    return msgAll;
}

var random=function(N,M){
    console.log(N,M);
    var result=Math.floor(Math.random()*(M-N+1)+N);
    return result;
}
var launch=function(N,M){
    var result=Math.floor(Math.random()*(M-N+1)+N);
    d3.select("body p").text(result);
}