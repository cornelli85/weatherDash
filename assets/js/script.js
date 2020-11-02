$(document).ready(function () {

    $("#find-city").on("click", function (event) {

        event.preventDefault();

        var city = $("#search-input").val();

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=b9058984a3809b28dc8fe823591d7860";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var cityName = response.name;
            var temp = response.main.temp;
            var humidity = response.main.humidity;
            var windSpeed = response.wind.speed;
            
            console.log(response);

            $("#city-name").html("<h3>" + cityName + "</h3>");
            $("#temp").text("Temperature: " + temp + " Fahrenheit");
            $("#humidity").text("Humidity: " + humidity + "%");
            $("#wind-speed").text("Wind Speed: " + windSpeed + " MPH");

        });

    });






})