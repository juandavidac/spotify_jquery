$(document).ready(function(){

  var showItems = function(){
    var inputname= $('#input').val();
    var template = Handlebars.compile($('#songs-template').html());
    $.getJSON("https://api.spotify.com/v1/search?q="+inputname+"&type=track", function(data){
        $('div').append(template({ songs: data }));        
    });

  }

  $('#input').on('keyup', function(e){
    if (e.which===13){
     showItems();
     $(this).val('');
    //  $('div').css('margin-top', '100px');
    }
  });

});
