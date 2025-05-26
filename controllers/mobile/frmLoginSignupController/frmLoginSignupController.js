define({ 

 //Type your controller code here
validateFormFill: function(){
  var self = this;
  var flag = 1;
  alert("clicked1");
  if(this.view.txtFullName.text != null){ flag = 1;
    if(self.view.txtEmailAdress.text != null){ flag = 1;
      if(self.view.txtPhoneNumber.text != null){ flag = 1;
        if(self.view.txtPassword.text != null){ flag = 1;
          if(self.view.txtConfirmPassword.text == self.view.txtPassword.text){ flag = 1;
            if(self.view.imgCheckBox.src == "customcheckboxon.png" ){ flag = 1;
              if(self.view.calDateOfBirth.month!= null){ 
                  for(i=0; i<userdetail.length;i++){
       if(userdetail[i][0].Email == self.view.txtEmailAdress.text || userdetail[i][0].PhoneNo ==self.view.txtPhoneNumber.text)
         {
           self.view.lblSignupErr.text="User Already exist!";
           flag = 0;
         }}
                if(flag ==1){
                flag = 0;
//                	self.view.btnCreateAccount.enable=true;
              	self.view.btnCreateAccount.skin = sknCyan; 
                self.view.lblSignupErr.text="";
                self.signup();}
                //alert(self.view.imgCheckBox.src);
              }}}}}}}
  if(flag){
    alert("clicked3");
       	self.view.btnCreateAccount.skin = sknTransaparent;
    	self.view.lblSignupErr.text="Please make sure you fill all the filds";
//     	self.view.btnCreateAccount.enable=false; 
  }
 },
  //sample user detail
 userRepo: function(){
   var Value = JSON.stringify([
				[{	"FullName": "kibre",
                    "Email": "k@k.k",
                    "PhoneNo": "123" ,
                    "Gender": "m",
                    "Dob": "99",
                    "Password": "123"}
                    ]
   ]);
  
 kony.store.setItem("userdetail", Value);
 userdetailstr = JSON.parse(kony.store.getItem("userdetail"));
 userdetail = userdetailstr;
 session= kony.store.getItem("session");
   //console.log(userdetail[1]);
 },
  login: function() {
    var self = this;
    var flag = false;
    //self.userRepo();
    console.log(userdetail);
    if(self.view.flxEmailPhone.isVisible == false){
	if(session.Password == self.view.txtLoginPassword.text){
        flag = true;
      }}
    else
    for(i=0; i<userdetail.length;i++){
       if((userdetail[i][0].Email == self.view.txtEmailPhone.text || userdetail[i][0].PhoneNo ==self.view.txtEmailPhone.text) && userdetail[i][0].Password == self.view.txtLoginPassword.text)
         {
           flag = true;
           kony.store.setItem("session", userdetail[i][0]);
           session= kony.store.getItem("session");
           break;
         }
    }
   if(flag)
    {
    var ntf = new kony.mvc.Navigation("frmDashbord");
     self.view.lblErroerMessage.text = "";
      if(remberme){
     self.view.sflxSignup.isVisible = false;
     self.view.flxBioOption.isVisible = true;
     self.view.flxLoginPassword.height="90%";
     self.view.flxEmailPhone.isVisible = false;
     self.view.flxLoginForm.height = "10%";
     kony.store.setItem("preuser", 1);
     self.view.flxCreateAccount.isVisible = false;
     self.view.flxFooterItems.top="30%";
     self.view.customswitch.isVisible = false;
     
    
      }
    ntf.navigate();}
    else{
      self.view.lblErroerMessage.text = "invalid user or password!";
    }
},
  signup: function(){
  var self = this;
   userdetail.push([{"FullName": self.view.txtFullName.text,
                    "Email": self.view.txtEmailAdress.text,
                    "PhoneNo": self.view.txtPhoneNumber.text,
                    "Gender": self.view.radbtnGender.selectedKeyValue[0],
                    "Dob": self.view.calDateOfBirth.day+"/"+self.view.calDateOfBirth.month+"/"+self.view.calDateOfBirth.year,
                    "Password": self.view.txtPassword.text},
                    ]);
   kony.store.setItem(userdetail, userdetail);
    self.view.SucessRegistration.isVisible = true;
     self.view.SucessRegistration.animate(
    kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "width": "100%",
            "height": "100%"
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.2
    }, {
        "animationEnd": kony.print("Registraion Sucess!")
    });
  
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