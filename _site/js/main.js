$(".team-member").click(function(){
     var target = $(this).attr("data-target");
    $(".popup").each(function(){
      if($(this).attr("data-pop") == target){
        $(this).addClass("onscreen");
      }});
   $(".popUpOverlay").addClass("onscreen");
 });

$(".popUpOverlay").click(function(){
$(".popup").removeClass("onscreen");
   $(".popUpOverlay").removeClass("onscreen");
 });


$(".popupX").click(function(){
  $(".popup").removeClass("onscreen");
  $(".popUpOverlay").removeClass("onscreen");
})