import React from "react";
import "./App.css";
import "@elastic/eui/dist/eui_theme_light.css";
import ElasticDropdownCard from "./components/ElasticDropdownCard";

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

  render() {
    return (
      <div>
        <div className="App">Weather in Barcelona province</div>
        <ElasticDropdownCard />
      </div>
    );
  }
}
export default App;
