KeepAlive = {};

KeepAlive.init = function(opt){
  if(!opt)
    opt = {};
  KeepAlive.interval = opt.interval || (1000 * 60 * 5);
  KeepAlive.website = opt.website || Meteor.absoluteUrl();

  KeepAlive.clear();
  KeepAlive.intervalId = Meteor.setInterval(function(){
    try{
      Meteor.http.get(KeepAlive.website);
    }catch(err){}
  }, KeepAlive.interval);
}

KeepAlive.clear = function(){
  Meteor.clearInterval(KeepAlive.intervalId);
}