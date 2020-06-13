import React from "react";
import "./App.css";
import { EuiCard, EuiFlexItem } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
//import { render } from "@testing-library/react";
//import { EuiComboBox } from "@elastic/eui";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      municipios: [],
      weather: null,
      error: false,
    };
  }

  /*

  handleInput = (event) => {
    this.setState({
      location: event.target.value,
    });
  };

  getWeather = () => {
    this.setState({
      loading: true,
      weather: null,
      error: false,
    });
  };

  */

  componentDidMount() {
    fetch("https://www.el-tiempo.net/api/json/v2/provincias/08/municipios")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.municipios);
        //console.log(data.municipios[3].COD_GEO);

        this.setState({
          weather: data.weather,
          loading: true,
          municipios: data.municipios,
        });
      });
  }

  render() {
    const { municipios } = this.state;
    return (
      <div>
        <div className="App">Weather App</div>
        <input
          type="text"
          name="location"
          value={this.state.location}
          onChange={this.handleInput}
        />
        <button onClick={this.getWeather}>SUBMIT</button>
        {municipios.map((municipio) => (
          <li key={municipio.id_rel}>
            <h1>{municipio.NOMBRE}</h1>
          </li>
        ))}
      </div>
    );
  }
}
export default App;
