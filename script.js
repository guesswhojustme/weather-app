const input = document.getElementById('location');
const button = document.getElementById('search');
const loc = document.getElementById('place');
const temp = document.getElementById('weather');
const desc = document.getElementById('description');
const condition = document.getElementById('condition');
const fl = document.getElementById('feelslike');
const body = document.querySelector('body');
const card = document.getElementById('wrapper');
const check = document.getElementById('check');

const img = document.createElement('img')

button.addEventListener('click', () => {
    loc.textContent = '';
    desc.textContent = '';
    temp.textContent = '';
    condition.textContent = '';
    fl.textContent = '';
    
    img.remove();
    check.remove();
    const span = document.createElement('span');
    span.textContent = 'loading...';
    body.appendChild(span)

    async function locationWeather(){
        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?key=LKV52KQUBXVCWFAWD968K2K4G`)
            const weather = await response.json();
            console.log(weather);
            
            loc.textContent = weather.resolvedAddress.toUpperCase();
            desc.textContent = weather.description;
            temp.textContent = `Temp: ${weather.currentConditions.temp} °F |`;
            condition.textContent = weather.currentConditions.conditions;
            fl.textContent = `Feels Like: ${weather.currentConditions.feelslike} °F`;
            
            img.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/2nd%20Set%20-%20Monochrome/${weather.currentConditions.icon}.svg`
            card.prepend(img)

            span.remove();
        } catch (error) {
            alert(error)
            console.log(error);
            span.remove();
        }
    }

    locationWeather();
})

