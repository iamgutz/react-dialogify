import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal from './components/modal';
import Dialog from './dialog';
import { ACTIONS } from './constants';
import { getTemplate } from './helpers';

const dialog = new Dialog();
class DialogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: null,
      DialogComponent: getTemplate(props.template),
    };
    this.addDialog = this.addDialog.bind(this);
    this.removeDialog = this.removeDialog.bind(this);
  }

  componentDidMount() {
    dialog.on(ACTIONS.SHOW, this.addDialog);
    dialog.on(ACTIONS.HIDE, this.removeDialog);
  }

  componentWillUnmount() {
    dialog.remove();
  }

  addDialog(options, templateArg) {
    const { template } = this.props;
    const { DialogComponent } = this.state;
    const newTemplate = templateArg || template;
    this.setState({
      options,
      DialogComponent: getTemplate(newTemplate, DialogComponent),
    });
  }

  removeDialog() {
    this.setState({
      options: null,
      DialogComponent: null,
    });
  }

  render() {
    const { options, DialogComponent } = this.state;
    return (
      <Fragment>
        {options &&
          <Modal>
            <DialogComponent {...options} />
          </Modal>
        }
      </Fragment>
    );
  }
}

DialogContainer.propTypes = {
  template: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]),
};

DialogContainer.defaultProps = {
  template: null,
};

export {
  DialogContainer,
  dialog,
};
