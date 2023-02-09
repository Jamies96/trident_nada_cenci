import "bootstrap/dist/css/bootstrap.css";

function FormWeather() {
  let apiUrl: string = "http://api.openweathermap.org/data/2.5/weather";
  const apiId: string = "2eac9de447084eb237bb0d006cbfe511";

  function getWeather() {
    let input_tag = document.getElementById("inputValue") as HTMLInputElement;
    let city = input_tag.value;
    let query_value = "?q=" + city + "&APPID=" + apiId;
    fetch(apiUrl + query_value)
      .then((res) => res.json())
      .then(
        (result) => {
          let icon_img_tag = document.getElementById(
            "icon"
          ) as HTMLImageElement;
          let result_span_tag = document.getElementById(
            "result"
          ) as HTMLSpanElement;

          console.log(result);
          if (result.weather === undefined) {
            result_span_tag.textContent = "Weather city not found";
            icon_img_tag.src = '';
          } else {
            let weather: string = result.weather[0].description;
            console.log(weather);
            result_span_tag.textContent = "The weather at " + city + " is " + weather;
            let img_url =
              "http://openweathermap.org/img/wn/" +
              result.weather[0].icon +
              "@2x.png";

            icon_img_tag.src = img_url;
          }
        },
        (error) => {
          console.log(error);
          let errorSpan = document.getElementById(
            "not-found-error"
          ) as HTMLElement;
          errorSpan.textContent = error;
        }
      );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <label htmlFor="inputValue">Type a city's name</label>
            <input className="form-control" type="text" id="inputValue" />
          </div>
          <div className="col-2">
            <br></br>
            <button className="btn btn-primary" onClick={getWeather}>
              See Weather Forecast
            </button>
            <br></br>
            <span id="error"></span>
          </div>
          <div className="col-4">
            <br></br>
            <div className="card">
              <div className="card-body">
                <span id="result"></span>
                <img id="icon"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormWeather;
