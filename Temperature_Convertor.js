const convertBtn = document.getElementById("convert-btn");
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const resultDiv = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  
  const temperature = temperatureInput.value;
  const unit = unitSelect.value;
  let convertedTemperature;
  
  if (unit === "celsius") {
    convertedTemperature = temperature * 1.8 + 32;
  } else if (unit === "fahrenheit") {
    convertedTemperature = (temperature - 32) / 1.8;
  }
  
  resultDiv.innerHTML = `${temperature}&deg; ${unit} is ${convertedTemperature.toFixed(2)}&deg; ${unit === "celsius" ? "Fahrenheit" : "Celsius"}`;
});
