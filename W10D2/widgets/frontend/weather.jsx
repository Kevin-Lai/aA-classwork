import React from 'react';
const toQueryString = (obj) => {
    const parts = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
        }
    }
    return parts.join('&');
}

class Weather extends React.Component{
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(this.pollWeather);
    }
    constructor(props){
        super(props);
        this.state = {
            weather: null
        };
        this.pollWeather = this.pollWeather.bind(this);
    }
    render(){
        // using state data (weather), doing some JS to create the necessary vars
        let content = <span className="loading">loading...</span>
        if(this.state.weather){
            content =
            <div className="weather">
                <p>
                    <span>City:</span> <span>{this.state.weather.name}</span>
                </p>
                <p>
                    <span>Temp:</span> <span>{this.state.weather.main.temp} K</span>
                </p>
            </div>
        }
        return(
            <div className="weather-wrapper">
                <h2>Weather Widget</h2>
                <p>{content}</p>
            </div>
        )
    }
    pollWeather(location){
        // const url = "http://api.openweathermap.org/data/2.5/forecast?"
        let url = 'http://api.openweathermap.org/data/2.5/weather?';
        const params = {
            lat: location.coords.latitude,
            lon: location.coords.longitude
        };
        url += toQueryString(params);
        const apiKey = 'YOUR OWN API KEY';
        // This is our API key; please use your own!
        url += `&APPID=${apiKey}`;
        const method = "GET";
        // MY AJAX
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => { //! changed to ES6 decl
            if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {   // XMLHttpRequest.DONE == 4
                // document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
                const data = JSON.parse(xmlhttp.responseText);
                this.setState({ weather: data });
            }
        };
        xmlhttp.open(method, url, true);
        xmlhttp.send();
        // END
    }
}

export default Weather;



