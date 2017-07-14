$(document).ready(function(){

  var showItems = function(){
    var inputname= $('#input').val();
    var token = $('#token').val();
    var template = Handlebars.compile($('#songs-template').html());
    $.ajax({
      url: 'https://api.spotify.com/v1/search?q='+inputname+'&type=track',
      type: 'GET',
      dataType: 'json',
      headers: {
        'Authorization': 'Bearer' + token
      },
      success: function(data){
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
        console.log(data);
      }
      // beforeSend: function (xhr) {
      //   xhr.setRequestHeader ("Authorization", "Bearer BQCfZZ5uzEZgYvxKH2gJ6JI8nNctkxot8oeWoFm_--zV_NGFAkWvF_dnnZ47X-1OwEfJW06wXDb41_8V7VBAjOI85M4S-jFb8dkSNYGTZcl3S_2zXfq_U4_BIngPteGE_UigieKECsPmeobeUIcpeUEb3_5kTNo" );
      // }
    });
  }

  $('#search').on('click', function(){
     showItems();
     $(this).val('');
  });
});
