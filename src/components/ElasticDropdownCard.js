//import { render } from "@testing-library/react";
import { EuiComboBox, EuiCard } from "@elastic/eui";

import React, { Component } from "react";

export default class ElasticDropdownCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMunicipios: [],
    };
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
          {this.state.weather && <EuiCard />}
        </div>
      </div>
    );
  }
}
