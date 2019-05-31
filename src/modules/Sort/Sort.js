import React from 'react';
import { connect } from 'react-redux';
import { sortAsc, sortDesc } from '../Product/ProductActions';

import './Sort.scss';

const Sort = props => {
  return (
    <div className="Sort">
      <h4 className="header">Sort:</h4>
      <button aria-label="Sort by Title A to Z" onClick={() => props.sortAsc("title")}>Title A-Z</button>
      <button aria-label="Sort by Title Z to A" onClick={() => props.sortDesc("title")}>Title Z-A</button>
      <button aria-label="Sort by Author A to Z" onClick={() => props.sortAsc("author")}>Author A-Z</button>
      <button aria-label="Sort by Author Z to A" onClick={() => props.sortDesc("author")}>Author Z-A</button>
      <button aria-label="Sort by Price ascending" onClick={() => props.sortAsc("price")}>Price Ascending</button>
      <button aria-label="Sort by Price descending" onClick={() => props.sortDesc("price")}>Price Descending</button>
    </div>
  );
}

const mapDispatchToProps = {
  sortAsc,
  sortDesc,
}

export default connect(null, mapDispatchToProps)(Sort);
