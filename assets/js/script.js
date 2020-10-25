$(document).ready(function () {

    $("#find-city").on("click", function (event) {

        event.preventDefault();

        var city = $("#search-input").val();

        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=b9058984a3809b28dc8fe823591d7860";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response);
        });

    })






})