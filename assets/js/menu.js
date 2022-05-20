$(document).ready(function(){
    $("hamburguerHover").click(function() {
        $(".side-nav").css("width", "250px");
        
    });
    $(".btn-close").click(function() {
        $(".sidenav").css("width", "0px");
        
    });

});