import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

class Paginator extends React.Component {
  constructor() {
    super();

    this.updatePage = this.updatePage.bind(this);
  }

  render() {
    const pages = Math.ceil(this.props.citizen_count / 10);

    const pageButtons = [];

    for (let i = 1; i <= pages; i++) {
      pageButtons.push(
        <button
          type="button"
          key={i}
          className={"btn " + (i === this.props.currentPage ? 'btn-primary' : 'btn-default')}
          onClick={this.updatePage}>{i}
        </button>
      );
    }

    return <div className="btn-group paginator">
      {pageButtons}
    </div>
  }

  updatePage(e) {
    const ths = this;

    $("html, body").animate({ scrollTop: 0 }, 400);

    const list = $("#list");
    const content = e.currentTarget.textContent;

    list.fadeOut(400, function() {
      const pageNo = parseInt(content);
      ths.props.updatePage(pageNo);
      list.fadeIn(400);
    });

  }
}

export default Paginator;
