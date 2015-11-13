$(document).ready(function(){

  

function hover(){$('tr').mouseenter(function(){
  $(this).css('background-color', 'yellow')
})

$('tr').mouseleave(function(){
  $(this).css('background-color', 'white')
})
}
hover()
$('.button').click(function(){
  $('table').append('<tr> <td>New</td><td>New</td><td>New</td><td>New</td><td>New</td><td>New</td><td>New</td><td>New</td> </tr>')
hover()
})

function editTable(){$("td").dblclick(function () {
  var OriginalContent = $(this).text();
   $(this).addClass("cellEditing");
    $(this).html("<input type='text' value='" + OriginalContent + "' />");
     $(this).children().first().focus();
      $(this).children().first().keypress(function (e) { if (e.which == 13) { var newContent = $(this).val();
         $(this).parent().text(newContent); $(this).parent().removeClass("cellEditing");
        } });
         $(this).children().first().blur(function(){ $(this).parent().text(OriginalContent);
            $(this).parent().removeClass("cellEditing");
          });
    });
}






});
