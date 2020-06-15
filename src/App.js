import React from "react";
import "./App.css";
//import { EuiCard, EuiFlexItem } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import ElasticDropdownCard from "./components/ElasticDropdownCard";
//import { EuiComboBox, EuiCard } from "@elastic/eui";

//import { render } from "@testing-library/react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      municipios: [],
      //selectedMunicipios: [],
      weather: null,
      error: false,
    };
  }

  render() {
    return (
      <div>
        <div className="App">Weather</div>
        <ElasticDropdownCard />
      </div>
    );
  }
}
export default App;

/*
<div className="cardContent">
          <EuiFlexItem>
            <EuiCard
              textAlign="left"
              title="Tiempo en la provincia de Barcelona"
             />
          </EuiFlexItem>
        </div>
        */
