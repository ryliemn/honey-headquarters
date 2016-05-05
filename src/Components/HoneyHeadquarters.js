import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import QueryBuilder from './QueryBuilder';
import CitizenList from './CitizenList';

class HoneyHeadquarters extends React.Component {
  constructor() {
    super();
    this.state = {
      citizens: [],
      filteredCitizens: [],
      character: '',
      hometown: '',
      size: ''
    };

    this.updateQuery = this.updateQuery.bind(this);
    this.updateFilteredCitizens = this.updateFilteredCitizens.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    $.get('https://sheetsu.com/apis/v1.0/64b5c3f8', function(result) {
      const r = result;
      const that = this;
      $("#loading").fadeOut(300, function() {
        that.animate(that.setState, {citizens: r});
      });
    }.bind(this));
  }

  render() {
    const query = {
      character: this.state.character,
      hometown: this.state.hometown,
      size: this.state.size
    }

    return <div>
      <QueryBuilder citizens={this.state.citizens} updateQuery={this.updateQuery} />
      <img id="loading" src="./static/hourglass.gif" />
      <CitizenList citizens={this.state.citizens} updateFilteredCitizens={this.updateFilteredCitizens} query={query} />
    </div>
  }

  updateQuery(query) {
    this.animate(this.setState, query);
  }

  updateFilteredCitizens(filteredCitizens) {
    this.setState(filteredCitizens);
  }

  animate(func, param) {
    const list = $("#list");
    const ths = this;
    list.fadeOut(300, function() {
      ths.setState(param);
      list.fadeIn(1000);
    })
  }
}

export default HoneyHeadquarters;
