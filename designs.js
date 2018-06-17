// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
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
        $(this).toggle(function(){
        $(this).css('background-color', '');
        var paint = $('#colorPicker').val();
        $(this).css('background-color', paint);
        });
      });
    });//document ready
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