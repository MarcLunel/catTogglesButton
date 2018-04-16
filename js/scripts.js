$('.switch-label').click(function(){
  $position = $('.switch-label').offset().left - $('.cat-paw').width() - $('.cat-paw').offset().left + 120 + 10;
    $('.cat-paw').animate({"left":$position+"px"},300);
    $('.cat-paw').animate({"left":"0px"},300);
  setTimeout(function(){
    $('.switch-input').attr("disabled", true);
  }, 100);
  setTimeout(function(){
    $('.switch-input').attr("disabled", false);
    $('.switch-input').prop('checked', false);
  }, 270);
  setTimeout(function(){
    $('.cat-paw').stop();
  }, 600);
}).stop();
