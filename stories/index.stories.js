/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/button';
import Title from '../src/components/title';
import { DialogContainer, dialog } from '../src/index';

const showSuccess = () => {
  dialog.success({
    title: 'Great! Successful',
    text: 'Yep! This dialog shows you a successful thing has happened!',
    btnText: 'Close me now!',
    btnOnClick() { dialog.close(); },
  });
};
const showError = () => {
  dialog.error({
    title: 'Oops! Not good!',
    text: 'Boo! This dialog shows you a bad thing has happened!',
    btnText: 'Close me now!',
    btnOnClick() { dialog.close(); },
  });
};
const showPending = () => {
  dialog.pending({
    title: 'Wait! We are working!',
    text: 'Hang tight! This dialog shows you a thing is happening!',
    btnText: 'Close me now!',
    btnOnClick() { dialog.close(); },
  });
};
const showWarning = () => {
  dialog.warning({
    title: 'Watch out! Take a look!',
    text: 'Careful! This dialog shows you a thing may not be ok!',
    btnText: 'Close me now!',
    btnOnClick() { dialog.close(); },
  });
};
const showInfo = () => {
  dialog.info({
    title: 'News! Some tips!',
    text: 'Read this! This dialog shows you some useful info!',
    btnText: 'Close me now!',
    btnOnClick() { dialog.close(); },
  });
};
const showDefault = () => {
  dialog.show({
    title: 'Nothing fancy!',
    text: 'Just a regular dialog with no colors!',
    btnText: 'Close me now!',
    btnOnClick() { dialog.close(); },
  });
};

storiesOf('Dialog', module)
  .add('Basic Usage', () => (
    <div>
      <Title>Basic Usage of the Dialog Component</Title>
      <DialogContainer />
      <Button onClick={showSuccess} status="success">
        Show Success Dialog
      </Button>
      <Button onClick={showError} status="error">
        Show Error Dialog
      </Button>
      <Button onClick={showWarning} status="warning">
        Show Warning Dialog
      </Button>
      <Button onClick={showPending} status="pending">
        Show Pending Dialog
      </Button>
      <Button onClick={showInfo} status="info">
        Show Info Dialog
      </Button>
      <Button onClick={showDefault}>
        Show Default Dialog
      </Button>
    </div>
  ));
