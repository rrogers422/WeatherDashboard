
function getStarted() {
var city = $('.input').val()
// console.log(city)
getCurrentWeather(city) 
}

    function getforecast(city){
      //  console.log('working', city)
         var weatherAPI = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=8054eae26b3d9edcd20e624066ba9279";

        fetch(weatherAPI)
        .then(function (response) {
            if (response.ok) {
                response.json()
                .then(function (data) {
                   
                    console.log('DATA', data)

                    for (let i = 0; i < data.list.length; i++) {
                      

                        if(data.list[i].dt_txt.indexOf('15:00:00') !==-1){
                                console.log('USE THIS', data.list[i])
                                var card = $('<div>').addClass('col-2');
                                var temp = $('<p>')
                                temp.text("Temperatur: " + data.list[i].main.temp)
            
                                var cityName = $('<h3>')
                                cityName.text(city);

                            card.append(cityName, temp)
                            $('#fiveDay').append(card)


                        }
                        
                    }
                    // var card = $('<div>').addClass('card');

                    // var temp = $('<p>')
                    // temp.text("Temperatur: " + data.main.temp)

                    // var cityName = $('<h3>')
                    // cityName.text(input);


                    // card.append(cityName, temp);
                    // $('#current-container').append(card);



                   
                })
            }    
        })

    }


    function getCurrentWeather(input) {

        var currentAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=imperial&appid=8054eae26b3d9edcd20e624066ba9279";
        // var weatherAPI = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&units=imperial&appid=8054eae26b3d9edcd20e624066ba9279";

        fetch(currentAPI)
        .then(function (response) {
            if (response.ok) {
                response.json()
                .then(function (data) {
                   
                    
                    var card = $('<div>').addClass('card');

                    var temp = $('<p>')
                    temp.text("Temperatur: " + data.main.temp)

                    var cityName = $('<h3>')
                    cityName.text(input);


                    card.append(cityName, temp);
                    $('#current-container').append(card);



                    getforecast(input);
                })
            }    
        })
    }        
    searchBtn.addEventListener('click', getStarted);

