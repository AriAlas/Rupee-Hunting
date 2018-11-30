$(document).ready(function() {


/*Generate random target number*/

    var randomNumber = Math.floor(Math.random() * 120) + 18;

$("#random-number").text(randomNumber);

/*Generate random values for rupees*/

    var rRandom = Math.floor(Math.random() * 12) + 1;
    var oRandom = Math.floor(Math.random() * 12) + 1;
    var pRandom = Math.floor(Math.random() * 12) + 1;
    var gRandom = Math.floor(Math.random() * 12) + 1;
    var yourScore = 0;
    var wins = 0;
    var losses = 0;
    var something = "blah";

    



    function reset(){
        randomNumber = Math.floor(Math.random() * 120) + 18;
        $("#random-number").text(randomNumber);

        rRandom = Math.floor(Math.random() * 12) + 1;
        oRandom = Math.floor(Math.random() * 12) + 1;
        pRandom = Math.floor(Math.random() * 12) + 1;
        gRandom = Math.floor(Math.random() * 12) + 1;
        yourScore = 0;
        $("#your-score").text(yourScore);
    }

    function loser (){
        losses++
        $(".losses").text(losses);
        $("#winlose").attr("src","assets/images/link-lose.gif")
        reset();
    }

    function winner (){
        wins++
        $(".wins").text(wins);
        $("#winlose").attr("src","assets/images/link-win.jpg")
        reset();
      
    }
    
   
    

    $("#r-rupee").on("click", function() {
       
       yourScore += rRandom;
       $("#your-score").text(yourScore);

       if (yourScore === randomNumber) {
           winner();

       }
       else if (yourScore > randomNumber) {
            loser();
       }
       
       

    });

    $("#o-rupee").on("click", function() {
       
        yourScore += oRandom;
        $("#your-score").text(yourScore);

        if (yourScore === randomNumber) {
            winner();
 
        }
        else if (yourScore > randomNumber) {
             loser();
        }
        

       
 
     });

     $("#p-rupee").on("click", function() {
       
        yourScore += pRandom;
        $("#your-score").text(yourScore);
       
        if (yourScore === randomNumber) {
            winner();
 
        }
        else if (yourScore > randomNumber) {
             loser();
        }
 
     });
    
 
     $("#g-rupee").on("click", function() {
       
        yourScore += gRandom;
        $("#your-score").text(yourScore);

        if (yourScore === randomNumber) {
            winner();
 
        }
        else if (yourScore > randomNumber) {
             loser();
        }
 
 
     });
     




});






/*Generate reset*/
var yourScore = 0;

