// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
/*$(function(){
    $('h2').addClass('yata');
});*/

/*$ (function makeGrid(height, length){
    for (i = 0; i < height; i++){
        $ ('#pixelCanvas').append('<tr></tr>');
        for (i = 0; i < length; i++){
            $('tr').append('<td></td>');
        }
    }
});*/
$(document).ready(function (){
    $('#sizePicker').on('submit',function makeGrid() {
        event.preventDefault();
        $('#pixelCanvas').empty();
        var height = $('#inputHeight').val();
        var length = $('#inputWeight').val();

        for (var i = 0; i < height; i++){
            $('#pixelCanvas').append('<tr></tr>');
        }
        for (var j = 0; j < length; j++){
            $('tr').append('<td class="cells"></td>');
        }
    });
     
    $('#pixelCanvas').on('click','td',function () {
        //$(this).clear();
        var paint = $('#colorPicker').val();
        $(this).css('background-color', paint);
      });
    });
   /*
  $(document).ready(function (){
    $('#sizePicker').on('submit', function makeGrid() {
        event.preventDefault();
        $('#pixelCanvas').empty();
        var height = $('#inputHeight').val();
        var length = $('#inputWeight').val();

        for (var i = 0; i < height; i++){
            $('#pixelCanvas').append('<tr></tr>');
        }
        for (var j = 0; j < length; j++){
            $('tr').append('<td class="cells"></td>');
        }
    });
	$('#pixelCanvas').on('click','td', function () {
        var paint = $('#colorPicker').val();
        $(this).css('background-color', paint);
      });
	  });*/