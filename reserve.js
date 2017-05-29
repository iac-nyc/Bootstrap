'use strict';
  // the Reserve Table form modal 

    var resBtn = document.getElementById("reserveButton");
        resBtn.onclick = function() {
        $('#reserve').modal('show')
         }
    var resCancel = document.getElementById("btnCancel");
        btnCancel.onclick =function(){
        $('#reserve').modal('hide')
        }          
  