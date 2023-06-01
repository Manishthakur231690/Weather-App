
const apikey = 'aa40334a628aa86bd5dc9296483aef63';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const search_box = document.getElementById('search');
const search_Btn = document.getElementById('search_btn');


async function checkweather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`);

    if(response.status == 404){
        document.getElementById('error').style.display = 'block';
        document.getElementById('weather_content').style.display = 'none';
    }
    else{

        var data = await response.json();
        console.log(data);

        // -------------- Displaying Date

        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const d = new Date();
        let day = weekday[d.getDay()];
        document.getElementById("day").innerHTML = day;
        document.getElementById("date").innerHTML = d.getDate() +"-"+ d.getMonth() +"-"+ d.getFullYear() + "  ,"+(24 - d.getHours())  +":"+ d.getMinutes();

        // --------------  Displying The Data
    
        document.querySelector('#city_name').innerHTML = data.name;
        document.querySelector('#temp').innerHTML = Math.floor(data.main.temp) + '° C';
        document.querySelector('#humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('#wind').innerHTML = data.wind.speed ;
    
        if(data.weather[0].main == 'Clouds'){
            document.getElementById("img").src = 'Images/Clouds.png';
        }
        if(data.weather[0].main == 'Clear'){
            document.getElementById("img").src = 'Images/Clear.png';
        }
        if(data.weather[0].main == 'Rain'){
            document.getElementById("img").src = 'Images/Rain.png';
        }
        if(data.weather[0].main == 'Drizzle'){
            document.getElementById("img").src = 'Images/Drizzle.png';
        }
        if(data.weather[0].main == 'Mist'){
            document.getElementById("img").src = 'Images/Mist.png';
        }
        
        document.getElementById('weather_content').style.display = 'block';
    
    }

    
}

search_Btn.onclick = function(){
    checkweather(search_box.value);
    search_box.value = '';
}

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'fd8dccf3f5msh649fec7e1b8d141p1b338ajsnc539766179f5',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

        // cloud_pct.innerHTML = response.cloud_pct;
        // temp.innerHTML = response.temp;
        // feels_like.innerHTML =  response.feels_like;
        // humidity.innerHTML =  response.humidity;
        // min_temp.innerHTML =  response.min_temp;
        // max_temp.innerHTML =  response.max_temp;
        // wind_speed.innerHTML = response.wind_speed;
        // wind_degrees.innerHTML =  response.wind_degrees;
        // sunrise.innerHTML =  response.sunrise;
        // sunset.innerHTML =  response.sunset;


        // https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=aa40334a628aa86bd5dc9296483aef63



