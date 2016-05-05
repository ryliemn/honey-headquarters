import React from 'react';
import ReactDOM from 'react-dom';

class QuerySelect extends React.Component {
  constructor() {
    super();

    this.updateQuery = this.updateQuery.bind(this);
  }

  render() {
    const selectId = `${this.props.name}-select`;

    return <div className="query-select form-group">
      <label htmlFor={selectId}>{this.props.name}</label>
      <select id={selectId} onChange={this.updateQuery}>
        <option value=""></option>
        {this.props.options.map(function(opt, i) {
          return <option key={opt + i} value={opt}>{opt}</option>;
        })}
      </select>
    </div>;
  }

  updateQuery(e) {
    const fieldName = this.props.name;
    const value = e.target.value;
    this.props.updateQuery({
      [fieldName]: value
    });
  }
}

export default QuerySelect;
