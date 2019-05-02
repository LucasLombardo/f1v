import React, { Component } from 'react';
import { Card as Base } from '@material-ui/core';
// import PropTypes from 'prop-types';

import './ListCard.scss';


class ListCard extends Component {
  render() {

  const { header, items } = this.props

    return (
      <Base className="card">
        <h1 className="card-header-text">{header}</h1>
        <div className="card-items-container">
        {items.map(item => <p>{item}</p>)}
        </div>
      </Base>
    );
  }
}

ListCard.propTypes = {

};

ListCard.defaultProps = {
};

export default ListCard;
