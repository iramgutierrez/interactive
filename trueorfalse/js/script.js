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
var answerspermitted = ['V' , 'F'];

var correct = 'VmtaV1JnPT0=';

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

var validFirst = false;
//#02b0ef
//#0a3d7e
function check()
{
    var ourAnswer = '';
    var count = 0;

    $("input.answer").each(function(k,a){

        if($(a).val() != '')
        {
            count++;
        }

        ourAnswer += $(a).val();
    });

    if(count == 4)
    {
        if(btoa(btoa(ourAnswer)) == correct)
        {
            if(!$('#modal3').is(":visible"))
            {
                $('#modal3').openModal();
            }
            $("input.answer").addClass('correct');
        }
        else
        {
            if(!validFirst)
            {
                $('#modal4').openModal();
                validFirst = true;
            }
        }
    }


}
$(document).ready(setEvents);