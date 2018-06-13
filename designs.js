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
$(document).ready(function makeGrid(){
    $('#sizePicker').submit(function () {
            event.preventDefault();

            var height = $('#inputHeight').val();
            var length = $('#inputWeight').val();
            
            for (var i = 0; i < height; i++){
                $('#pixelCanvas').append('<tr></tr>');
            }
            for (var j = 0; j < length; j++){
                $('tr').append('<td></td>');
            }   
            //makeGrid(height,length);
        });
    });
    //creating cells
    /*$("input[type='submit']").on('click',function (){
        $('#pixelCanvas').attr('col', length);
        for (i = 0; i < width; i++){
            $('#pixelCanvas').append('tr'); <tr><td></td></tr>
        }*/