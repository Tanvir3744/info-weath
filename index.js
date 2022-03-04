//api keys
const API_KEY = `4be9daad59420d992c38de2d750fe106`;

console.log('hello weather app');

const loadWeather = () => {
    let city = document.getElementById('search-input');
    let cityValue = city.value;

    //clear data from input field
    city.value ='';
    
    //api url 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ cityValue }&appid=${ API_KEY }&units=metric`;
    
    // fetching the weather api
    fetch(url)
    .then(response => response.json())
    .then(data => displayWeather(data))
    
}

//function to set inner text 
const setInnerText = (id, text) => {
    let setText = document.getElementById(id);
    setText.innerHTML = text;
}

// display temperature
const displayWeather = (tamp) => {
    //set city
    setInnerText('city-name', tamp.name)

    //set temperature
    setInnerText('temperature', tamp.main.temp) 
    
    //set feels like
    setInnerText('feel', tamp.main.feels_like)

    let current = tamp.weather[0].main;
   
    // set cloudy or not
    setInnerText('weather-situation',current)
    
    

    // set icons instead of image 
    const iconUrl = `http://openweathermap.org/img/wn/${ tamp.weather[0].icon }@2x.png`;
    let imageIcon = document.getElementById('change-icon');
    imageIcon.setAttribute('src', iconUrl);
}