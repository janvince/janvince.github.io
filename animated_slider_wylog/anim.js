$(document).ready(function() {
  var timeleft = 6;

  var downloadTimer = setInterval(function(){
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    timeleft -= 1;
      if(timeleft === 6){
        $(".bc").toggleClass("visible");
        $(".vr").toggleClass("visible"); 
      }
      else if (timeleft === 0){ 
        $(".vr").toggleClass("visible");
        $(".bc").toggleClass("visible")
        timeleft = 6;
      }      
  }, 1000);  
})