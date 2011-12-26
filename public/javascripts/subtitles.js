function spinner(){
  var spinner = new Spinner().spin();
  return spinner;
}
$(function(){
  $("#highlights").click(function(e){
    var link = $(this);
    e.preventDefault();
    var spin = spinner();
    link.parent().append(spin.el);
    $("ul.pills li.active").removeClass("active");
    link.parent().addClass("active");
    $.get('/subtitles/highlights', function(data){
      $("#subtitles").fadeOut('slow', function(){
        spin.stop();
        $("#subtitles").fadeIn('slow');
        $("#subtitles").html(data);
      });
    });
  });

  $("#most_downloaded").click(function(e){
    e.preventDefault();
    var spin = spinner();
    $(this).parent().append(spin.el);
    $("ul.pills li.active").removeClass("active");
    $(this).parent().addClass("active");
    $.get('/subtitles/most_downloaded', function(data){
      $("#subtitles").fadeOut('slow', function(){
        spin.stop();
        $("#subtitles").fadeIn('slow');
        $("#subtitles").html(data);
      });
    });
  });
  $("#highlights").trigger("click");
});
