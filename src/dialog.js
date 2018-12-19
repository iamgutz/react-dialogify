import { EventEmitter } from 'fbemitter';
import { ACTIONS } from './constants';

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

  hide() {
    this.eventEmitter.emit(ACTIONS.HIDE, null);
  }
}

export default Dialog;
