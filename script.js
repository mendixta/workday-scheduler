$("#9-hour .description").val(localStorage.getItem("9-hour"));
$("#10-hour .description").val(localStorage.getItem("10-hour"));
$("#11-hour .description").val(localStorage.getItem("11-hour"));
$("#12-hour .description").val(localStorage.getItem("12-hour"));
$("#1-hour .description").val(localStorage.getItem("1-hour"));
$("#2-hour .description").val(localStorage.getItem("2-hour"));
$("#3-hour .description").val(localStorage.getItem("3-hour"));
$("#4-hour .description").val(localStorage.getItem("4-hour"));
$("#5-hour .description").val(localStorage.getItem("5-hour"));




$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

       
        localStorage.setItem(time, text);
    })
   


    timeTracker();
})