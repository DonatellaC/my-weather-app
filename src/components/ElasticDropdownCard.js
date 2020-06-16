//import { render } from "@testing-library/react";
import { EuiComboBox, EuiCard } from "@elastic/eui";

import React, { Component } from "react";

export default class ElasticDropdownCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMunicipios: [],
    };
    this.onMunicipioSelected = this.onMunicipioSelected.bind(this);
  }

  onMunicipioSelected(selection) {
    //fetch weather information
    fetch(
      `https://www.el-tiempo.net/api/json/v2/provincias/${selection[0].codprov}/municipios/${selection[0].id}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          weather: {
            municipio: data.municipio.NOMBRE,
            tempActual: data.temperatura_actual,
            probLluvia: data.lluvia,
          },
        });
      });
  }

  componentDidMount() {
    //fetch cities in Barcelona province
    fetch("https://www.el-tiempo.net/api/json/v2/provincias/08/municipios")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.municipios);
        this.setState({
          municipios: data.municipios.map((municipio) => {
            return {
              //using CODIGOINE instead of COD_GEO due to an error obtaining the right city
              id: municipio.CODIGOINE.substring(0, 5),
              codprov: municipio.CODPROV,
              label: municipio.NOMBRE,
            };
          }),
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          <EuiComboBox
            placeholder="Select a city"
            singleSelection={{ asPlainText: true }}
            options={this.state.municipios}
            selectedOptions={this.state.selectedMunicipios}
            onChange={this.onMunicipioSelected}
            isClearable={true}
          />
        </div>
        <div className="result">
          {this.state.loading && <div>Loading...</div>}
          {this.state.weather && (
            <EuiCard
              textAlign="left"
              title={this.state.weather.municipio}
              description={`Current Temperature ${this.state.weather.tempActual}\u00b0 - Probability of Precipitation ${this.state.weather.probLluvia}%`}
            />
          )}
        </div>
      </div>
    );
  }
}
