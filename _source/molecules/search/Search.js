import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/input';

export default class Search extends Component {
  render() {
    const { className } = this.props;

    return (
      <div className={ `search ${className}` }>
        <Input placeholder="Search HighIQ..." className="search__input" />
      </div>
    );
  }
}

Search.propTypes = {
  className: PropTypes.string
};

Search.defaultProps = {
  className: ''
};
