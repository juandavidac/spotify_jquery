$(document).ready(function(){

  var showItems = function(){
    var inputname= $('#input').val();
    var template = Handlebars.compile($('#songs-template').html());
    $.getJSON("https://api.spotify.com/v1/search?q="+inputname+"&type=track", function(data){
        $('.content').html(template({ songs: data }));
        if (!data[0]){
          $('.content').append("<p>No hay registros</p>");
        }

    });
    $('tr>td>span#artist').each(function(){
      var c = $('#artist').text();
      if( c === inputname){
        $('tr').addClass('fit');
      }
    });

  }

  $('#input').on('keyup', function(e){
    if (e.which===13){
     showItems();
     $(this).val('');

    }
  });

});
