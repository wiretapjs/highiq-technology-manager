import React, { PropTypes, Component } from 'react';

/**
 * React component
 *
 * @class Breadcrumb
 * @classdesc organisms/breadcrumb/Breadcrumb
 *
 * @prop {string} [className] Optional class name
 */
export default class Breadcrumb extends Component {
  render() {
    const PROPS = this.props;
    const CLASS = 'o-breadcrumb ' + PROPS.className;

    /* eslint-disable react/self-closing-comp */
    return (
      <div className={ CLASS }>

      </div>
    );
    /* eslint-enable react/self-closing-comp */
  }
}

Breadcrumb.propTypes = {
  'className': PropTypes.string
};

Breadcrumb.defaultProps = {
  'className': ''
};
