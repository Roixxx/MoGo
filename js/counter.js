var timeout = 1,
    counters = $('.counter');
counters.each(function(){
  var that = $(this),
      num = that.html();
  that.html(0);
  that.attr('data-num',num);
});
$(window).on('scroll', function(){
  var scrolltop = $(this).scrollTop(),
      wh = $(this).height();
  counters.each(function(){
    var that = $(this);
    if (!that.data('start') && scrolltop >= that.offset().top - wh) {
      that.attr('data-start', true);
      var i = 1,
        num = that.data('num'),
        step = Math.round(1000 * timeout / num),
        int = setInterval(function(){
          if (i <= num) {
            that.html(i);
          }
          else {
            clearInterval(int);
          }
          i++;
      },step);
    }
  });
});