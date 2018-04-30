import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../atoms/icon';
import { ButtonLargePrimary, ButtonLargeLight } from '../../atoms/button';
import { H3 } from '../../atoms/headline';

export default class Modal extends Component {
  render() {
    const { children, onClose, headline, noPadding, noCancel, noMaxWidth, onSave, valid } = this.props;

    return (
      <div className={ classNames(['modal__inner', noMaxWidth && 'modal__inner--view']) } onClick={ (e) => { e.stopPropagation(); } }>
        <header className="modal__header">
          { headline && <H3 className="modal__headline">{ headline }</H3> }
          <Icon icon="close" color="light" onClick={ onClose } />
        </header>
        <div className={ classNames(['modal__content', !noPadding && 'modal__content--padding']) }>
          { children }
        </div>
        <footer className="modal__footer">
          { !noCancel && <ButtonLargeLight className="modal__button modal__button--cancel" icon="close" onClick={ onClose }>{ 'Cancel' }</ButtonLargeLight> }
          <ButtonLargePrimary disabled={ !valid } className="modal__button" icon="save" onClick={ onSave }>{ 'Confirm' }</ButtonLargePrimary>
        </footer>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  headline: PropTypes.string,
  noPadding: PropTypes.bool,
  noCancel: PropTypes.bool,
  noMaxWidth: PropTypes.bool,
  valid: PropTypes.bool
};

Modal.defaultProps = {
  toolbar: false,
  className: '',
  noPadding: false,
  noCancel: false,
  noMaxWidth: false,
  valid: true
};
