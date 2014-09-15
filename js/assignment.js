(function ($, whiteAgency) {

    whiteAgency.vars = {
        begin: 0,
        end: 100,
        step: 20,
        progress: 0,
        progressTimer: {}
    };

    $(window).load(function () {
        whiteAgency.initLoading();
    });

    whiteAgency.initLoading = function () {
        // load data from json
        $.getJSON("js/data.json", function (jsonData) {
            whiteAgency.vars.progress = whiteAgency.vars.begin;
            whiteAgency.vars.step = jsonData.data.lightbox.duration / whiteAgency.vars.end;
            whiteAgency.startLoading();
        });
    };

    whiteAgency.startLoading = function () {
        // in case the timer is already runing
        if (!isNaN(whiteAgency.vars.progressTimer)) {
            clearInterval(whiteAgency.vars.progressTimer);
        }
        $('#lightbox-loading').removeClass('task-completed');
        $('#lightbox-loading').addClass('task-in-progress');
        
        // start timer
        whiteAgency.vars.progressTimer = setInterval(updateProgressBar, whiteAgency.vars.step);
        $.Lightbox('open');
    };

    function updateProgressBar() {
        if (whiteAgency.vars.progress < 100) {
            whiteAgency.vars.progress++;
            $('#box-progress-percent').html(whiteAgency.vars.progress);
            $('#progressbar div').css('width', whiteAgency.vars.progress + '%');
        } else {
            whiteAgency.endLoading();
        }
    };

    whiteAgency.endLoading = function () {
        clearInterval(whiteAgency.vars.progressTimer);
        $('#lightbox-loading').addClass('task-completed');
        $('#lightbox-loading').removeClass('task-in-progress');
    };

}(jQuery, window.whiteAgency = window.whiteAgency || {}));

