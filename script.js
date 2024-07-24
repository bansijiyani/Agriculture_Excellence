function readMore(id) {
        var overlay = document.getElementById(id + 'Overlay');
        var image = document.querySelector('#' + id + ' .imgid');
    
        if (overlay.style.display === 'flex') {
            overlay.style.display = 'none';
            image.style.opacity = 1;
        } else {
            overlay.style.display = 'flex';
            image.style.opacity = 0.5; 
        }
    }
    

    function toggleMenu() {
        var menu = document.querySelector('ul');
        menu.classList.toggle('active');

        var icon = document.querySelector('.menu-icon');
        icon.classList.toggle('active');
    }

    // Toggle menu icon on scroll
    window.onscroll = function () {
        var header = document.querySelector('header');
        var icon = document.querySelector('.menu-icon');

        if (window.scrollY > 0) {
            header.style.background = '#333'; // Change to your desired background color
            icon.style.display = 'block';
        } else {
            header.style.background = 'transparent';
            icon.style.display = 'none';
        }
    };

    function getWeather() {
    const locationInput = document.getElementById('location');
    const location = locationInput.value;

    // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const apiKey = `251675f8558488dfc0009217ac2ab3b9`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id={india}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            if (data.cod === '404') {
                weatherInfo.innerHTML = `<p>Error: ${data.message}</p>`;
            } else {
                const temperature = (data.main.temp - 273.15).toFixed(2);
                const description = data.weather[0].description;
                weatherInfo.innerHTML = `<p>Temperature: ${temperature} &#8451;</p><p>Description: ${description}</p>`;
            }
        })
        .catch(error => {
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}
