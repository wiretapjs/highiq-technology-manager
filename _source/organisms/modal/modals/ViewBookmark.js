import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import Base from '../Base';
import Input from '../../../atoms/input';

export default class ViewBookmark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      __html: '',
      id: props.data.id,
      name: props.data.name,
      url: props.data.url,
      categoryId: props.data.categoryId,
      valid: true
    };
  }

  componentWillMount() {
    const bookmarkUrl = 'https://cors-anywhere.herokuapp.com/https://github.com/facebook/react';
  }

  componentDidMount() {
    //findDOMNode(this.refs.myWindowPanel).value = 'TEST';
    //$(findDOMNode(this.refs.myWindowPanel)).val('abc');

    fetch('https://cors-anywhere.herokuapp.com/' + this.state.url)
      .then((resp) => {
        return resp.text();
      })
      .then((content) => {
        this.setState({
          __html: content
        });
      })
      .catch((err) => {

      });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.data.id,
      name: nextProps.data.name,
      url: nextProps.data.url,
      categoryId: nextProps.data.categoryId,
      valid: true
    });
  }

  createMarkup() {
    return {__html: '<div class="ext">Hello!</div>'};
  }

  render() {
    const { onClose, onSave } = this.props;
    const { name, url, valid } = this.state;

    //const panel = document.getElementById('window-panel');
    //panel.html('TEST CONTENT');


    return (
      <Base onClose={ onClose } onSave={ () => { onSave(this.state); } } valid={ valid } headline="View bookmark" noMaxWidth='true'>
        {/*
        <div id="windowPanel" ref="myWindowPanel"></div>
        <div dangerouslySetInnerHTML={this.createMarkup()} ></div>
        */}
        <div dangerouslySetInnerHTML={this.state} />
      </Base>
    );
  }
}

ViewBookmark.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};
