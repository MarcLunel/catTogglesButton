$widthBox = $('.cat-box-top').width();
$position = $('.switch-label').offset().left - $('.cat-paw').width() - $('.cat-paw').offset().left + 120 + 10;
$action = true;

$('.switch-label').click(function(){
  if($action == true){
    $action = false;
    $('.cat-paw').animate({"left":$position+"px"},300);
    $('.cat-box-top').css({"box-shadow":"15px 0px 10px -2px rgba(0,0,0,0.5)", "width":$widthBox-20+"px"});
    $('.cat-paw').animate({"left":"0px"},300);
    setTimeout(function(){
      $('.switch-input').attr("disabled", true);
    }, 1);
    setTimeout(function(){
      $('.switch-input').prop('checked', false);
    }, 270);
    setTimeout(function(){
      $('.switch-input').attr("disabled", false);
      $('.cat-box-top').css({"box-shadow":"none", "width":$widthBox+"px"});
      $('.cat-paw').stop();
      $action = true;
    }, 600);
  }
})
