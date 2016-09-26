function setEvents()
{
    $("#btn_start").click(start);
    $('.modal-trigger').leanModal();
}
function start()
{
    $('#intro').hide();
    $('#crossword').css('top', 0);
    wordfind();
}
function wordfind() {

    var win = false;

    FastClick.attach(document.body);

    var wordsToFind = $('#list li').length,
        colors = ['red', 'green', 'yellow', 'blue', 'purple','red', 'green', 'yellow', 'blue', 'purple'],
        found = 0,
        clicking = false;

    $('#restart').click(function() {
        $('.box').attr('class', 'box');
        $('#list li').removeClass('found');
        $('#restart').hide();
        found = 0;
    });

    $('#grid').mousedown(function(){
        clicking = true;
        console.log('down')
    });

    $('#grid').mouseup(function(){
        clicking = false;
        console.log('up')
        $('.box').removeClass('highlight');
    })

    $('.box').mouseover().mouseout(function() {
        if(clicking){
            // Toggle highlight to box on click
            $(this).toggleClass('highlight');
            var word = $(this).attr('data-word'), // Get word attribute from clicked box.
                wordLen = word.length, // How long is the word.
                $box = $('.box[data-word="' + word + '"]'); // Get all box's with word attribute.
            if ($('.box[data-word="' + word + '"].highlight').length == wordLen) {
                // Word is fully highlighted, remove highlight and add class fount-colorArray
                $box.removeClass('highlight').addClass('found-' + colors[found]);
                // Add found class to the list item that contains "word"
                $('li[data-word="' + word + '"]').addClass('found');
                $('.box').removeClass('highlight');
                found++;
            }

            if (found == wordsToFind && !win) {
                win = true;
                $('#modal3').openModal();
            }
        }
    });
}
$(document).ready(setEvents);