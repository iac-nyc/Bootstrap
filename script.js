
    <!--Carousel Play and Stop Button's JS-->
     <script>
        $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
                          $("#carousel-pause").click(function(){
                $("#mycarousel").carousel('pause');
            });
                        $("#carousel-play").click(function(){
                $("#mycarousel").carousel('cycle');
            });
        });
    </script>
    <!--  the Reserve Table form modal -->
<script>
    var resBtn = document.getElementById("reserveButton");
        resBtn.onclick = function() {
        $('#reserve').modal('show')
         }
    var resCancel = document.getElementById("btnCancel");
        btnCancel.onclick =function(){
        $('#reserve').modal('hide')
        }          
  
</script>
 <!--Script for LoginModal-->   
<script>
    var login = document.getElementById("modalLogin");
        login.onclick = function() {
        $('#loginModal').modal('show')
       }
    var cancel = document.getElementById("cancel");
        cancel.onclick =function(){
        $('#loginModal').modal('hide')
    }
</script>