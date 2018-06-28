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
            var c = '<td class "cells"></td>'
            $('tr').append(c);
        }
       /* var k = 0;
        $('td').each(function(){
            var m = $(this).index() + k;
            $(this).addClass(m.toString());...assign each cell a different class value
            k = k + 1;
        });*/
    });

    $('#pixelCanvas').on('click', 'td', function() {
        $('#pixelCanvas').on( 'mouseover','td', function() {
            if ($(this).css('background-color') == $('h1').css('background-color')){
                $(this).css('background-color',$('#colorPicker').val());
            }
            else {
                $(this).css('background-color', '');
            }
        });
    });
    $('#pixelCanvas').on('dblclick','td', function() {    
        if ($(this).css('background-color') == $('h1').css('background-color')){
            $(this).css('background-color',$('#colorPicker').val());
        }
        else {
            $(this).css('background-color', '');
        }
    });
    });//document ready