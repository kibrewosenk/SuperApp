define({ 

 //Type your controller code here 
 autoNav: function(){
     var self = this;
   	if(kony.store.getItem("preuser")){ 
    var ntf = new kony.mvc.Navigation("frmLoginSignup");
    ntf.navigate();
    }
 },
setpreuser: function(){
  kony.store.setItem("preuser", 0);
},
  changeLanguage: function(){
    if (this.view.lsboxLanguage.selectedKey == "lb1") {
        kony.i18n.setCurrentLocaleAsync("en_US", onsuccesscallback(),onfailurecallback());
    } else if (this.view.lsboxLanguage.selectedKey == "lb2") {
        kony.i18n.setCurrentLocaleAsync("oro_ET", onsuccesscallback(), onfailurecallback());
    } else if (this.view.lsboxLanguage.selectedKey == "lb3") {
        kony.i18n.setCurrentLocaleAsync("amh_ET", onsuccesscallback(), onfailurecallback());
    }
    function onsuccesscallback(){
      kony.print("sucessfully Changed");
      var ntf = new kony.mvc.Navigation("frmLanguageTransation");
   	 ntf.navigate();
    }
      function onfailurecallback(){
      kony.print("Failed to Changed");
		
    }
    
    
  }

  

  
 });