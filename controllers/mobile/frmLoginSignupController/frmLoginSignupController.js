define({ 

 //Type your controller code here
validateFormFill: function(){
  var self = this;
  
    self.view.btnCreateAccount.skin = sknTransaparent;
    self.view.btnCreateAccount.setEnabled=false;
  if(this.view.txtFullName.text != null){
    if(self.view.txtEmailAdress.text != null){
      if(self.view.txtPhoneNumber.text != null){
        if(self.view.txtPassword.text != null){
          if(self.view.txtConfirmPassword.text != null){
            if(self.view.imgCheckBox.src == "customcheckboxon.png" ){
              if(self.view.calDateOfBirth.month!= null){
               	self.view.btnCreateAccount.setEnabled=true;
              	self.view.btnCreateAccount.skin = sknCyan; 
                //alert(self.view.imgCheckBox.src);
              }
            }
        }
      }
    }
  }}
  
	
  
}

 });