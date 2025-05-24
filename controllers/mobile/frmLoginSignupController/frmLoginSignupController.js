define({ 

 //Type your controller code here
validateFormFill: function(){
  var self = this;
  
    self.view.btnCreateAccount.skin = sknTransaparent;
    self.view.btnCreateAccount.enable=false;
  if(this.view.txtFullName.text != null){
    if(self.view.txtEmailAdress.text != null){
      if(self.view.txtPhoneNumber.text != null){
        if(self.view.txtPassword.text != null){
          if(self.view.txtConfirmPassword.text != null){
            if(self.view.imgCheckBox.src == "customcheckboxon.png" ){
              if(self.view.calDateOfBirth.month!= null){
               	self.view.btnCreateAccount.enable=true;
              	self.view.btnCreateAccount.skin = sknCyan; 
                //alert(self.view.imgCheckBox.src);
              }}}}}}}
  else{
       	self.view.btnCreateAccount.skin = sknTransaparent;
    	self.view.btnCreateAccount.enable=false; 
  }
 },
 userRepo: function(){
   var Value = [
     ["kibre","pass"]
   ];
    
 kony.store.setItem("userdetail", Value);
 userdetail = kony.store.getItem("userdetail");
   console.log(userdetail[1]);
 },
  login: function() {
    var self = this;
    var flag = false;
    for(i=0; i<userdetail.length;i++){
       if(userdetail[i][0]== self.view.txtEmailPhone.text && userdetail[i][1]== self.view.txtLoginPassword.text)
         {
           flag = true;
           break;
         }
    }
   if(flag)
    {self.view.sflxSignup.isVisible = false;
    self.view.flxBioOption.isVisible = true;
    var ntf = new kony.mvc.Navigation("frmDashbord");
     self.view.lblErroerMessage.text = "";
     self.view.flxLoginPassword.height="90%";
     self.view.flxEmailPhone.isVisible = false;
     self.view.flxLoginForm.height = "10%";
     kony.store.setItem("preuser", 1);
     self.view.flxCreateAccount.isVisible = false;
    ntf.navigate();}
    else{
      self.view.lblErroerMessage.text = "invalid user or password!";
    }
},
  signup: function(){
  var self = this;
   userdetail.push([self.view.txtPhoneNumber.text,self.view.txtPassword.text]);
   kony.store.setItem(userdetail, userdetail);
  
},
  autoNav: function(){
    var self = this;
    	if(kony.store.getItem("preuser")){ 
   	self.view.sflxSignup.isVisible = false;
     self.view.lblErroerMessage.text = "";
     self.view.flxLoginPassword.height="90%";
     self.view.flxEmailPhone.isVisible = false;
     self.view.flxLoginForm.height = "10%";
     self.view.flxCreateAccount.isVisible = false;
        }
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
		
    }}

 });