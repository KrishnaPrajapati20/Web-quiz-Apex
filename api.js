document.getElementById("fetch-weather").addEventListener("click", () => {
  fetch("https://api.weatherapi.com/v1/current.json?key=demo&q=London")
    .then(response => response.json())
    .then(data => {
      document.getElementById("weather-result").innerHTML = `
        <p>Location: ${data.location.name}</p>
        <p>Temperature: ${data.current.temp_c} °C</p>
        <p>Condition: ${data.current.condition.text}</p>
      `;
    })
    .catch(() => alert("Error fetching data"));
});
