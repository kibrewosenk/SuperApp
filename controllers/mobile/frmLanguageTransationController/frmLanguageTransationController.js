define({ 

 //Type your controller code here 
navigateBack: function(){
  if(kony.store.getItem("preuser") || isLogin == 1){ 
  var ntf = new kony.mvc.Navigation("frmLoginSignup");
    ntf.navigate();
    
  }
  else{
    var ntf = new kony.mvc.Navigation("frmStartPage");
    ntf.navigate();
  }
}

 });