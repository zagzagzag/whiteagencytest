
/*!
 * jQuery Lightbox plugin
 * Requires jQuery v1.5 or later
 * Author: Bastien Cabirou
 */

(function ($, window) {

    $.Lightbox = function (action) {
        if (action === "open") {
            centerLightbox();
            $('#lightbox-loading').show();
        }

        if (action === "close") {
            $('#lightbox-loading').hide();
        }

    };

    function centerLightbox() {
        var lightboxTop = ($(window).height() / 2) - ($('#lightbox-loading .box').height() / 2);
        $('#lightbox-loading .box').css('top', lightboxTop);
    }

    $(window).bind('orientationchange', function (e) {
        setTimeout(function () { // hack android
            centerLightbox();
        }, 200);
    });

    var resizeTimer;
    $(window).resize(function () {
        // For the sake of UI responsiveness we use a timeout
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(centerLightbox, 100);
    });

}(jQuery, window));

