$(document).ready(function(){

    /*variables*/
    var posi1=$("#post1").offset();
    var posi2=$("#post2").offset();
    var posi3=$("#post3").offset();
    var posi4=$("#post4").offset();
    var posi5=$("#post5").offset();
    var posi6=$("#post6").offset();
    var posi7=$("#post7").offset();
    var posi8=$("#post8").offset();
    var posi9=$("#post9").offset();
    /*Fin variables*/

    $(".caja1").click(function() {
        alert("click sobre un elemento");
    });
    $(".caja2").dblclick(function(){
       $(".caja2").hide();
    });
    $(".caja3").mouseenter(function() {
       $(".caja3").fadeOut(500);
  });
    $(".caja4").mouseleave(function() {
       $(".caja4").css("background-color","brown");
  });
    $(".caja5").hover(function() {
      $(".caja5").css("color","yellow");
  },
  function() {
      $(this).css("color","orange");
  });
    $(".caja6").mousedown(function() {
       $(this).html("<b>pulsado</b>")
  });
    $(".caja7").mouseup(function() {
       $(this).html("<b>soltado</b>")
  });
    $("#b1").click(function(){
        $(".caja-animated").slideUp(300);
    });
    $("#b2").click(function(){
        $(".caja-animated").slideDown(300);
    });
    $("#b3").click(function(){
        $(".caja-animated").slideToggle(300);
    });
    $("#b4").click(function(){
        $(".caja-animated").fadeOut(300);
    });
    $("#b5").click(function(){
        $(".caja-animated").css("background-color","green");
    });
    $("#b5").mouseenter(function(){
        $(".caja-animated").css("background-color","green");
    });
    $("#b6").click(function() {
        $(".caja-animated").fadeIn(100);
        $(".caja-animated").delay(800);
        $(".caja-animated").fadeOut(800); 
    });
    $("#b7").click(function(){
        $(".caja-animated").toggleClass("animacion");
    });
    $("#b8").click(function() {
        $(".caja-animated-1").animate({left:"100px"}, 1000)
        $(".caja-animated-1").animate({left:"0px"}, 1000)
    });
    $("#b9").click(function() {
        $(".caja-animated-1").animate({top:"100px"},1000);
        $(".caja-animated-1").animate({top:"0px"},1000);
    });
    $("#b10").click(function() {
        $(".caja-animated-1").animate({width:"200px", height:"200px"}, 1000)
        $(".caja-animated-1").animate({width:"180px", height:"180px"}, 1000)
    });
    $("#b11").click(function() {
        $(".caja-animated-1").animate({width:"100px", height:"100px"}, 1000)
        $(".caja-animated-1").animate({width:"180px", height:"180px"}, 1000)
    });
    $("#b12").click(function() {
        $(".caja-animated-1").animate({opacity:"0.5"}, 1000)
    });
    $("#b13").click(function() {
        $(".caja-animated-1").animate({opacity:"1"}, 1000)
    });

    $("#btnpost1").click(function() {
        $("html, body").animate({scrollTop: posi1.top}, "slow")
    });
    $("#btnpost2").click(function() {
        $("html , body").animate({scrollTop: posi2.top}, "slow")
    });
    $("#btnpost3").click(function() {
        $("html , body").animate({scrollTop: posi3.top}, "slow")
    });
    $("#btnpost4").click(function() {
        $("html , body").animate({scrollTop: posi4.top}, "slow")
    });
    $("#btnpost5").click(function() {
        $("html, body").animate({scrollTop: posi5.top}, "slow")
    });
    $("#btnpost6").click(function() {
        $("html, body").animate({scrollTop: posi6.top}, "slow")
    });
    $("#btnpost7").click(function() {
        $("html, body").animate({scrollTop: posi7.top}, "slow")
    });
    $("#btnpost8").click(function() {
        $("html, body").animate({scrollTop: posi8.top}, "slow")
    });
    $("#btnpost9").click(function() {
        $("html, body").animate({scrollTop: posi9.top}, "slow")
    });
    $("#toTop").css("display", "none");
	$(window).scroll(function(){
		if($(window).scrollTop() > 500){
			$("#toTop").fadeIn("slow");
		}
		else {
			$("#toTop").fadeOut("slow");
		}
	});
    $("#toTop").click(function() {
        $("html, body").animate({scrollTop: 0}, "slow")
    });
    
    


  });