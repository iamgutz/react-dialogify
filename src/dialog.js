import { EventEmitter } from 'fbemitter';
import { ACTIONS, TYPES } from './constants';

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
    const mergedOptions = Object.assign(options, { type: TYPES.info });
    this.show(mergedOptions, null);
  }

  success(options) {
    const mergedOptions = Object.assign(options, { type: TYPES.success });
    this.show(mergedOptions, null);
  }

  error(options) {
    const mergedOptions = Object.assign(options, { type: TYPES.error });
    this.show(mergedOptions, null);
  }

  pending(options) {
    const mergedOptions = Object.assign(options, { type: TYPES.pending });
    this.show(mergedOptions, null);
  }

  warning(options) {
    const mergedOptions = Object.assign(options, { type: TYPES.warning });
    this.show(mergedOptions, null);
  }

  close() {
    this.eventEmitter.emit(ACTIONS.HIDE, null);
  }
}

export default Dialog;
