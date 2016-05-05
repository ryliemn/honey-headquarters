import React from 'react';
import ReactDOM from 'react-dom';

import QuerySelect from './QuerySelect';
import Census from './Census';

import FilterUtil from '../Utilities/FilterUtil';

class QueryBuilder extends React.Component {
  constructor() {
    super();
  }

  render() {
    const characters = FilterUtil.getCharacters(this.props.citizens);
    const hometowns = FilterUtil.getHometowns(this.props.citizens);
    const sizes = FilterUtil.getSizes(this.props.citizens);

    return <div id="query-builder">
      <h2 id="logo">Honey Headquarters</h2>
      <div id="query-selects">
        <QuerySelect
          name="character"
          options={characters}
          updateQuery={this.props.updateQuery} />
        <QuerySelect
          name="hometown"
          options={hometowns}
          updateQuery={this.props.updateQuery} />
        <QuerySelect
          name="size"
          options={sizes}
          updateQuery={this.props.updateQuery} />
        <Census citizens={this.props.citizens} characters={characters} />
        </div>
    </div>
  }
}

export default QueryBuilder;
