
/*!
 * jQuery Lightbox plugin
 * Requires jQuery v1.5 or later
 * Author: Bastien Cabirou
 */

(function ($, window) {

    //$.Lightbox = function (elements, options) {
    //    var Lightbox = this;
        
    //    Lightbox.init = function () {
    //        console.log('init');
    //        var _this = this;
    //        $('lightbox-controller').click(function () {
    //            _this.Lightbox($(this).attr('lightbox-action'), $(this.attr('lightbox-id')));
    //        });
    //    };

    //    Lightbox.init();
    //};

    $.fn.Lightbox = function (action, source) {
        if ( action === "open") {
            var screenHeight = $(window).height();
            var lightboxHeight = $('#lightbox-loading .box').height();
            $('#lightbox-loading .box').css('top', (screenHeight / 2) - (lightboxHeight / 2));
            $('#lightbox-loading').show();
        }
 
        if ( action === "close" ) {
            $('#lightbox-loading').hide();
        }

    };

}(jQuery, window));