(function() {
  var show_message;
  show_message = function(msg) {
    return $('#message').hide().text(msg).fadeIn(500, function() {
      return $('#message').append('!');
    });
  };
  $(function() {
    return show_message("world");
  });
  $(function() {
    return $('#message').click(function() {
      return show_message("your name here");
    });
  });
}).call(this);
