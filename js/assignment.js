(function ($, whiteAgency) {








}(jQuery, window.whiteAgencyAssignment = window.whiteAgencyAssignment || {}));



function getData() {
    $.getJSON("js/data.json", function (data) {
        console.log(data);
        console.log("Data: " + data);
    });

}

//function getDataSuccess(data, status) {
//        console.log(data);
//        console.log(status);
//}