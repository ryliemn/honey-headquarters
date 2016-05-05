import React from 'react';
import ReactDOM from 'react-dom';

import Citizen from './Citizen';
import Paginator from './Paginator';

import FilterUtil from '../Utilities/FilterUtil';

class CitizenList extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPage: 1
    }

    this.updatePage = this.updatePage.bind(this);
  }

  componentWillReceiveProps() {
    this.updatePage(1);
  }

  render() {
    const filteredCitizens = FilterUtil.filter(this.props.citizens, this.props.query);
    const pageOfCitizens = [];
    const startingIndex = (this.state.currentPage - 1) * 10;
    const endingIndex = startingIndex + 9;
    for (let i = startingIndex; i <= endingIndex && i < filteredCitizens.length; i++) {
      pageOfCitizens.push(filteredCitizens[i]);
    }

    return <div>
      <div>
        <div id="list">
          {pageOfCitizens.map(function(citizen, i) {
            return <Citizen key={citizen.id} citizen={citizen} />;
          })}
        </div>
      </div>
      <Paginator
        citizen_count={filteredCitizens.length}
        updatePage={this.updatePage}
        currentPage={this.state.currentPage} />
    </div>
  }

  updatePage(pageNo) {
    this.setState({currentPage: pageNo});
  }

}

export default CitizenList;
