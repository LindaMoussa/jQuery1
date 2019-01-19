//$.(".btn").slideUp(2000);
//$.(".btn").slideDown(2000);
//$.(".btn").slideToggle(2000);
//
//$.(".btn").fadeIn(2000);
//$.(".btn").fadeOut(2000);
//$.(".btn").fadeToggle(2000);
//$.(".btn").fadeTo(2000 , .5);
//
//$.(".btn").hide(2000);
//$.(".btn").show(2000);
//$.(".btn").toggle(2000);

//$(".web-container").animate({width:'100%'},2000)
//$(".web-container").animate({height:window.innerHeight},2000 ,function(){
//    $(".web-container h1").fadeIn(2000 , function(){
//        
//        $(".web-container div").fadeIn(2000);
//    })
//})

$("#menuIcon").click(function(){
    
    $("#sideMenu").show("fast",function(){
       $("#menuIcon").css("display","none");     
    }); 
})

$("#menuClose").click(function(){
 
    $("#sideMenu").hide("fast",function(){
       $("#menuIcon").css("display","block");     
    });  
})

$("#singer1").click(function(){
    $("#s1").toggle();
    $("#s1").siblings("p").hide();
})
$("#singer2").click(function(){
    $("#s2").toggle();
    $("#s2").siblings("p").hide();
})
$("#singer3").click(function(){
    $("#s3").toggle();
    $("#s3").siblings("p").hide();
})
$("#singer4").click(function(){
    $("#s4").toggle();
    $("#s4").siblings("p").hide();
})

setInterval( function x(){ 
    // Do something after 1 second 
    var now=new Date($.now());
    var d = now.getDate();
    console.log(d)
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    $("#days").text(30-d+" Days");
    $("#hours").text(23-h+" Hours");
    $("#minutes").text(59-m+" Minutes");
    $("#seconds").text(59-s+" Seconds");
    $("#seconds").text(59-s+" Seconds");
//    console.log(59-s)
//    console.log(s)
  }, 1000 );

$(document).ready(function(){
  $("textarea").keypress(function(){
      var len=document.getElementById("exampleFormControlTextarea1").value;
      console.log(len.length);
       if(len.length >=100)
         { 
           $("#charRemaining").text(" You Exceeded Text Limit !");
         }
      else{
            $("#charRemaining").text(100-(len.length += 1)+" Letters Remaining");}
  });
});
$(document).ready(function () {
  $("#home").click(function() {
  $('html, body').animate({
    scrollTop: $(".web-container").offset().top
  }, 1000)
}), 
  $("#duration").click(function (){
    $('html, body').animate({
      scrollTop: $(".counter").offset().top
    }, 1000)
  }),
  $("#details").click(function (){
    $('html, body').animate({
      scrollTop: $(".singers").offset().top
    }, 1000)
  }), 
  $("#contacts").click(function (){
    $('html, body').animate({
      scrollTop: $(".contactus").offset().top
    }, 1000)
  })
});