$(document).ready(function(){
var	sideBarSlide = false;
var turn = false;

$(".test").removeClass('test');
$(".test2").removeClass('test2');
$(".test3").removeClass('test3');
$("#move").click(function(){
 sideBarSlide = !sideBarSlide;
	if(sideBarSlide){
    $("li a").css("display", "block");
$(".sidenav").animate({ "left": "0px" }, "slow" );
   $( ".content" ).animate({ "left": "480px" }, "slow" ).css("width","50%");


    
}
else{
      $("li a").css("display", "none");
	$(".sidenav").animate({ "left": "-2000px" }, "slow" );
	 $( ".content" ).animate({ "left": "0px" }, "slow" ).css("width","80%");

     
}
});

$( "#about" ).click(function() {
  $(".sidenav").animate({ "left": "-2000px" }, "slow" );
$( ".content" ).animate({ "left": "0px" }, "slow" ).css("width","80%");
sideBarSlide = false;
turn = false;
$(this).addClass('test');
$(".test2").removeClass('test2');
$(".test3").removeClass('test3');
  $(".hams").removeClass('active');
   $( ".block2" ).animate({ "left": "-2000px" }, 500 );
    $( ".block" ).animate({ "left": "0px" }, 500 );
    $( ".block3" ).animate({ "left": "-2000px" }, 500 );
});

$( "#post" ).click(function(){
  $(".sidenav").animate({ "left": "-2000px" }, "slow" );
$( ".content" ).animate({ "left": "0px" }, "slow" ).css("width","80%");
sideBarSlide = false;
turn = false;
$(this).addClass('test2');
$(".test").removeClass('test');
$(".test3").removeClass('test3');
  $(".hams").removeClass('active');
$( ".block" ).animate({ "left": "-2000px" }, 500 );
    $( ".block2" ).animate({ "left": "0px" }, 500 );
        $( ".block3" ).animate({ "left": "-2000px" }, 500 );
});

$( "#contacts" ).click(function(){
  $(".sidenav").animate({ "left": "-2000px" }, "slow" );
$( ".content" ).animate({ "left": "0px" }, "slow" ).css("width","80%");
sideBarSlide = false;
turn = false;
$(this).addClass('test3');
$(".test").removeClass('test');
$(".test2").removeClass('test2');
  $(".hams").removeClass('active');
$( ".block" ).animate({ "left": "-2000px" }, 500 );
$( ".block2" ).animate({ "left": "-2000px" }, 500 );
    $( ".block3" ).animate({ "left": "0px" }, 500 );
});

 $(".hams").click(function(){
  turn = !turn;
if(turn){
    $(".hams").addClass('active');

    }
 else{
  $(".hams").removeClass('active');

    
 }
 });

   $('.field').keyup(function() {;
        var empty = false;
        $('.field').each(function() {
            if ($(this).val().length == 0) {
                empty = true;
            }
        });
        if (empty) {
            $('.btn').attr('disabled', 'disabled');
        } else {
            $('.btn').attr('disabled', false);
        }
    });

});


