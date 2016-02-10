$(document).ready(function(){

  var showItems = function(){
    var inputname= $('#input').val();
    var template = Handlebars.compile($('#songs-template').html());
    $.getJSON("https://api.spotify.com/v1/search?q="+inputname+"&type=track", function(data){
      $('.content').html(template({ songs: data }));
      if (data.tracks.items.length===0){
        $('.content').append("<p>No hay registros</p>");
      }
      // var searchval= data.tracks.items[0].artists[0].name;
      // $('div').append("<p>"+searchval+"</p>");
      $('span').each(function(){
        var c = $(this).text().toLowerCase();
        if (inputname.toLowerCase() === c ){
          $(this).parent().parent().addClass('fit');
        }
      });
    });
  }

  $('#input').on('keyup', function(e){
    if (e.which===13){
     showItems();
     $(this).val('');
    }
  });
});
