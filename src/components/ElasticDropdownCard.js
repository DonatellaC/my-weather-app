import { render } from "@testing-library/react";
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
    fetch("https://www.el-tiempo.net/api/json/v2/provincias/08/municipios")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div>
        <div>
          <EuiComboBox placeholder="Seleccionar un municipio" />
        </div>

        <EuiCard textAlign="left" />
      </div>
    );
  }
}
