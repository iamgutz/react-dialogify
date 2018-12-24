import { EventEmitter } from 'fbemitter';
import { ACTIONS, STATUS } from './constants';

class Dialog {
  constructor() {
    this.eventEmitter = new EventEmitter();
  }

  on(eventName, ...args) {
    this.eventEmitter.addListener(eventName, ...args);
  }

  remove() {
    this.eventEmitter.removeAllListeners();
  }

  show(options, templateComponent) {
    this.eventEmitter.emit(ACTIONS.SHOW, options, templateComponent);
  }

  info(options) {
    const mergedOptions = Object.assign(options, { status: STATUS.info });
    this.show(mergedOptions, null);
  }

  success(options) {
    const mergedOptions = Object.assign(options, { status: STATUS.success });
    this.show(mergedOptions, null);
  }

  error(options) {
    const mergedOptions = Object.assign(options, { status: STATUS.error });
    this.show(mergedOptions, null);
  }

  pending(options) {
    const mergedOptions = Object.assign(options, { status: STATUS.pending });
    this.show(mergedOptions, null);
  }

  warning(options) {
    const mergedOptions = Object.assign(options, { status: STATUS.warning });
    this.show(mergedOptions, null);
  }

  close() {
    this.eventEmitter.emit(ACTIONS.HIDE, null);
  }
}

export default Dialog;
