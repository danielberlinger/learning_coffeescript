show_message = (msg) ->
  $('#message').hide().text(msg).fadeIn(500,
    -> $('#message').append('!')
   )
 
$ -> show_message "world"

$ -> $('#message').click -> show_message "your name here"
