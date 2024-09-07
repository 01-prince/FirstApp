const Api_key = "8b718b4d2935b7625fe3a17cf8ced283";
// Your Provided weather Api

function getWeather()
{
    const city=document.getElementById('cityInput').value;
    const weatherDetails=document.getElementById('weatherDetails');
    if(city===''){
        weatherDetails.innerHTML='<p>Please Enter A City Name</p>';
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`;

    fetch(url)
    .then(response=>response.json())
           .then(data=>{
            if(data.cod==="404"){
                weatherDetails.innerHTML='<p>City Not Found Please Try again</p>';
            }
            else{
                console.log(data)
                weatherDetails.innerHTML=`<h2>${data.name},${data.sys.country}</h2>
                <p>Temparature:${data.main.temp}</p>
                <p>TimeZone:${data.timezone}</p>`;
            }
           })
           .catch(error=>{
            weatherDetails.innerHTML='<p>Error Fetching Data</p>'
           });
}

