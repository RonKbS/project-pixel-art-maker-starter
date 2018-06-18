// Select color input
// Select size input
//http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js


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
            var c = '<td></td>'
            $('tr').append(c);
        }
        k = 0;
        $('td').each(function(){
            $(this).addClass(k.toString());
        });
        /*for (var k = 0; k < lenght * width; k++){...was going for each cell...class=cells'+ (j).toString() + '
            $('td').addClass(k.toString());
        }*/
    });
     
    /*$('#pixelCanvas').on('click','td',function () {
        $(this).css('background-color', $('#colorPicker').val());
      },
    function(){
        $(this).toggleClass('.cells');
    });*/
    $('#pixelCanvas').on('click','.cells', function () {
        $(this).css('background-color',$('#colorPicker').val());
      });
    });//document ready