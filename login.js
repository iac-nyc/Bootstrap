'use strict';
 // LoginModal 

    var login = document.getElementById("modalLogin");
        login.onclick = function() {
        $('#loginModal').modal('show')
       }
    var cancel = document.getElementById("cancel");
        cancel.onclick =function(){
        $('#loginModal').modal('hide')
    }
       
  



