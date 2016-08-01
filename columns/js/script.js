function setEvents()
{
    $("#btn_start").click(start);
    $('.modal-trigger').leanModal();
    $("input.answer").keyup(keyUp);
}
function start()
{
    $('#intro').hide();
    $('#crossword').css('top', 0);


}
var answerspermitted = ['A','B','C','D'];

var correct = 'UkVOQlFnPT0=';

function keyUp()
{

    var answer = $(this).val().toUpperCase();

    if(answerspermitted.indexOf(answer) < 0)
    {
        answer = '';
    }

    $(this).val(answer);

    check();
}

function check()
{
    var ourAnswer = '';

    $("input.answer").each(function(k,a){
        ourAnswer += $(a).val();
    });

    if(btoa(btoa(ourAnswer)) == correct)
    {
        if(!$('#modal3').is(":visible"))
        {
            $('#modal3').openModal();
        }
        $("input.answer").addClass('correct');
    }
}
$(document).ready(setEvents);