import React from 'react';
import ReactDOM from 'react-dom';

import CensusTaker from '../Utilities/CensusTaker';

class Census extends React.Component {
  constructor() {
    super();

    this.state = {
      panelOpen: false
    }

    this.togglePanel = this.togglePanel.bind(this);
  }

  render() {
    const counts = {};
    const citizens = this.props.citizens;

    this.props.characters.map(function(character, i) {
      let characterCount = CensusTaker.countCharacter(character, citizens);
      counts[character] = characterCount;
    });

    const elements = [];
    let total = 0;
    for (let key in counts) {
      elements.push(<div key={key + "-count"}>{counts[key]} {key}s</div>);
      total += counts[key];
    }

    return <div>
      <div id="census-link" onClick={this.togglePanel}>census ▼</div>
      <div id="census-panel" className={this.state.panelOpen ? "open" : "hidden"}>
        {elements}
        <div>Total population: {total}</div>
      </div>
    </div>
  }

  togglePanel() {
    this.setState({panelOpen: !this.state.panelOpen});
  }
}

export default Census;
