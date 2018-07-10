$(document).ready(function () {
    var leapYear = function (year) {
        return false;
    };
    var leapYear = function (year) {
        if (year % 4 === 0) {
            return true;
        } else {
            return false;
        }
    };

  // jQuery user interface logic
    $("form#leap-year").submit(function (event) {
        event.preventDefault();
        var year = parseInt($("input#year").val());
        var result = leapYear(year);
        $("#result").text(result);
    });
});