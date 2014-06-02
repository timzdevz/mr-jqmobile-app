(function($){
  $.widget("mobile.simplecolorpicker", {

    options: {

      colors: [
        "#A4C400", "#60A917", "#008A00", "#00ABA9", "#1BA1E2", "#0050EF",
        "#6A00FF", "#AA00FF", "#F472D0", "#D80073", "#A20025", "#E51400",
        "#FA6800", "#F0A30A", "#E3C800", "#825A2C", "#6D8764", "#647687",
        "#76608A", "#87794E"],
      columns: 4,
      onSelectColor: null
    },

    _create: function() {
      var self = this;
      var simpleColorPicker = this.element;

      var opts = $.extend(this.options, simpleColorPicker.data("options"));
      if (typeof opts.colors == "string") {
        opts.colors = opts.colors.split(',');
      }

      simpleColorPicker.attr({
        'id': 'simple-color-picker',
        'data-theme': 'none',
        'class': 'ui-content',
        'data-shadow': false
      });

      $('<div class="ui-body ui-body-a ui-corner-all ui-shadow">').appendTo(simpleColorPicker);

      for (var i = 0; i < opts.colors.length; i++) {
        $('<div class="color-item" />')
                .css("background-color", opts.colors[i])
                .appendTo(simpleColorPicker.find('.ui-body'));
      }

      simpleColorPicker.popup({ beforeposition: setupColorPicker });

      simpleColorPicker.on('vclick', '.color-item', function(e) {
        if (self.options.onSelectColor !== undefined && 
              simpleColorPicker.data('scpTrigger') != null) {
          self.options.onSelectColor(
              $(this).css('background-color'), 
              simpleColorPicker.data('scpTrigger')
          );
        }

        simpleColorPicker.popup("close");
        simpleColorPicker.data('scpTrigger', null);
      });

      function setupColorPicker(event) {
        var popupElem = $(event.target).find('.ui-body');
        var colorBlock = popupElem.find('.color-item');
        colorBlock.filter(':nth-child(' + opts.columns + 'n)').css("margin-right", 0);
        var width = colorBlock.outerWidth() * opts.columns;
        width += parseInt(colorBlock.css('margin-right')) * opts.columns - 1;
        popupElem.css("width", width);
      }

    },

  });

  $(document).bind("pagecreate", function(e) {
    $(document).trigger("simplecolorpickerbeforecreate");
    return $(":jqmData(role='simplecolorpicker')", e.target)
          .simplecolorpicker();
  });

  $(document).on('click', ":jqmData(role='scp-trigger')", function(e) {
    var simpleColorPicker = 
      $(e.target).closest('[data-role="page"]').find('#simple-color-picker');
    simpleColorPicker.data('scpTrigger', $(this));
    $(document).trigger("simplecolorpickerbeforeopen");

    simpleColorPicker.popup("open", {"transition": "pop"});
  });

})(jQuery);