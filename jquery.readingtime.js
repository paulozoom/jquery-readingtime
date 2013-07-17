(function($) {
  $.fn.readingtime = function(options) {

    var settings = $.extend({
      wpm:    250,
      round:  'round'
    }, options);

    var words = $.trim(this.first().text()).split(/s+/).length;
    return Math[settings.round](words/settings.wpm);
  }
}(jQuery));